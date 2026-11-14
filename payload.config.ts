import { buildConfig } from 'payload'
import sharp from 'sharp'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Users } from './cms/collections/Users'
import { Media } from './cms/collections/Media'
import { Products } from './cms/collections/Products'
import { ProductCategories } from './cms/collections/ProductCategories'
import { Brands } from './cms/collections/Brands'
import { Services } from './cms/collections/Services'
import { Pages } from './cms/collections/Pages'
import { ContactRequests } from './cms/collections/ContactRequests'
import { Redirects } from './cms/collections/Redirects'

import { SiteSettings } from './cms/globals/SiteSettings'
import { HeaderNavigation } from './cms/globals/HeaderNavigation'
import { FooterNavigation } from './cms/globals/FooterNavigation'
import { ThemeSettings } from './cms/globals/ThemeSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const databaseUri = process.env.DATABASE_URI || 'file:./hiknows-dev.db'
const isPostgres = databaseUri.startsWith('postgres://') || databaseUri.startsWith('postgresql://')

export default buildConfig({
  admin: {
    user: Users.slug,
    theme: 'light',
    suppressHydrationWarning: true,
    meta: {
      titleSuffix: '— HIKNOWS Admin',
    },
    dateFormat: 'dd.MM.yyyy HH:mm',
    components: {
      Nav: '@/components/admin/CustomNav#CustomNav',
      graphics: {
        Logo: '@/components/admin/AdminLogo#AdminLogo',
        Icon: '@/components/admin/AdminIcon#AdminIcon',
      },
      views: {
        dashboard: {
          Component: '@/components/admin/DashboardView#DashboardView',
        },
      },
    },
  },
  collections: [
    Users,
    Media,
    Products,
    ProductCategories,
    Brands,
    Services,
    Pages,
    ContactRequests,
    Redirects,
  ],
  globals: [
    SiteSettings,
    HeaderNavigation,
    FooterNavigation,
    ThemeSettings,
  ],
  editor: lexicalEditor({}),
  sharp,
  secret: process.env.PAYLOAD_SECRET || 'hiknows_super_secret_payload_encryption_key_2026_cctv',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: isPostgres
    ? postgresAdapter({
        pool: {
          connectionString: databaseUri,
        },
        push: true,
      })
    : sqliteAdapter({
        client: {
          url: databaseUri,
        },
        push: true,
      }),
})
