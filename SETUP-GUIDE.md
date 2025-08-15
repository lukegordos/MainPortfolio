# Portfolio Setup - GitHub Copilot Instructions

This is your complete full-stack portfolio application! Here's everything you need to know:

## What You've Got

✅ **Frontend (Next.js 14)**
- Modern React app with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- Contact form with validation
- Visitor analytics tracking
- Dark/light mode toggle
- Responsive design

✅ **Backend (Node.js + Express)**
- RESTful API with TypeScript
- PostgreSQL database with Prisma ORM
- Email notifications via Nodemailer
- Input validation with Zod
- Analytics tracking
- Contact form handling

✅ **Database Schema**
- Skills with proficiency levels
- Work experience timeline
- Projects showcase
- Contact messages storage
- Visitor analytics

## Quick Start Commands

### 1. Install Dependencies
```bash
# Frontend
cd frontend && npm install

# Backend  
cd backend && npm install
```

### 2. Setup Database
```bash
cd backend

# Copy environment file
cp .env.example .env

# Edit .env with your database URL and email settings
# Then run:
npm run db:generate
npm run db:push
npm run db:seed
```

### 3. Start Development
```bash
# Terminal 1 - Backend
cd backend && npm run dev

# Terminal 2 - Frontend
cd frontend && npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## Environment Setup

### Backend .env file:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT=587
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_FROM="your-email@gmail.com"
EMAIL_TO="your-email@gmail.com"
PORT=3001
NODE_ENV=development
FRONTEND_URL="http://localhost:3000"
```

### Frontend .env.local file:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

## Database Options

### Option 1: Local PostgreSQL
Install PostgreSQL locally and create a database

### Option 2: Supabase (Recommended)
1. Go to https://supabase.com
2. Create a new project
3. Copy the PostgreSQL connection string
4. Use it as your DATABASE_URL

### Option 3: Railway/Render
Both offer free PostgreSQL databases

## Email Setup (Gmail)
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in your .env file

## Deployment Ready

### Frontend → Vercel
- Connect your GitHub repo
- Set `NEXT_PUBLIC_BACKEND_URL` to your backend URL
- Auto-deploys on push

### Backend → Render/Railway
- Connect your GitHub repo  
- Set all environment variables
- Deploy automatically

## Customization

### Add Your Content
1. Edit `backend/src/seed.ts` with your info
2. Run `npm run db:seed`
3. Update contact links in contact page

### Styling
- Modify colors in `frontend/app/globals.css`
- Update theme in `tailwind.config.js`

## API Endpoints

- `GET /api/skills` - Get all skills
- `GET /api/work` - Get work experience  
- `GET /api/projects` - Get projects
- `POST /api/contact` - Submit contact form
- `POST /api/analytics` - Track visitor
- `GET /api/analytics/summary` - Analytics summary

## Features Included

✅ Responsive design
✅ Dark/light mode
✅ Contact form with email
✅ Visitor analytics
✅ Skills with progress bars
✅ Work experience timeline
✅ Projects showcase
✅ SEO optimized
✅ TypeScript throughout
✅ Form validation
✅ Error handling
✅ Loading states

This portfolio will definitely impress recruiters with its modern tech stack and full-stack implementation! 🚀
