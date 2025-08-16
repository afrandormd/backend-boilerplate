# 🚀 Boilerplate NodeJS & ExpressJS

Struktur awal untuk membangun **Backend RESTful API** dengan NodeJS & ExpressJS yang ditulis menggunakan bahasa JavaScript.  
Boilerplate ini sudah dilengkapi dengan dokumentasi API (Swagger), ORM Prisma, dan konfigurasi dasar yang siap dikembangkan lebih lanjut.

---

## 📦 Teknologi yang digunakan:

- [Express](https://expressjs.com/) v5.1.0
- [CORS](https://www.npmjs.com/package/cors) v2.8.5
- [Prisma](https://www.prisma.io/) v6.14.0
- [@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client) v6.14.0
- [Swagger UI Express](https://www.npmjs.com/package/swagger-ui-express) v5.0.1

## 📂 Struktur Folder

```bash
boilerplate-backend/
├── docs/
│   └── apidoc.json       # Dokumentasi API (OpenAPI/Swagger)
├── prisma/
│   ├── client/
│   │   └── index.js      # Inisialisasi Prisma Client
│   └── schema.prisma     # Skema database (ORM Prisma)
├── index.js              # Entry point utama aplikasi (Express server)
├── package.json          # Konfigurasi project & dependencies
├── package-lock.json     # Versi terkunci dependencies
└── README.md             # Dokumentasi project
```

## ⚙️Cara Penggunaan

1. Clone Repository

```bash
git clone https://github.com/username/boilerplate-backend.git
cd boilerplate-backend
```

2. Salin env.example menjadi `.env` lalu sesuaikan `DATABASE_URL`:

```ini
DATABASE_URL="mysql://root:@localhost:3306/name_database"
```

3. Install Dependencies

```bash
npm install
```

4. Atur model schema di `prisma/schema.prisma` lalu jalankan migrasi:

```bash
npx prisma migrate dev
```

5. Jalankan Server:

```bash
npm start
# atau
node index.js
```

## 📖 Dokumentasi API

Dokumentasi API tersedia di Swagger UI  
Setelah server berjalan, buka di browser:

```bash
http://localhost:3000/api-docs
```

## 🛠️Script yang Tersedia

- `npm start` → Menjalankan server
- `npx prisma migrate dev` → Migrasi database
- `npx prisma studio` → Membuka Prisma Studio (GUI untuk DB)
