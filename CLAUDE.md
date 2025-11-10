# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev         # Start development server on port 3001
npm run build       # Build production version
npm run start       # Start production server
npm run lint        # Run ESLint
```

### Environment Variables
Create `.env.local` for local configuration:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics Measurement ID (optional)
RESEND_API_KEY=re_xxxxx         # Resend API key for contact form emails
```

### Testing
No test framework configured.

## Project Architecture

This is a **Next.js 14 App Router** project for an outdoor café website with two locations. Key architectural decisions:

### Tech Stack
- **Framework**: Next.js 14.0.0 with App Router (not Pages Router)
- **Styling**: Tailwind CSS with extensive custom design system
- **Language**: TypeScript with strict mode
- **Fonts**: Google Fonts (Merriweather serif + Quicksand sans-serif)
- **Analytics**: Google Analytics via @next/third-parties (optional, configured via env)
- **Email**: Resend for transactional emails (contact form submissions)
- **Instagram Integration**: react-social-media-embed for social media content
- **Security**: html-escaper for sanitizing user input

### App Directory Structure
```
app/
├── layout.tsx              # Root layout with Navbar + Footer, JSON-LD schemas, GA integration
├── page.tsx               # Homepage with reusable components
├── globals.css            # Global styles, animations, design system
├── about/page.tsx         # About page with owner's story (from Kevin's transcript)
├── contact/page.tsx       # Contact page with form submission
├── menu/page.tsx          # Main menu page
├── locations/
│   ├── chicago/page.tsx   # North Park location (note: historically Chicago, now North Park)
│   └── evanston/page.tsx  # Evanston location
├── components/
│   ├── GoogleReviewsMarquee.tsx  # Google Reviews display
│   └── InstagramCarousel.tsx     # Instagram posts carousel
└── api/
    ├── contact/route.ts    # Contact form submission endpoint (Resend integration)
    ├── reviews/route.ts    # Google Reviews API endpoint
    ├── menu/
    │   ├── chicago/route.ts   # North Park menu JSON API
    │   └── evanston/route.ts  # Evanston menu JSON API
    └── locations/route.ts     # Location info API (addresses, hours, features)

lib/
└── menuData.ts            # Centralized menu data with dietary/allergen tags

public/
├── sitemap.xml            # SEO sitemap (updated 2025-11-03)
└── robots.txt             # Crawler directives (AI-friendly, allows GPTBot, Claude-Web)
```

### Design System

#### Color Palette (Tailwind Extended)
- **Primary Accent**: `#A67C52` (accent/accent-solid)
- **Sage Green Highlight**: `#418B26` for interactive elements
- **Warm Variants**: `warm-dark`, `warm-light`, `coffee-rich`
- **Backgrounds**: `cream`, `warm-solid`, `warm-light-bg`

#### Typography
- **Headings**: Merriweather (serif) with light font weight
- **Body**: Merriweather for content readability
- **UI Elements**: Quicksand (sans-serif) for navigation/buttons

#### Animation System
Comprehensive animation classes in `globals.css`:
- **Scroll Animations**: IntersectionObserver-triggered with `.fade-in-*` classes
- **Hover Effects**: `.hover-gentle`, `.hover-lift`, `.hover-glow`
- **Custom Animations**: `.animate-float`, `.animate-pulse-warm`
- **Reviews Marquee**: Left-to-right scrolling animation
- **Instagram Carousel**: Custom styling for embedded content

### Key Components & Patterns

#### Layout Structure
- **Root Layout** (`app/layout.tsx`): Contains global `Navbar` and `Footer` components with mobile menu
- All pages use client-side rendering (`"use client"` directive)
- Responsive design with mobile-first approach

#### Reusable Components Pattern
Located in `app/page.tsx`:
- `SectionHeading`: Styled headings with consistent typography
- `SectionText`: Body text with balanced layout
- `Button`: Primary/secondary button variants
- `LocationCard`: Interactive location cards with hover effects
- `ContactCard`: Contact information cards

