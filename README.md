# HIKNOWS — Xavfsizlik Texnologiyalari va Videokuzatuv Platformasi

![HIKNOWS Platform](public/placeholder-logo.png)

HIKNOWS — videokuzatuv kameralari, xavfsizlik uskunalari va professional montaj xizmatlarini taqdim etuvchi zamonaviy biznes veb-platformasi.

Ushbu loyiha dastlabki v0 dizaynini to‘liq saqlab qolgan holda, to‘liq funksional, ma’lumotlar bazasiga ulangan (PostgreSQL / SQLite), **Payload CMS 3.x** boshqaruv tizimi va **Visual Page Builder** konstruktoriga ega bo‘lgan to‘liq tizimga aylantirilgan.

---

## 🚀 Texnologik Stek

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide React, Base UI
- **CMS va Backend:** Payload CMS 3.x (Headless CMS, Local API, REST & GraphQL)
- **Ma’lumotlar bazasi:** PostgreSQL (`@payloadcms/db-postgres`) / SQLite zaxira (`@payloadcms/db-sqlite`)
- **Konstruktor:** Visual Page Builder (17 xil Payload CMS Blocks)
- **Xavfsizlik & Validatsiya:** Zod, Role-Based Access Control (RBAC), HttpOnly sessiyalar
- **Bildirishnomalar:** Telegram Bot API (Mijozlar so‘rovini real-vaqt rejimida guruh/chatga yuborish)
- **SEO & Performance:** Dinamik Sitemap, Robots.txt, Meta Tags, Image Resizing (Sharp)

---

## 📦 O‘rnatish va Ishga Tushirish

### 1. Bog‘liqliklarni o‘rnatish:
```bash
pnpm install
pnpm approve-builds --all
```

### 2. Muhit o‘zgaruvchilarini sozlash:
`.env.example` faylidan nusxa olib, `.env` faylini yarating:
```bash
cp .env.example .env
```

### 3. Loyihani yig‘ish (Production Build):
```bash
pnpm build
```

### 4. Serverni ishga tushirish:
```bash
pnpm start
# yoki dasturlash rejimida:
pnpm dev
```

Sayt `http://localhost:3000` manzilida ishga tushadi.

---

## 🛠️ Admin Panelga Kirish

Admin panel manzili: `http://localhost:3000/admin`

- **Email:** `admin@hiknows.uz`
- **Parol:** `HiknowsAdmin2026!`

To‘liq boshqaruv bo‘yicha qo‘llanma bilan tanishish uchun [ADMIN_GUIDE_UZ.md](ADMIN_GUIDE_UZ.md) faylini o‘qing.

---

## 📚 Hujjatlar

- [Arxitektura tavsifi (ARCHITECTURE.md)](ARCHITECTURE.md)
- [Ma’lumotlar bazasi sxemalari (DATABASE.md)](DATABASE.md)
- [O‘zbek tilidagi admin qo‘llanmasi (ADMIN_GUIDE_UZ.md)](ADMIN_GUIDE_UZ.md)
- [Serverga joylashtirish (DEPLOYMENT.md)](DEPLOYMENT.md)

---

## 📝 Litsenziya

© 2026 HIKNOWS. Barcha huquqlar himoyalangan.

