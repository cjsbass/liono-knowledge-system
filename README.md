# LIONO Knowledge Management System

A modern knowledge management system that connects people, companies, projects, and documents in a graph-based structure.

## Features

- User authentication and workspace management
- Graph-based knowledge visualization
- Entity management (People, Companies, Projects, Documents, Locations)
- Document storage and parsing
- Search functionality

## Tech Stack

- Next.js 15.1.0
- React 18.3.1
- TypeScript
- Tailwind CSS
- Clerk (authentication)
- Shadcn UI components

## API Integration

The frontend connects to several backend APIs:

- `ask-frank-users` - User management
- `ask-frank-workspaces` - Workspace management
- `ask-frank-files` - File management
- `ask-frank-ocr` - Document OCR processing
- `ask-api-media` - Media handling
- `ask-api-chunks` - Document chunks/segments
- `ask-api-proxy` - General API proxy

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/cjsbass/liono-knowledge-system.git
cd liono-knowledge-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with the following variables:
```
# Clerk API keys (for authentication)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# API URL
NEXT_PUBLIC_API_BASE_URL=https://your-backend-api-url.com
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application is configured for Vercel deployment. Current deployment URL:
https://liono-knowledge-system-bhnbo4h2c.vercel.app

## Project Structure

- `/app` - Next.js pages and layouts
- `/components` - Reusable UI components
- `/contexts` - React context providers
- `/hooks` - Custom React hooks
- `/lib` - Utility functions and API services
- `/public` - Static assets
- `/styles` - Global CSS

## Contact

For any questions, please contact:
- Cornell Basson: cornellbasson@gmail.com 