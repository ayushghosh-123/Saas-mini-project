# 🌩️ Cloudinary AI SaaS

A full-stack SaaS application built with **Next.js**, designed to showcase and utilize the powerful AI capabilities of **Cloudinary**.  
This project combines a robust backend with a sleek, modern UI, enabling users to upload, manage, and transform media using artificial intelligence.

---

## 🚀 Key Features
1. **AI-Powered Image & Video Transformation**  
   Automate tasks like intelligent cropping, background removal, and content-aware transformations.

2. **Secure User Authentication**  
   Manage user accounts with personalized dashboards.

3. **Media Management Dashboard**  
   Upload, view, and organize media with ease.

4. **Serverless Database Integration**  
   Powered by a scalable PostgreSQL database for efficient and modern data storage.

---

## 📦 Tech Stack

- **Next.js** – Full-stack React framework with SSR & SSG support.  
- **Cloudinary** – Cloud-based media storage, transformation, and AI-driven analysis.  
- **Prisma** – Type-safe ORM for database interactions.  
- **NeonDB** – Serverless PostgreSQL database, fully compatible with Prisma.  
- **DaisyUI** – Tailwind CSS component library for modern UI development.  

---

## ⚙️ Getting Started

Follow these steps to set up the project locally:

### ✅ Prerequisites
- [Node.js](https://nodejs.org/) (LTS version recommended)  
- A [NeonDB](https://neon.tech/) account & database URL  
- A [Cloudinary](https://cloudinary.com/) account & API credentials  

---

### 🔧 Installation

Clone the repository:

```bash
 git clone https://github.com/ayushghosh-123/Saas-mini-project.git
```

# 🧙‍♂️ Install dependencies:

```bash 
npm install
```


Create a .env file in the project root and add the following:

```bash 
DATABASE_URL="your_neon_db_connection_string"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
```

# 🗄️ Database Setup

Push the Prisma schema to your NeonDB instance:

**1. npx prisma db push**

```bash
▶️ Run the Project
```

**2. Start the development server:**

```bash
npm run dev
```

# 🚀 Deployment

This project is optimized for deployment on Vercel (the creators of Next.js).
Simply connect your GitHub repository, and Vercel will handle the build & deployment automatically.

# 📌 Notes

This README is a starter template — feel free to expand it with contribution guidelines, API documentation, or additional features as your project grows.

Keep your .env file private and never commit it to version control.

# 📜 License

This project is open source and available under the MIT License

