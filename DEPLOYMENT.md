# HIKNOWS Production Deployment Guide

## 1. Prerequisites

- Node.js 18.20.2+ or 20.9.0+
- pnpm 9+ or 12+ (or npm 10+)
- PostgreSQL 14+ database instance (e.g. Neon.tech, Supabase, Railway, AWS RDS, DigitalOcean, or Docker)

---

## 2. Environment Variables Configuration

Create a `.env.production` (or inject these in your cloud hosting provider dashboard):

```env
# Server URL (Production domain without trailing slash)
NEXT_PUBLIC_SERVER_URL=https://hiknows.uz
NODE_ENV=production

# Payload CMS Encryption Key (Generate a random 32+ character string)
PAYLOAD_SECRET=your_production_secure_payload_secret_32_characters_minimum

# PostgreSQL Database Connection String
DATABASE_URI=postgresql://username:password@hostname:5432/hiknows?sslmode=require

# Telegram Notification Bot
TELEGRAM_BOT_TOKEN=123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ
TELEGRAM_CHAT_ID=-1001234567890

# Initial Admin Credentials (used during automatic initial database seeding)
INITIAL_ADMIN_EMAIL=admin@hiknows.uz
INITIAL_ADMIN_PASSWORD=StrongAdminPassword2026!
INITIAL_ADMIN_NAME="Bosh Administrator"
```

---

## 3. Installation & Build Steps

```bash
# 1. Install dependencies
pnpm install

# 2. Approve builds for esbuild (pnpm 12 standard)
pnpm approve-builds --all

# 3. Build Next.js application
pnpm build

# 4. Start production server
pnpm start
```

---

## 4. Initial Database Seeding

On first deployment with a fresh PostgreSQL database:
1. Ensure `INITIAL_ADMIN_EMAIL`, `INITIAL_ADMIN_PASSWORD`, and `DATABASE_URI` are configured.
2. Trigger the secure seed endpoint:
   ```bash
   curl -X GET "https://hiknows.uz/api/seed?secret=YOUR_PAYLOAD_SECRET"
   ```
3. The database will automatically initialize all tables, create the Super Admin account, and populate default categories, products, services, site settings, and homepage blocks.

---

## 5. Docker Deployment (Optional)

```dockerfile
FROM node:20-alpine AS base
RUN corepack enable && corepack prepare pnpm@latest --activate
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

CMD ["pnpm", "start"]
```

---

## 6. Security Checklist for Production

- [x] Change the default `INITIAL_ADMIN_PASSWORD` immediately after initial login.
- [x] Ensure `PAYLOAD_SECRET` is unique and secret.
- [x] Enforce SSL/TLS (`https://`) on all routes.
- [x] Protect `/api/seed` and `/api/run-tests` with the secret token.
- [x] Ensure uploads directory (`public/uploads`) is writable or configure S3 adapter for distributed hosting.

