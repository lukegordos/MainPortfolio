# Full-Stack Portfolio Application

A modern, full-stack personal portfolio built with Next.js 14, Node.js, Express, and PostgreSQL. Features visitor analytics, contact form with email notifications, and dynamic content management.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with server-side rendering
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Query** - Data fetching and caching
- **React Hook Form + Zod** - Form validation

### Backend
- **Node.js + Express** - Server runtime and web framework
- **TypeScript** - Type-safe server code
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Relational database
- **Nodemailer** - Email sending
- **Zod** - Runtime type validation

### DevOps & Deployment
- **Vercel** - Frontend hosting
- **Render/Railway** - Backend hosting
- **Supabase** - PostgreSQL hosting
- **GitHub Actions** - CI/CD (optional)

## 📁 Project Structure

```
portfolio/
├── frontend/                 # Next.js frontend application
│   ├── app/                 # App router pages
│   │   ├── contact/         # Contact page
│   │   ├── projects/        # Projects page
│   │   ├── work/           # Work experience page
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Reusable components
│   │   ├── about-section.tsx
│   │   ├── analytics-tracker.tsx
│   │   ├── footer.tsx
│   │   ├── navbar.tsx
│   │   ├── skills-section.tsx
│   │   └── theme-provider.tsx
│   ├── lib/               # Utilities and API
│   │   └── api.ts         # API client
│   ├── package.json
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── next.config.js
│
├── backend/                # Node.js/Express backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   │   ├── analytics.ts
│   │   │   ├── contact.ts
│   │   │   ├── projects.ts
│   │   │   ├── skills.ts
│   │   │   └── work.ts
│   │   ├── index.ts       # Main server file
│   │   └── seed.ts        # Database seeding
│   ├── prisma/
│   │   └── schema.prisma  # Database schema
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env with your database and email configuration
# DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"
# EMAIL_HOST="smtp.gmail.com"
# EMAIL_USER="your-email@gmail.com"
# EMAIL_PASSWORD="your-app-password"
# etc...

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed database with sample data
npm run db:seed

# Start development server
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env.local file
echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:3001" > .env.local

# Start development server
npm run dev
```

## 🔧 Environment Variables

### Backend (.env)
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

### Frontend (.env.local)
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

## 📊 Database Schema

The application uses 5 main tables:

- **skills** - Technical skills with proficiency levels
- **work_experience** - Employment history
- **projects** - Portfolio projects
- **contact_messages** - Contact form submissions
- **analytics** - Visitor tracking data

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repo to Vercel
2. Set environment variable: `NEXT_PUBLIC_BACKEND_URL=https://your-backend.render.com`
3. Deploy automatically on push

### Backend (Render/Railway)
1. Connect your GitHub repo
2. Set all environment variables
3. Deploy with build command: `npm run build`
4. Start command: `npm start`

### Database (Supabase)
1. Create a new Supabase project
2. Copy the PostgreSQL connection string
3. Update `DATABASE_URL` in your backend environment

## 📧 Email Configuration

For Gmail SMTP:
1. Enable 2-factor authentication
2. Generate an app password
3. Use the app password in `EMAIL_PASSWORD`

## 🎨 Customization

### Adding Your Content
1. Edit the seed file (`backend/src/seed.ts`) with your information
2. Run `npm run db:seed` to update the database
3. Update contact links in the contact page
4. Replace placeholder email addresses

### Styling
- Modify `frontend/tailwind.config.js` for theme customization
- Edit `frontend/app/globals.css` for global styles
- Update color scheme in the CSS variables

## 📈 Features

### Analytics
- Tracks visitor IP addresses and user agents
- View analytics summary at `/api/analytics/summary`
- Automatic tracking on page loads

### Contact Form
- Form validation with Zod
- Email notifications via Nodemailer
- Stores submissions in database
- Success/error feedback

### Dynamic Content
- Skills with proficiency bars
- Timeline-based work experience
- Project cards with live/GitHub links
- Responsive design

### Performance
- Server-side rendering with Next.js
- Image optimization
- Code splitting
- Tailwind CSS for minimal bundle size

## 🔧 Development Commands

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Backend
```bash
npm run dev          # Start development server with nodemon
npm run build        # Compile TypeScript
npm run start        # Start production server
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run migrations
npm run db:seed      # Seed database
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own portfolio!

---

**Need help?** Open an issue on GitHub or contact me through the portfolio contact form.
