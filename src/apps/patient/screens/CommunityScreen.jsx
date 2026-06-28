import React from 'react';
import { Icon } from '../../../components/Icon';
import { Card } from '../../../components/Card';
import { Avatar } from '../../../components/Avatar';
import { Badge } from '../../../components/Badge';

const GROUPS = [
  { id: 'diabetes', name: 'Diabetes Warriors', members: 2841, icon: 'water_drop', color: '#2563EB', tag: 'Type 2', posts: 12, latest: '2 min ago', joined: true, description: 'Share tips on blood sugar control, meal plans, and living well with diabetes.' },
  { id: 'arthritis', name: 'Arthritis Support', members: 1204, icon: 'accessibility_new', color: '#7C3AED', tag: 'Arthritis', posts: 5, latest: '18 min ago', joined: false, description: 'Joint pain management, physiotherapy tips, and emotional support.' },
  { id: 'hypertension', name: 'Heart & BP Club', members: 3102, icon: 'favorite', color: '#DC2626', tag: 'Hypertension', posts: 8, latest: '1 hr ago', joined: false, description: 'Track BP together. Salt-free recipes, yoga tips, medication reminders.' },
  { id: 'anemia', name: 'Anemia Awareness', members: 876, icon: 'bloodtype', color: '#EA580C', tag: 'Anemia', posts: 3, latest: '3 hr ago', joined: false, description: 'Iron-rich foods, haemoglobin tracking, community stories and support.' },
  { id: 'vitamind', name: 'Vitamin D & Bone Health', members: 1527, icon: 'wb_sunny', color: '#F59E0B', tag: 'Vitamin D', posts: 6, latest: '4 hr ago', joined: true, description: 'Sunlight routines, supplements, calcium intake, and bone density discussions.' },
  { id: 'women', name: "Women's Wellness Circle", members: 4210, icon: 'female', color: '#EC4899', tag: "Women's Health", posts: 22, latest: '30 min ago', joined: false, description: 'PCOS, thyroid, hormonal health, and women-specific chronic disease management.' },
];

const FEED_POSTS = [
  { group: 'Diabetes Warriors', user: 'Meena S.', initials: 'MS', time: '5 min ago', content: "My HbA1c dropped from 8.2 to 6.8 in 3 months using the app's logging feature! Walking 30 min every evening made a huge difference.", likes: 47, comments: 12 },
  { group: 'Vitamin D & Bone Health', user: 'Rajan P.', initials: 'RP', time: '1 hr ago', content: 'Doctor prescribed Vit D3 60,000 IU weekly. Anyone else on this dose? How long did you take to see improvement?', likes: 23, comments: 18 },
  { group: 'Diabetes Warriors', user: 'Priya L.', initials: 'PL', time: '2 hr ago', content: 'Meal prep Sunday: Made bitter gourd sabzi, methi roti, and moong dal. Glucose only went to 132 after this! Sharing the recipe below…', likes: 89, comments: 31 },
];

