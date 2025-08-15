#!/bin/bash

echo "🚀 Setting up Portfolio Application..."

# Check if we're in the right directory
if [ ! -d "frontend" ] || [ ! -d "backend" ]; then
    echo "❌ Please run this script from the portfolio root directory"
    exit 1
fi

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Setup environment file
echo "🔧 Setting up environment file..."
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo "✅ Created .env file from .env.example"
    echo "⚠️  Please edit backend/.env with your database and email settings"
else
    echo "✅ .env file already exists"
fi

cd ..

# Create frontend environment file
echo "🔧 Setting up frontend environment..."
if [ ! -f "frontend/.env.local" ]; then
    echo "NEXT_PUBLIC_BACKEND_URL=http://localhost:3001" > frontend/.env.local
    echo "✅ Created frontend/.env.local"
else
    echo "✅ Frontend .env.local already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your database URL and email settings"
echo "2. Run: cd backend && npm run db:generate"
echo "3. Run: cd backend && npm run db:push"
echo "4. Run: cd backend && npm run db:seed"
echo "5. Start backend: cd backend && npm run dev"
echo "6. Start frontend: cd frontend && npm run dev"
echo ""
echo "Visit http://localhost:3000 to see your portfolio!"
