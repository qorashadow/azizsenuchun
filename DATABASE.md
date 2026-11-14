# HIKNOWS Database Architecture & Schemas

## 1. Engine & Database Support

- **Primary Production Database**: PostgreSQL 14+ via `@payloadcms/db-postgres`.
- **Local Development / Fallback Database**: SQLite via `@payloadcms/db-sqlite`.
- **ORM / Query Engine**: Drizzle ORM integrated with Payload 3.x.
- **Currency & Money Representation**: Fixed integer amounts in Uzbek So‘m (UZS) to prevent floating-point inaccuracies.

---

## 2. Collections (Tables)

### 1. `users`
- `id`: Primary Key
- `name`: Text, Required
- `email`: Text, Unique, Required
- `hash`: Salted password hash
- `role`: Enum (`superadmin`, `editor`, `sales_manager`)
- `createdAt`, `updatedAt`: Timestamp

### 2. `media`
- `id`: Primary Key
- `alt`: Text, Required (SEO accessibility)
- `caption`: Text
- `filename`: Text
- `mimeType`: Text
- `filesize`: Integer
- `width`, `height`: Integer
- `sizes`: JSON (thumbnail, card, feature)
- `createdAt`, `updatedAt`: Timestamp

### 3. `product-categories`
- `id`: Primary Key
- `name`: Text, Required
- `slug`: Text, Unique, Indexed
- `description`: Text
- `image`: Foreign Key -> `media.id`
- `imageUrl`: Text (external/fallback)
- `order`: Integer (default 0)
- `createdAt`, `updatedAt`: Timestamp

### 4. `brands`
- `id`: Primary Key
- `name`: Text, Required
- `slug`: Text, Unique
- `logo`: Foreign Key -> `media.id`
- `createdAt`, `updatedAt`: Timestamp

### 5. `products`
- `id`: Primary Key
- `name`: Text, Required
- `model`: Text, Required, Indexed (SKU/Model code)
- `brandName`: Text (e.g., 'HIKNOWS')
- `brand`: Foreign Key -> `brands.id`
- `sku`: Text
- `price`: Integer UZS, Required (e.g. 450000 = 450 000 so‘m)
- `discountPrice`: Integer UZS
- `stockStatus`: Enum (`in_stock`, `on_order`, `out_of_stock`)
- `category`: Foreign Key -> `product-categories.id`
- `categoryName`: Text
- `isFeatured`: Boolean (default false)
- `imageUrl`: Text
- `images`: Array -> Foreign Key -> `media.id`
- `specs`: Array of strings (`spec`)
- `description`: Text
- `warranty`: Text (e.g. '1 yil rasmiy kafolat')
- `installationAvailable`: Boolean (default true)
- `installationPrice`: Integer UZS (default 150000)
- `metaTitle`: Text
- `metaDescription`: Text
- `createdAt`, `updatedAt`: Timestamp

### 6. `services`
- `id`: Primary Key
- `title`: Text, Required
- `slug`: Text, Unique
- `description`: Text, Required
- `priceLabel`: Text, Required (e.g. '150 000 so‘mdan', 'Kelishilgan narx')
- `basePrice`: Integer UZS
- `isQuotationOnly`: Boolean (default false)
- `icon`: Enum (`camera`, `settings`, `server`, `cable`, `wrench`, `shield`)
- `image`: Foreign Key -> `media.id`
- `order`: Integer (default 0)
- `status`: Enum (`active`, `inactive`)
- `createdAt`, `updatedAt`: Timestamp

### 7. `pages`
- `id`: Primary Key
- `title`: Text, Required
- `slug`: Text, Unique, Indexed (e.g. 'home', 'about')
- `isPublished`: Boolean (default true)
- `layout`: JSON Blocks Array (17 Page Builder Blocks)
- `metaTitle`: Text
- `metaDescription`: Text
- `createdAt`, `updatedAt`: Timestamp

### 8. `contact-requests`
- `id`: Primary Key
- `name`: Text, Required
- `phone`: Text, Required
- `interestType`: Enum (`product`, `service`, `general`, `support`)
- `message`: Text
- `requestedProduct`: Foreign Key -> `products.id` (Nullable)
- `requestedService`: Foreign Key -> `services.id` (Nullable)
- `status`: Enum (`new`, `in_progress`, `completed`, `cancelled`)
- `telegramSent`: Boolean (default false)
- `internalNotes`: Text
- `createdAt`, `updatedAt`: Timestamp

### 9. `redirects`
- `id`: Primary Key
- `from`: Text, Required
- `to`: Text, Required
- `type`: Enum (`301`, `302`)
- `createdAt`, `updatedAt`: Timestamp

---

## 3. Globals (Singletons)

1. **`site-settings`**:
   - `siteName`: Text
   - `tagline`: Text
   - `companyDescription`: Text
   - `phone`, `phoneSecondary`: Text
   - `telegramUsername`: Text
   - `whatsappNumber`: Text
   - `address`: Text
   - `workingHours`: Text
   - `email`: Text
   - `logo`, `favicon`: Foreign Key -> `media.id`
   - `contactFormActive`: Boolean

2. **`header-navigation`**:
   - `items`: Array of `{ label, url, isVisible, isExternal }`
   - `ctaButtonLabel`: Text
   - `ctaButtonLink`: Text

3. **`footer-navigation`**:
   - `companyLinks`: Array of `{ label, url }`
   - `helpLinks`: Array of `{ label, url }`
   - `copyrightText`: Text
   - `disclaimerText`: Text

4. **`theme-settings`**:
   - `primaryColor`: Text (HEX, `#e60012`)
   - `accentColor`: Text (HEX, `#fff0f1`)
   - `typographyPreset`: Enum (`system`, `modern`)
   - `borderRadius`: Enum (`sm`, `md`, `lg`)

