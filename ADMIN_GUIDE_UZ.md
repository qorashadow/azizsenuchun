# HIKNOWS — Boshqaruv Paneli (Admin) Qo‘llanmasi

Ushbu qo‘llanma **HIKNOWS** veb-sayt egasi, kontent muharrirlari va savdo menejerlari uchun tayyorlangan bo‘lib, dasturlash kodlariga tegmasdan saytdagi barcha ma’lumotlarni oson va qulay boshqarish imkonini beradi.

---

## 1. Tizimga Kirish (Admin Login)

1. Brauzeringizda quyidagi manzilni oching:
   `https://sizning-saytingiz.uz/admin` (yoki mahalliy serverda `http://localhost:3000/admin`)
2. Boshlang‘ich ma’lumotlar bilan kiring:
   - **Email:** `admin@hiknows.uz`
   - **Parol:** `HiknowsAdmin2026!`
3. Tizimga kirgandan so‘ng o‘zingizning profilingizda parolni o‘zgartirishingiz tavsiya etiladi.

---

## 2. Foydalanuvchi Rollari va Huquqlar

- **Super Admin:** Barcha tizim sozlamalari, foydalanuvchilar, dizayn, mahsulotlar va so‘rovlarni to‘liq boshqarish huquqiga ega.
- **Kontent muharriri (Content Editor):** Mahsulotlar, xizmatlar, sahifalar va media kutubxonasini boshqarishi mumkin, lekin adminlar huquqini o‘zgartira olmaydi.
- **Sotuv menejeri (Sales Manager):** Mijozlardan kelib tushgan so‘rovlar (Inquiries) bilan ishlaydi, so‘rov holatini yangilaydi va ichki izohlar yozadi.

---

## 3. Mahsulotlarni Boshqarish (Products)

### Yangi mahsulot qo‘shish:
1. Chap menyudan **Katalog -> Mahsulotlar (Products)** bo‘limiga kiring.
2. Yuqori o‘ng burchakdagi **«Yangi yaratish» (Create New)** tugmasini bosing.
3. Quyidagi maydonlarni to‘ldiring:
   - **Mahsulot nomi:** Masalan: *4MP ColorVu IP kamera*
   - **Model kodi:** Masalan: *HK-IPC-4MP-CV*
   - **Brend:** *HIKNOWS*
   - **Asosiy narx (UZS):** Narxni butun so‘mda kiriting (masalan, `450000`). Tizim uni saytda avtomatik ravishda `450 000 so‘m` formatida chiroyli ko‘rsatadi.
   - **Chegirmadagi narx:** Agar aksiya bo‘lsa, chegirma narxini kiriting.
   - **Mavjudlik holati:** *Omborda mavjud*, *Buyurtma asosida* yoki *Mavjud emas*.
   - **Kategoriya:** Kerakli kategoriyani tanlang (masalan: *IP kameralar*).
   - **Bosh sahifada ko‘rsatish (isFeatured):** Agar ushbu mahsulot bosh sahifadagi «Tanlangan mahsulotlar» bo‘limida chiqishini istasangiz, ushbu katakchani belgilang.
   - **Texnik xususiyatlar (specs):** «Qator qo‘shish» tugmasi orqali parametrlarni kiriting (masalan: *4 MP aniqlik*, *Rangli tungi ko‘rish*, *IP67 himoya*).
   - **O‘rnatish xizmati narxi:** Masalan: `150000`.
   - **Rasm:** Media kutubxonasidan rasm yuklang yoki tashqi rasm URL manzilini kiriting.
4. **«Saqlash» (Save)** tugmasini bosing. O‘zgarishlar saytda bir daqiqa ichida avtomatik yangilanadi.

### Mahsulot narxini o‘zgartirish:
1. Mahsulotlar ro‘yxatidan kerakli mahsulot ustiga bosing.
2. **Asosiy narx (UZS)** maydonidagi sonni yangilang.
3. **«Saqlash»** tugmasini bosing.

---

## 4. Xizmatlarni Boshqarish (Services)

1. Chap menyudan **Katalog -> Xizmatlar (Services)** bo‘limiga kiring.
2. Xizmat nomini, qisqa tavsifini va narx matnini kiriting (masalan: `150 000 so‘mdan` yoki `Kelishilgan narx`).
3. Mos belgini (icon) tanlang: *Kamera, Sozlash, DVR/NVR, Kabel, Texnik xizmat* yoki *Himoya*.
4. **Holati (Status):** *Faol* deb belgilansa, xizmat darhol saytning `/services` sahifasida paydo bo‘ladi.

---

## 5. Bosh Sahifa va Bloklar Konstruktori (Visual Page Builder)

HIKNOWS veb-saytining bosh sahifasi va boshqa sahifalari zamonaviy bloklar asosida qurilgan:

