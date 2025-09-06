# AI-ATC System - Animal Type Classification

## Overview

The AI-ATC System is a React-based web application designed for AI-powered animal type classification, specifically targeting cattle and buffalo analysis. The system enables field personnel to upload animal images, receive AI-driven analysis with detailed measurements, and manage classification records. Built with a clean, professional interface optimized for mobile use, the application serves as a comprehensive tool for livestock classification and data management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript using functional components and hooks
- **Routing**: Wouter for client-side navigation with pages for dashboard, upload, results, and history
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design tokens and responsive design optimized for mobile devices
- **State Management**: TanStack Query for server state and caching, with React hooks for local state

### Backend Architecture
- **Server**: Express.js with TypeScript for API endpoints
- **Development Setup**: Vite for frontend build tooling with hot module replacement
- **File Handling**: Multer middleware for image upload processing with 10MB file size limits
- **Storage Pattern**: Interface-based storage abstraction with in-memory implementation for development

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Design**: Users table for authentication and classification_records table storing image metadata, measurements, and analysis results
- **File Storage**: Local file system for uploaded images during development
- **Caching**: TanStack Query for client-side data caching with 5-minute stale time for classifications

### Authentication and Authorization
- **Current State**: Basic user schema exists but authentication is not yet implemented
- **Planned**: Session-based authentication with user-specific data access
- **Data Access**: Classification records can be filtered by user ID when authentication is implemented

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database driver for Neon Database integration
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect for database operations
- **@tanstack/react-query**: Server state management and data fetching with caching
- **wouter**: Lightweight client-side routing library

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives for components
- **tailwindcss**: Utility-first CSS framework with custom design system
- **class-variance-authority**: Type-safe component variant management
- **lucide-react**: Icon library for consistent iconography

### Development Tools
- **vite**: Frontend build tool with React plugin and development server
- **tsx**: TypeScript execution for Node.js server development
- **multer**: Express middleware for handling multipart/form-data file uploads
- **esbuild**: JavaScript bundler for production server builds

### Planned Integrations
- **AI/ML Service**: External API for image analysis and animal classification (not yet implemented)
- **Cloud Storage**: Image storage service for production deployment
- **Authentication Provider**: Session management and user authentication system