@echo off
echo Setting up VitaCare Plus backend...

REM Create .env from example if it doesn't exist
if not exist .env (
    copy .env.example .env
    echo Created .env from .env.example
) else (
    echo .env already exists
)

echo Running database setup...
npx prisma db push
if errorlevel 1 (
    echo Database push failed
    exit /b 1
)

echo Seeding database with demo data...
node prisma/seed.js
if errorlevel 1 (
    echo Seed failed
    exit /b 1
)

echo.
echo Setup complete! Run: npm run dev
