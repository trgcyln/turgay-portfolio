# replit.md

## Overview

This is a professional developer portfolio website for Turgay Ceylan, a Full Stack Developer & Software Engineer. The application showcases professional experience, skills, education, and contact information in a clean, modern single-page layout. The design follows Linear-inspired minimalist aesthetics with a focus on content hierarchy and professional presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router alternative to React Router)
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **Component Library**: shadcn/ui (Radix UI primitives with Tailwind styling)
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful endpoints prefixed with `/api`
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` for shared types between frontend and backend
- **Migration Tool**: Drizzle Kit for database migrations
- **Current Storage**: In-memory storage implementation (`MemStorage`) with interface for easy database swap

### Design System
- **Typography**: Inter (primary) and JetBrains Mono (code/technical)
- **Color System**: HSL-based CSS variables supporting light/dark modes
- **Component Style**: shadcn/ui "new-york" variant with neutral base colors
- **Layout**: Max-width containers (6xl) with consistent spacing units

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/  # React components including shadcn/ui
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and query client
│   │   └── pages/       # Page components
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route registration
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Database migrations
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets/*` → `./attached_assets/*`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session store for PostgreSQL

### UI Components (Radix UI)
Full suite of accessible, unstyled primitives including: Accordion, Dialog, Dropdown Menu, Popover, Select, Tabs, Toast, Tooltip, and more.

### Development Tools
- **Vite**: Build tool with React plugin
- **ESBuild**: Production server bundling
- **Drizzle Kit**: Database migration tooling
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (development only)

### Additional Libraries
- **react-icons**: Icon library (includes GitHub, LinkedIn, HackerRank icons)
- **lucide-react**: Icon components
- **date-fns**: Date formatting utilities
- **zod**: Schema validation
- **class-variance-authority**: Component variant management
- **embla-carousel-react**: Carousel functionality
- **react-day-picker**: Calendar component
- **wouter**: Lightweight routing