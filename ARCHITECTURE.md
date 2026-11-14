# HIKNOWS Architecture Documentation

## 1. System Overview

HIKNOWS is a full-stack, enterprise-grade CCTV and security systems platform built with a unified TypeScript codebase. It combines:
- A high-performance, SEO-optimized, accessible public-facing web frontend (Next.js 16 App Router, React 19, Tailwind CSS v4, Lucide icons, Base UI).
- An integrated, headless Content Management System (Payload CMS 3.x).
- A robust relational database architecture (PostgreSQL via `@payloadcms/db-postgres`, with local/dev SQLite resilience via `@payloadcms/db-sqlite`).
- An extensible Visual Page Builder with 17 distinct component blocks.
- Real-time server-side customer inquiry management and Telegram bot alerting.

```
                      +---------------------------------------+
                      |               Client                  |
                      |   (Browser / Mobile Web User)         |
                      +---------------------------------------+
                                          |
                                          | HTTP / HTTPS
                                          v
                      +---------------------------------------+
                      |         Next.js App Router            |
                      |                                       |
                      |  - Public Routes (SSR / ISR)          |
                      |    / , /catalog, /services, /contact  |
                      |  - BlockRenderer System               |
                      |  - API Endpoints (/api/contact)       |
                      |  - Admin Dashboard (/admin)           |
                      +---------------------------------------+
                                          |
                      +-------------------+-------------------+
                      |                                       |
                      v                                       v
         +--------------------------+            +--------------------------+
         |     Payload CMS 3.x      |            | Telegram Bot API Service |
         |  - Auth & RBAC           |            |  - Async Notifications   |
         |  - Collections & Globals |            |  - Secure Token Guard    |
         |  - Media Storage         |            +--------------------------+
         +--------------------------+
                      |
                      v
         +--------------------------+
         |   PostgreSQL Database    |
         |  - Strict Typed Schemas  |
         |  - Integer Money (UZS)   |
         |  - Relationships/Foreign |
         +--------------------------+
```

## 2. Directory Structure

```
hiknows/
├── app/
│   ├── (payload)/
│   │   ├── admin/
│   │   │   ├── [[...segments]]/page.tsx   # Payload CMS Admin panel
│   │   │   └── importMap.js               # Component import map
│   │   ├── api/
│   │   │   ├── [...slug]/route.ts         # REST API
│   │   │   └── graphql/route.ts           # GraphQL API
│   │   └── layout.tsx                     # Payload UI root layout
│   ├── admin-demo/                        # Visual demo admin preview
│   ├── api/
│   │   ├── contact/route.ts               # Public inquiry submission endpoint
│   │   ├── seed/route.ts                  # Database seeder endpoint
│   │   ├── run-tests/route.ts             # Automated test suite runner
│   │   └── test-db/route.ts               # Database health & counts
│   ├── catalog/
│   │   ├── [id]/page.tsx                  # Product detail page (SSR/ISR)
│   │   └── page.tsx                       # Filterable product catalog (SSR/ISR)
│   ├── contact/page.tsx                   # Dynamic contact page
│   ├── services/page.tsx                  # Dynamic services page
│   ├── globals.css                        # Tailwind v4 theme & colors
│   ├── layout.tsx                         # Root website shell layout
│   ├── page.tsx                           # Dynamic CMS block-driven Homepage
│   ├── robots.ts                          # Automated search engine robots.txt
│   └── sitemap.ts                         # Dynamic XML sitemap
├── cms/
│   ├── access/
│   │   └── roles.ts                       # RBAC (SuperAdmin, Editor, SalesManager)
│   ├── blocks/
│   │   └── index.ts                       # 17 Payload Visual Page Builder blocks
│   ├── collections/
│   │   ├── Users.ts                       # Admins, Editors, Sales Managers
│   │   ├── Media.ts                       # Uploads with automatic image sizing
│   │   ├── Products.ts                    # Complete CCTV product catalog
│   │   ├── ProductCategories.ts           # Hierarchical categories
│   │   ├── Brands.ts                      # Brand entities & logos
│   │   ├── Services.ts                    # Installation & support services
│   │   ├── Pages.ts                       # CMS block-based visual pages
│   │   ├── ContactRequests.ts             # Customer inquiries & status tracking
│   │   └── Redirects.ts                   # 301/302 URL redirects
│   ├── globals/
│   │   ├── SiteSettings.ts                # Branding, phone, telegram, working hours
│   │   ├── HeaderNavigation.ts            # Header navigation menu
│   │   ├── FooterNavigation.ts            # Footer navigation & copyright
│   │   └── ThemeSettings.ts               # Brand colors, typography, border radius
│   ├── getPayload.ts                      # Local API helper
│   ├── seed.ts                            # Initial database seeder
│   └── test-suite.ts                      # 17-scenario automated verification
├── components/
│   ├── blocks/                            # Frontend block renderer registry
│   ├── catalog-client.tsx                 # Interactive search/filter/sort
│   ├── contact-form.tsx                   # Validated customer inquiry form
│   ├── product-card.tsx                   # Reusable product card
│   ├── section-heading.tsx                # Reusable section header
│   └── site-shell.tsx                     # Header, Logo, Navigation, Footer
├── lib/
│   ├── cms.ts                             # Server data fetching layer
│   ├── data.ts                            # Fallback initial data & types
│   ├── inquiry.ts                         # Zod validation & Telegram notifier
│   └── utils.ts                           # Tailwind CSS utilities
├── public/                                # Static media & cameras
├── payload.config.ts                      # Payload CMS configuration
├── next.config.mjs                        # Next.js & Payload integration
└── package.json                           # Dependencies & scripts
```

## 3. Visual Page Builder Pattern

The Page Builder is implemented using a typed, registry-based pattern:
1. **CMS Schema**: In `cms/blocks/index.ts`, each block is defined with its fields, descriptions, and defaults.
2. **CMS Pages Collection**: `cms/collections/Pages.ts` declares `fields: [{ name: 'layout', type: 'blocks', blocks: allBlocks }]`.
3. **Frontend Component**: `components/blocks/index.tsx` houses specialized React components for each block, connected to a centralized `BlockRenderer`.
4. **Safe Component Resolution**: Block rendering is strict and type-safe. Unsafe HTML or arbitrary executable scripts are prevented.

## 4. Security & Access Control

- **Password Hashing**: Payload handles salted cryptographic hashing for all credentials.
- **Role-Based Access Control**:
  - `superadmin`: Unrestricted administrative mutations, user provisioning, global configurations.
  - `editor`: Product, service, media, and page content management.
  - `sales_manager`: Inquiry review, status management, customer note annotations.
- **Public Protection**: Unpublished drafts and private contact inquiries cannot be accessed via public queries or unauthenticated APIs.
- **Environment Integrity**: Secrets (`PAYLOAD_SECRET`, `TELEGRAM_BOT_TOKEN`, `DATABASE_URI`) are strictly server-side and never exposed to the client.