1. Chap menyudan **Kontent -> Sahifalar (Pages)** bo‘limiga kiring.
2. **«Bosh sahifa» (slug: home)** sahifasini oching.
3. **Sahifa bloklari (Visual Page Builder)** bo‘limida mavjud bloklarni ko‘rasiz:
   - **Asosiy banner (HeroBanner):** Asosiy sarlavha, qizil rangda ajralib turuvchi so‘z, tavsif matni, tugmalar matni va havolalarini tahrirlashingiz mumkin.
   - **Kategoriyalar tarmog‘i (CategoryGrid):** Bosh sahifadagi kategoriyalar bo‘limining sarlavhasi va matnini boshqaradi.
   - **Mahsulotlar to‘plami (ProductGrid):** Tanlangan mahsulotlar bloki.
   - **Afzalliklar bloki (FeaturesGrid):** «Nega HIKNOWS» 4 ta kartochkali xizmat afzalliklari.
   - **Harakatga chaqiruv (CTASection):** Katta qizil yoki qora aksiya/murojaat banneri.
   - **FAQ (Savol-javoblar):** Mijozlar uchun ko‘p so‘raladigan savollar va javoblar.
   - **Mijozlar fikrlari (Testimonials):** Mijozlarning sharhlari.
4. **Bloklar tartibini o‘zgartirish:** Bloklarni sichqoncha yordamida yuqoriga yoki pastga surib, joylashuv o‘rnini o‘zgartirishingiz mumkin.
5. **Yangi blok qo‘shish:** «Blok qo‘shish» tugmasini bosib, 17 xil blok turidan xohlaganingizni qo‘shishingiz mumkin.
6. **Blokni o‘chirish yoki yashirish:** Blokning o‘ng burchagidagi menyudan foydalaning.

---

## 6. Yangi Sahifalar Yaratish va Chop Etish

1. **Sahifalar (Pages)** bo‘limida **«Yangi yaratish»** tugmasini bosing.
2. Sahifa sarlavhasi va URL slugini kiriting (masalan: `aksiyalar`).
3. **Sahifa bloklari** orqali sahifa dizayni va matnlarini yig‘ing.
4. **Sahifa ommaga chop etilgan (isPublished):**
   - Belgilansa: Saytda `https://hiknows.uz/aksiyalar` manzilida ochiladi.
   - Belgilanmasa: Qoralama (Draft) sifatida faqat adminlarga ko‘rinadi, oddiy foydalanuvchilar ko‘ra olmaydi.
5. **SEO sozlamalari:** Sahifa uchun Google qidiruv sarlavhasi (Meta Title) va qisqacha tavsif (Meta Description) kiriting.

---

## 7. Media Kutubxonasi (Rasmlar)

1. Chap menyudan **Kontent -> Media** bo‘limiga kiring.
2. Kameralar, uskunalar va obyekt rasmlarini yuklang.
3. Tizim rasmni avtomatik tarzda:
   - Kichik nishon (Thumbnail)
   - Kartochka o‘lchami (Card)
   - To‘liq ekran (Feature) formatlariga moslashtirib siqadi.
4. Rasmga **Alt matn** (tavsif) yozish Google qidiruv tizimida sayt reytingini oshiradi.

---

## 8. Mijoz So‘rovlarini Qabul Qilish va Boshqarish (Inquiries)

Sayt orqali mijozlar qoldirgan barcha arizalar markaziy bazada saqlanadi:

1. Chap menyudan **Savdo va Aloqa -> Mijoz so‘rovlari (Contact Requests)** bo‘limiga kiring.
2. Har bir so‘rovda quyidagilar ko‘rinadi:
   - Mijoz ismi va telefon raqami
   - Qiziqish yo‘nalishi (mahsulot, o‘rnatish xizmati yoki maslahat)
   - Mijoz qiziqqan aniq mahsulot yoki xizmat nomi
   - Xabar matni
   - Yuborilgan aniq sana va vaqt
3. **So‘rov holatini yangilash:**
   - *Yangi (Ko‘rib chiqilmagan)*
   - *Jarayonda (Aloqaga chiqildi)*
   - *Bajarildi (Muvaffaqiyatli yakunlandi)*
   - *Rad etildi*
4. **Ichki izohlar (Internal Notes):** Mijoz bilan nimalar kelishilgani va buyurtma tafsilotlarini yozib boring.

---

## 9. Sayt Umumiy Sozlamalari (Global Settings)

Chap menyudagi **Sozlamalar** bo‘limi orqali:

- **Sayt umumiy sozlamalari (SiteSettings):**
  - Kompaniya nomi va shiori
  - Asosiy telefon raqamlari
  - Rasmiy Telegram username (`@hiknows_uz`)
  - Ofis manzili va ish vaqtlari
  - Logotip va Favicon rasmlari
- **Bosh menyu (HeaderNavigation):**
  - Sayt yuqori menyusidagi havolalar ro‘yxati, ularning nomi va ketma-ketligi.
- **Pastki menyu (FooterNavigation):**
  - Sayt pastidagi kompaniya havolalari, mualliflik huquqi matni va ogohlantirishlar.
- **Vizual mavzu (ThemeSettings):**
  - Asosiy brend rangi (`#e60012`), nishon rangi va burchaklar yumaloqligi.

---

## 10. Telegram Bot Bildirishnomalari

Yangi mijoz ariza qoldirganda Telegram guruh yoki menejerga avtomatik xabar yuborish uchun:
1. Telegramda `@BotFather` orqali yangi bot yarating va `TELEGRAM_BOT_TOKEN` oling.
2. Xabar borishi kerak bo‘lgan guruh yoki profilingizning `TELEGRAM_CHAT_ID` sini aniqlang.
3. Serverdagi `.env` fayliga ushbu ma’lumotlarni kiriting.
4. Shundan so‘ng har bir yangi ariza bir zumda Telegramingizga kelib tushadi!