#### Menu System Architecture
Location-specific menus (`chicago/page.tsx`, `evanston/page.tsx`):
- `MenuItem` TypeScript interface for type safety
- Category-based menu organization
- Modal overlays for item details
- Sticky product image display

#### Social Media Integration
- **GoogleReviewsMarquee**: Displays customer reviews with marquee animation
- **InstagramCarousel**: Embeds 7 Instagram posts using react-social-media-embed (currently showing posts from @outdoorcafe_boba)

### SEO & AI Agent Optimization

The site is optimized for search engines and AI agents:

- **Structured Data**: JSON-LD schemas in layout (Organization, FAQPage, WebSite with SearchAction)
- **Sitemap**: Auto-updated sitemap.xml with all pages and proper priorities
- **Robots.txt**: AI-friendly crawling directives (allows GPTBot, Claude-Web, Google-Extended, anthropic-ai)
- **API Endpoints**: Machine-readable JSON APIs for menus and locations (`/api/menu/chicago`, `/api/menu/evanston`, `/api/locations`)
- **Metadata**: Per-page meta tags with unique descriptions for each location
- **Microdata**: itemProp attributes on contact information in footer
- **Dietary Tags**: Centralized menu data in `lib/menuData.ts` with vegan/vegetarian/allergen information

### Important Implementation Notes

1. **Client Components**: The root layout uses `"use client"` directive due to interactive navbar with mobile menu
2. **Portal Usage**: Mobile menu uses `createPortal` to escape stacking contexts
3. **Location Context**: "Chicago" in file paths refers to North Park location (historical naming)
4. **No Component Library**: Uses custom components with Tailwind classes
5. **Custom CSS**: Heavy use of custom CSS classes in `globals.css` for animations and effects
6. **Instagram Embeds**: Custom styling for embedded Instagram content with border radius and warm colors
7. **Menu Data**: Evanston menu is derived from Chicago menu (removes milkshakes, adds spring rolls via filter/sort in `lib/menuData.ts`)

### Key Features
- Sticky responsive navbar with mobile overlay menu
- Interactive location-specific menus with real-time open/closed status
- Custom animation system with intersection observers
- Comprehensive footer with contact information and microdata
- Google Reviews marquee component
- Instagram carousel integration
- JSON API endpoints for menus, locations, and reviews
- Google Analytics integration (optional, via env variable)

### Content Management

**Menu Updates**: Both location menus are currently inline in page components. For synchronized updates across UI and API:
1. Update menu arrays in `app/locations/chicago/page.tsx` and `app/locations/evanston/page.tsx`
2. Sync changes to `app/api/menu/chicago/route.ts` and `app/api/menu/evanston/route.ts`
3. Consider using `lib/menuData.ts` as single source of truth in future refactor

**About Page Story**: Content is based on Kevin (owner)'s interview transcript from 2024, covering:
- Origin story (1999 as customers, 2014 purchase)
- Philosophy of creating welcoming study/hangout spaces
- Menu evolution from smoothie shop to Vietnamese coffee focus
- Two-location presence (North Park since 2014, Evanston)

### Development Notes
- Port 3001 is used for development (configured in package.json)
- TypeScript strict mode is enabled
- No additional UI libraries except react-social-media-embed, @next/third-parties, and resend
- Custom utility classes for consistent spacing and animations
- External ordering links to ChowBus for both locations
- Google Maps integration for location addresses

### Deployment
- **Platform**: Vercel (connected to GitHub for auto-deployment)
- **Repository**: https://github.com/thetenzinwoser/outdoor_cafe
- **Domain**: theoutdoorcafe.com (managed via Wix DNS, pointed to Vercel)
- **Environment Variables**: Set in Vercel dashboard (GA_ID, RESEND_API_KEY)
- **Auto-Deploy**: Pushes to `main` branch trigger automatic Vercel deployments
