# 🚀 Hero App

<p align="center">
  <img src="https://img.shields.io/badge/Live_Demo-Visit_App-7C3AED?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  <img src="https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <strong>A modern app discovery platform built with Next.js and TypeScript.</strong>
</p>

<p align="center">
  Browse, search, explore, and view detailed information about apps through a clean and responsive interface.
</p>

<p align="center">
  <a href="https://hero-app-lime.vercel.app/">
    <strong>🌐 Live Demo →</strong>
  </a>
</p>

---

## ✨ Overview

**Hero App** is a modern and responsive app discovery platform built with **Next.js, TypeScript, and Tailwind CSS**.

The application allows users to explore trending apps, search through the complete app collection, open individual app details, and interact with app installation functionality.

The project focuses on building a clean UI while practicing modern **Next.js App Router**, **Server Components**, **Client Components**, dynamic routing, and responsive design.

---

## 🎯 Features

### 🏠 Home Page

* Modern hero/banner section
* Trending apps section
* Responsive app cards
* Quick navigation to all applications

### 📱 Apps Explorer

* Browse all available applications
* Real-time app search
* Responsive grid layout
* App count display
* Clean empty-state UI

### 🔎 App Details

* Dynamic route using `/apps/[id]`
* App icon and information
* Download statistics
* Average rating
* Total reviews
* Rating breakdown
* Detailed description
* Install functionality

### 📦 Installation System

* Install apps from the details page
* Store installed apps using browser `localStorage`
* View installed applications
* Uninstall applications
* Sort installed apps

### 🛑 Error Handling

* Custom `not-found` page
* Handles invalid app IDs gracefully
* Server-side data validation

### 📱 Responsive Design

* Mobile-first layout
* Tablet optimization
* Desktop-friendly UI
* Responsive navigation
* Responsive cards and app details

---

## 🛠️ Tech Stack

| Technology         | Purpose                      |
| ------------------ | ---------------------------- |
| **Next.js**        | React framework & App Router |
| **TypeScript**     | Type-safe development        |
| **React**          | UI development               |
| **Tailwind CSS**   | Styling & responsive design  |
| **DaisyUI**        | UI components                |
| **React Toastify** | Notifications                |
| **localStorage**   | Installed app persistence    |
| **Vercel**         | Deployment                   |
| **Git & GitHub**   | Version control              |

---

## 🧠 Next.js Concepts Practiced

This project was built to practice several important Next.js concepts:

* App Router
* Server Components
* Client Components
* Dynamic Routes
* `notFound()`
* `next/image`
* `next/link`
* Server-side data fetching
* Async Server Components
* Context API
* Client-side state management
* `localStorage`
* Responsive layouts
* Vercel deployment

---

## 📂 Project Structure

```text
hero-app/
│
├── public/
│   ├── data.json
│   └── ...
│
├── src/
│   └── app/
│       │
│       ├── apps/
│       │   ├── [id]/
│       │   │   ├── page.tsx
│       │   │   └── not-found.tsx
│       │   │
│       │   └── page.tsx
│       │
│       ├── components/
│       │   ├── app-page/
│       │   ├── home-page/
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       │
│       ├── context/
│       │   └── appContext.tsx
│       │
│       ├── lib/
│       │   └── getApps.ts
│       │
│       ├── type/
│       │   └── productType.ts
│       │
│       ├── assets/
│       │   └── ...
│       │
│       ├── layout.tsx
│       ├── page.tsx
│       └── globals.css
│
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js 18+**
* **npm**
* **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/fahimrahat58/hero-app.git
```

```bash
cd hero-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Now open:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build.

```bash
npm run lint
```

Checks the project for linting issues.

---

## 🌐 Live Demo

<p align="center">

<a href="https://hero-app-lime.vercel.app/">
  <img src="https://img.shields.io/badge/🚀_Open_Hero_App-7C3AED?style=for-the-badge" alt="Open Hero App" />
</a>

</p>

**Live Website:**
https://hero-app-lime.vercel.app/

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

### Fork the project

```bash
git fork
```

### Create a feature branch

```bash
git checkout -b feature/AmazingFeature
```

### Commit your changes

```bash
git commit -m "Add AmazingFeature"
```

### Push the branch

```bash
git push origin feature/AmazingFeature
```

Then open a Pull Request.

---

## 📄 License

This project is distributed under the **MIT License**.

---

## 👨‍💻 Developer

**Fahim Muntasir Rahat**

Frontend Developer in progress, currently focused on building modern web applications with **React, Next.js, TypeScript, and Tailwind CSS**.

<p align="center">
  <strong>Built with ❤️ using Next.js</strong>
</p>
