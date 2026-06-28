const router = require('express').Router();
const { z } = require('zod');
const prisma = require('../lib/prisma');
const { requireAuth } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

router.use(requireAuth);

async function getPatient(userId) {
  return prisma.patient.findUnique({ where: { userId } });
}

// GET /community/groups
router.get('/groups', async (req, res) => {
  const patient = await getPatient(req.user.sub);
  const groups = await prisma.communityGroup.findMany({
    include: {
      _count: { select: { members: true, posts: true } },
      members: patient ? { where: { patientId: patient.id } } : false,
    },
    orderBy: { name: 'asc' },
  });
  res.json(
    groups.map((g) => ({
      ...g,
      memberCount: g._count.members,
      postCount: g._count.posts,
      joined: patient ? g.members.length > 0 : false,
      members: undefined,
      _count: undefined,
    }))
  );
});

// POST /community/groups/:slug/join
router.post('/groups/:slug/join', async (req, res) => {
  const patient = await getPatient(req.user.sub);
  const group = await prisma.communityGroup.findUnique({ where: { slug: req.params.slug } });
  if (!group) return res.status(404).json({ error: 'Group not found' });

  await prisma.communityMember.upsert({
    where: { groupId_patientId: { groupId: group.id, patientId: patient.id } },
    create: { groupId: group.id, patientId: patient.id },
    update: {},
  });
  res.json({ message: 'Joined group', groupId: group.id });
});

// DELETE /community/groups/:slug/join
router.delete('/groups/:slug/join', async (req, res) => {
  const patient = await getPatient(req.user.sub);
  const group = await prisma.communityGroup.findUnique({ where: { slug: req.params.slug } });
  if (!group) return res.status(404).json({ error: 'Group not found' });

  await prisma.communityMember.deleteMany({ where: { groupId: group.id, patientId: patient.id } });
  res.json({ message: 'Left group' });
});

// GET /community/feed — posts from joined groups
router.get('/feed', async (req, res) => {
  const patient = await getPatient(req.user.sub);
  const limit = Math.min(Number(req.query.limit) || 20, 50);
  const offset = Number(req.query.offset) || 0;

  const joinedGroups = await prisma.communityMember.findMany({ where: { patientId: patient.id }, select: { groupId: true } });
  const groupIds = joinedGroups.map((m) => m.groupId);

  const posts = await prisma.communityPost.findMany({
    where: { groupId: { in: groupIds } },
    include: {
      author: { include: { user: { select: { name: true } } } },
      group: { select: { name: true, slug: true } },
      _count: { select: { comments: true, likes: true } },
      likes: patient ? { where: { patientId: patient.id } } : false,
    },
    orderBy: { createdAt: 'desc' },
    take: limit,
    skip: offset,
  });

  res.json(
    posts.map((p) => ({
      ...p,
      likeCount: p._count.likes,
      commentCount: p._count.comments,
      likedByMe: patient ? p.likes.length > 0 : false,
      likes: undefined,
      _count: undefined,
    }))
  );
});

// GET /community/groups/:slug/posts
router.get('/groups/:slug/posts', async (req, res) => {
  const patient = await getPatient(req.user.sub);
  const group = await prisma.communityGroup.findUnique({ where: { slug: req.params.slug } });
  if (!group) return res.status(404).json({ error: 'Group not found' });

  const posts = await prisma.communityPost.findMany({
    where: { groupId: group.id },
    include: {
      author: { include: { user: { select: { name: true } } } },
      _count: { select: { comments: true, likes: true } },
      likes: patient ? { where: { patientId: patient.id } } : false,
    },
    orderBy: { createdAt: 'desc' },
    take: 30,
  });

  res.json(
    posts.map((p) => ({
      ...p,
      likeCount: p._count.likes,
      commentCount: p._count.comments,
      likedByMe: patient ? p.likes.length > 0 : false,
      likes: undefined,
      _count: undefined,
    }))
  );
});

// POST /community/groups/:slug/posts
router.post(
  '/groups/:slug/posts',
  validate(z.object({ content: z.string().min(1).max(1000) })),
  async (req, res) => {
    const patient = await getPatient(req.user.sub);
    const group = await prisma.communityGroup.findUnique({ where: { slug: req.params.slug } });
    if (!group) return res.status(404).json({ error: 'Group not found' });

    const post = await prisma.communityPost.create({
      data: { groupId: group.id, authorId: patient.id, content: req.body.content },
      include: { author: { include: { user: { select: { name: true } } } }, group: { select: { name: true } } },
    });
    res.status(201).json({ ...post, likeCount: 0, commentCount: 0, likedByMe: false });
  }
);

// POST /community/posts/:id/like
router.post('/posts/:id/like', async (req, res) => {
  const patient = await getPatient(req.user.sub);
  try {
    await prisma.postLike.create({ data: { postId: req.params.id, patientId: patient.id } });
    res.json({ liked: true });
  } catch {
    // Already liked — unlike
    await prisma.postLike.deleteMany({ where: { postId: req.params.id, patientId: patient.id } });
    res.json({ liked: false });
  }
});

// GET /community/posts/:id/comments
router.get('/posts/:id/comments', async (req, res) => {
  const comments = await prisma.communityComment.findMany({
    where: { postId: req.params.id },
    include: { author: { include: { user: { select: { name: true } } } } },  // CommunityComment author is authorId (string), not a relation — fix:
    orderBy: { createdAt: 'asc' },
  });
  res.json(comments);
});

// POST /community/posts/:id/comments
router.post(
  '/posts/:id/comments',
  validate(z.object({ content: z.string().min(1).max(500) })),
  async (req, res) => {
    const patient = await getPatient(req.user.sub);
    const comment = await prisma.communityComment.create({
      data: { postId: req.params.id, authorId: patient.id, content: req.body.content },
    });
    res.status(201).json(comment);
  }
);

module.exports = router;