function GroupCard({ g, onToggle }) {
  return (
    <Card style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', gap: 12 }}>
        <div style={{ width: 46, height: 46, borderRadius: 'var(--r-xl)', background: `color-mix(in srgb, ${g.color} 12%, transparent)`, border: `1px solid color-mix(in srgb, ${g.color} 25%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={g.icon} size={22} color={g.color} fill={1} />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>{g.name}</div>
            <button
              onClick={() => onToggle(g.id)}
              style={{ appearance: 'none', border: `1.5px solid ${g.joined ? 'var(--border)' : g.color}`, borderRadius: 'var(--r-pill)', padding: '4px 12px', background: g.joined ? 'var(--bg)' : `color-mix(in srgb, ${g.color} 10%, transparent)`, color: g.joined ? 'var(--text-secondary)' : g.color, fontSize: 11, fontWeight: 700, cursor: 'pointer', flexShrink: 0 }}
            >{g.joined ? 'Joined ✓' : 'Join'}</button>
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 2, lineHeight: 1.4 }}>{g.description}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
            <span style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="group" size={13} color="var(--text-secondary)" />
              {g.members.toLocaleString()} members
            </span>
            <span style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Icon name="chat_bubble" size={13} color="var(--text-secondary)" />
              {g.posts} new posts · {g.latest}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
}

function FeedPost({ post }) {
  const [liked, setLiked] = React.useState(false);
  return (
    <Card style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
        <Avatar initials={post.initials} size={36} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>{post.user}</div>
          <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 1 }}>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{post.group}</span> · {post.time}
          </div>
        </div>
      </div>
      <div style={{ fontSize: 13, color: 'var(--text-primary)', lineHeight: 1.5, marginBottom: 12 }}>{post.content}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingTop: 10, borderTop: '1px solid var(--border)' }}>
        <button
          onClick={() => setLiked(l => !l)}
          style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, color: liked ? 'var(--error)' : 'var(--text-secondary)', fontSize: 12, fontWeight: 600, padding: 0 }}
        >
          <Icon name="favorite" size={16} color={liked ? 'var(--error)' : 'var(--text-secondary)'} fill={liked ? 1 : 0} />
          {post.likes + (liked ? 1 : 0)}
        </button>
        <button style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-secondary)', fontSize: 12, fontWeight: 600, padding: 0 }}>
          <Icon name="chat_bubble_outline" size={16} color="var(--text-secondary)" />
          {post.comments}
        </button>
        <button style={{ appearance: 'none', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-secondary)', fontSize: 12, fontWeight: 600, padding: 0, marginLeft: 'auto' }}>
          <Icon name="share" size={16} color="var(--text-secondary)" />
          Share
        </button>
      </div>
    </Card>
  );
}

export function CommunityScreen() {
  const [view, setView] = React.useState('feed');
  const [groups, setGroups] = React.useState(GROUPS);

  const toggleJoin = (id) => {
    setGroups(gs => gs.map(g => g.id === id ? { ...g, joined: !g.joined } : g));
  };

  return (
    <div style={{ paddingBottom: 28 }}>
      <div style={{ padding: '14px 20px 0' }}>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: -0.3 }}>Community</div>
        <div style={{ fontSize: 13, color: 'var(--text-secondary)', marginTop: 4 }}>Connect with people managing similar conditions across India.</div>
      </div>

      {/* Joined count */}
      <div style={{ margin: '14px 20px 0', padding: '12px 14px', borderRadius: 'var(--r-lg)', background: 'color-mix(in srgb, var(--primary) 8%, transparent)', border: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name="group" size={20} color="var(--primary)" fill={1} />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>
          You're in <span style={{ color: 'var(--primary)', fontWeight: 800 }}>{groups.filter(g => g.joined).length} groups</span> · {groups.reduce((s, g) => s + (g.joined ? g.members : 0), 0).toLocaleString()} members in your community
        </span>
      </div>

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: 0, margin: '14px 20px 0', borderRadius: 'var(--r-lg)', overflow: 'hidden', border: '1px solid var(--border)', background: 'var(--bg)' }}>
        {[['feed', 'My Feed', 'rss_feed'], ['groups', 'Groups', 'groups']].map(([id, label, ico]) => (
          <button
            key={id}
            onClick={() => setView(id)}
            style={{ flex: 1, appearance: 'none', border: 'none', cursor: 'pointer', padding: '10px 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 13, fontWeight: 700, background: view === id ? 'var(--primary)' : 'transparent', color: view === id ? '#fff' : 'var(--text-secondary)', transition: 'all 0.2s' }}
          >
            <Icon name={ico} size={16} color={view === id ? '#fff' : 'var(--text-secondary)'} />
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: '14px 20px 0' }}>
        {view === 'feed' ? (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>Trending in Your Groups</div>
            {FEED_POSTS.map((p, i) => <FeedPost key={i} post={p} />)}
          </>
        ) : (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5 }}>All Groups</div>
            {groups.map(g => <GroupCard key={g.id} g={g} onToggle={toggleJoin} />)}
          </>
        )}
      </div>
    </div>
  );
}
