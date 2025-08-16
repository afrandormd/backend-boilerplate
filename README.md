# Boilerplate NodeJS & ExpressJS

Struktur awal untuk projek Backend RESTful API dengan NodeJS & ExpressJS yang ditulis dengan bahasa JavaScript

_Teknologi yang telah di install_:

- cors versi 2.8.5
- express versi 5.1.0
- prisma versi 6.14.0
- prisma/client versi 6.14.0

## Langkah Penggunaan

1. Clone Repository
2. Masuk ke folder tersebut
3. Salin env.example menjadi `.env` lalu sesuaikan nama database di `DATABASE_URL`
4. Ketik perintah `npm install` di terminal, pastikan sudah berada di dalam folder projek ini
5. Sesuaikan model schema di `prisma/schema.prisma` lalu jalankan perintah `npx prisma migrate`
6. Jalankan projek dengan `npm start` atau `node index.js`
