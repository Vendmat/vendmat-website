# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Vendmat company website** - a modern Next.js application showcasing Vendmat's smart food vending machine solutions. The site serves as the primary marketing and information hub for corporate clients, educational institutions, and transit hubs looking to deploy vending machines.

## Common Development Commands

### Development & Build
```bash
npm run dev         # Development server with Turbopack (recommended)
npm run build       # Production build
npm start           # Production server
npm run lint        # ESLint code checking
```

## Architecture

### Technology Stack
- **Framework**: Next.js 15.3.4 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **TypeScript**: Full TypeScript implementation with strict mode
- **Images**: Next.js Image component with optimization
- **Fonts**: Geist and Inter fonts from Google Fonts

### Key Design Patterns
- **Component Architecture**: Reusable components in `/src/components/`
- **App Router**: File-based routing in `/src/app/` directory
- **Brand Consistency**: Orange theme (#f8650c) throughout the application
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **SEO Optimization**: Comprehensive metadata and Open Graph tags

### Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Homepage with hero, features, menu preview
│   ├── layout.tsx    # Root layout with fonts and metadata
│   ├── globals.css   # Global styles and Tailwind imports
│   └── [pages]/      # Individual pages (about, contact, etc.)
├── components/       # Reusable UI components
│   ├── Layout.tsx    # Header/footer layout with navigation
│   ├── Button.tsx    # Standardized button component
│   └── [others]      # Specialized components
└── data/
    └── menuItems.ts  # Menu data with TypeScript interfaces
```

### Key Components
- **Layout.tsx**: Main site layout with responsive navigation, supports both light and dark nav modes
- **WaveAnimation**: Custom animated background for hero section
- **Button**: Consistent button styling with variants (primary, outline)
- **menuItems.ts**: Centralized menu data with helper functions for filtering

### Content Management
- **Static Assets**: All images stored in `/public/` with organized subdirectories
- **Menu System**: TypeScript interfaces for type-safe menu item management
- **Brand Assets**: Logo variations in `/public/vendmat_logo/`
- **Product Images**: Machine and food photos in `/public/vendmat_photos/`

## Build Configuration

### Next.js Config
- ESLint errors ignored during builds (development convenience)
- Custom TypeScript configuration with strict mode
- Path aliases: `@/*` maps to `./src/*`

### Styling
- Tailwind CSS v4 with custom theme variables
- Orange brand color (#f8650c) consistently applied
- Dark theme support with CSS custom properties
- Inter font family as primary typeface

## Development Notes

- Homepage features comprehensive content: hero, how-it-works, use cases, menu preview, locations, and CTAs
- All external links include proper `target="_blank"` and `rel="noopener noreferrer"`
- Mobile-responsive navigation with hamburger menu
- SEO-optimized with proper meta tags and structured data
- Image optimization using Next.js Image component with proper alt text
- Contact information and social links integrated throughout