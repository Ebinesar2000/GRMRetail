# GroupRM Booking Retail Application

## Overview

This is a full-stack travel booking application built for group retail management. The application provides a comprehensive platform for managing travel bookings, payments, and deals with a focus on group travel arrangements.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **UI Library**: Ant Design (antd) for primary components with shadcn/ui for additional UI elements
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack React Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Internationalization**: react-i18next with English and Hindi language support

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Structure**: RESTful API with `/api` prefix
- **Session Management**: express-session with PostgreSQL session store (connect-pg-simple)
- **Development**: Hot module replacement via Vite middleware integration

### Data Storage Solutions
- **Database**: PostgreSQL via Neon serverless database
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Core Application Components
1. **Header Component**: Navigation, user profile, notifications with accessibility support
2. **TopBanner Component**: Promotional announcements with call-to-action
3. **RequestForm Component**: Multi-trip type booking form (one-way, round-trip, multi-city)
4. **DealCard Component**: Travel deal display with pricing and features
5. **Marketplace Component**: Package browsing with filtering capabilities
6. **RecentBookings Component**: Booking history and management
7. **Accessibility Component**: Theme switching and accessibility features

### UI Component System
- **Design System**: shadcn/ui components with Radix UI primitives
- **Theme Support**: Multiple themes including default, dark, high-contrast, and accessibility variants
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

### Form Handling
- **Validation**: React Hook Form with Zod schema validation
- **Date Handling**: Ant Design DatePicker components
- **Dynamic Forms**: Multi-city trip segments with add/remove functionality

## Data Flow

### Client-Server Communication
1. **API Requests**: Centralized through queryClient with automatic error handling
2. **Authentication**: Cookie-based sessions with 401 handling
3. **Real-time Updates**: React Query for automatic data synchronization
4. **Error Handling**: Global error boundaries with user-friendly messages

### State Management Pattern
1. **Server State**: TanStack React Query for caching and synchronization
2. **Form State**: React Hook Form for local form management
3. **UI State**: React useState/useEffect for component-level state
4. **Theme State**: CSS variables with class-based theme switching

### Data Validation
1. **Runtime Validation**: Zod schemas for API data validation
2. **Database Schema**: Drizzle ORM schema definitions
3. **Form Validation**: React Hook Form with resolver integration

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **antd**: Primary UI component library
- **wouter**: Lightweight routing solution

### Development Dependencies
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit integration features
- **tsx**: TypeScript execution for development server

### Styling and Theming
- **tailwindcss**: Utility-first CSS framework
- **@radix-ui/***: Headless UI primitives
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Assets**: Vite handles asset optimization and bundling

### Environment Configuration
- **Development**: Hot reload with Vite dev server middleware
- **Production**: Static file serving with Express
- **Database**: Environment-based connection string configuration

### Deployment Targets
- **Replit**: Primary deployment platform with integrated development environment
- **Node.js**: Standard Node.js runtime compatibility
- **Static Hosting**: Frontend can be deployed separately if needed

### Database Management
- **Migrations**: Drizzle Kit for schema migrations
- **Connection Pooling**: Neon serverless handles connection management
- **Environment Variables**: `DATABASE_URL` for connection configuration

### Performance Optimizations
- **Code Splitting**: Vite automatic code splitting
- **Tree Shaking**: Dead code elimination in production builds
- **Asset Optimization**: Automatic image and asset optimization
- **Caching**: React Query provides intelligent caching strategies