<div align="center">

# 🚀 Hero App

### **DISCOVER. EXPLORE. INSTALL.**

A modern and responsive **App Discovery Platform** built with **Next.js, TypeScript, and Tailwind CSS**.

<br />

<a href="https://hero-app-lime.vercel.app/">
  <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-OPEN%20HERO%20APP-7C3AED?style=for-the-badge&labelColor=111827" alt="Live Demo" />
</a>

<a href="https://github.com/fahimrahat58/hero-app">
  <img src="https://img.shields.io/badge/GITHUB-REPOSITORY-181717?style=for-the-badge&logo=github" alt="GitHub Repository" />
</a>

<br /><br />

<img src="https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=next.js" alt="Next.js" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />

</div>

---

## 📌 Project Overview

**Hero App** is a modern and responsive **app discovery platform** built with **Next.js, TypeScript, and Tailwind CSS**.

The application allows users to explore trending applications, browse the complete app collection, search for apps, view detailed information, install applications, and manage their installed apps.

The project focuses on:

- 📱 App discovery
- 🔎 Real-time search
- 📊 App information and statistics
- 📦 App installation management
- 💾 Client-side data persistence
- 📱 Responsive UI
- ⚡ Modern Next.js architecture

---

## 📸 Project Preview

<p align="center">
  <img
    src="./public/Screenshot 2026-10-04 215119.png"
    alt="Hero App Homepage"
    width="100%"
  />
</p>

<p align="center">
  <em>Hero App Homepage</em>
</p>

---

## ✨ Main Features

### 🏠 1. Home Page

The home page provides a modern introduction to the Hero App platform.

Features include:

- Modern hero/banner section
- Trending apps section
- Responsive app cards
- Quick navigation to all applications
- Clean and modern layout

---

### 📱 2. Apps Explorer

Users can browse the complete application collection.

Features include:

- Browse all available applications
- Real-time app search
- Responsive grid layout
- App count display
- Clean empty-state UI

---

### 🔎 3. App Details

Each application has a dedicated dynamic details page.

Route:

```text
/apps/[id]
```

The details page displays:

- App icon
- App name
- App information
- Download statistics
- Average rating
- Total reviews
- Rating breakdown
- Detailed description
- Install functionality

---

### 📦 4. Installation System

Users can install applications directly from the app details page.

The installation system allows users to:

- Install apps
- View installed applications
- Uninstall applications
- Sort installed applications
- Persist installed app data using `localStorage`

---

### 🛑 5. Error Handling

The application includes proper error handling for invalid routes and application IDs.

Features include:

- Custom `not-found` page
- Invalid app ID handling
- Server-side data validation
- Empty states

---

### 📱 6. Responsive Design

Hero App follows a responsive and mobile-first design approach.

The application is optimized for:

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

Responsive elements include:

- Navigation
- Hero section
- App cards
- Search interface
- App details
- Installation section

---

### 🔔 7. Toast Notifications

The application provides user feedback through toast notifications for important actions such as:

- App installation
- App uninstallation
- Duplicate installation
- Other user interactions

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **Next.js 16** | React framework and App Router |
| **React 19** | User interface development |
| **TypeScript** | Type-safe development |
| **Tailwind CSS 4** | Styling and responsive design |
| **DaisyUI** | UI components |
| **React Toastify** | Toast notifications |
| **Context API** | Client-side state management |
| **LocalStorage** | Installed app persistence |
| **Next/Image** | Optimized image rendering |
| **Next/Link** | Client-side navigation |
| **Vercel** | Deployment |
| **Git & GitHub** | Version control |

---

## 📦 Dependencies

The main dependencies used in this project include:

- `next` — React framework
- `react` — UI library
- `react-dom` — React DOM rendering
- `typescript` — Type-safe development
- `tailwindcss` — Styling framework
- `daisyui` — Tailwind CSS component library
- `react-toastify` — Toast notifications

For the complete dependency list and exact versions, check the project's `package.json` file.

---

## 🧠 Next.js Concepts Practiced

This project was built to practice several important modern Next.js concepts:

- App Router
- Server Components
- Client Components
- Dynamic Routes
- `notFound()`
- `next/image`
- `next/link`
- Server-side data fetching
- Async Server Components
- Context API
- Client-side state management
- `localStorage`
- Responsive layouts
- Component-based architecture
- Vercel deployment

---

## 📂 Project Structure

```text
hero-app/
│
├── public/
│   ├── data.json
│   └── screenshots/
│       └── homepage.png
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

## 📖 Main Pages

### 🏠 Home

The home page introduces Hero App and displays trending applications with quick navigation to the complete app collection.

### 📱 Apps

The Apps page displays the complete application collection.

Users can:

- Browse apps
- Search apps
- View app count
- Open app details

### 📖 App Details

Each app has a dynamic route:

```text
/apps/[id]
```

The page displays detailed information about the selected application and provides installation functionality.

### 📦 Installed Apps

The installed applications section allows users to:

- View installed apps
- Sort installed apps
- Uninstall applications

---

## 💾 LocalStorage

Hero App uses browser **localStorage** to persist installed application information.

Installed app data remains available after:

- Page refresh
- Browser navigation
- Returning to the application

This provides a simple client-side persistence mechanism without requiring a database.

---

## 🚀 Getting Started

Follow the steps below to run **Hero App** locally.

### Prerequisites

Make sure you have the following installed:

- Node.js 18+
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/fahimrahat58/hero-app.git
```

### 2. Navigate to the Project

```bash
cd hero-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open the Application

Visit:

```text
http://localhost:3000
```

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Production Server

```bash
npm run start
```

Runs the production build.

### Lint

```bash
npm run lint
```

Checks the project for linting issues.

---

## 🌐 Live Project

<div align="center">

### 🚀 Try Hero App Live

<a href="https://hero-app-lime.vercel.app/">
  <img
    src="https://img.shields.io/badge/🔥%20VISIT%20HERO%20APP-7C3AED?style=for-the-badge&logo=vercel&logoColor=white"
    alt="Visit Hero App Live"
  />
</a>

<br /><br />

<a href="https://hero-app-lime.vercel.app/">
  https://hero-app-lime.vercel.app/
</a>

</div>

---

## 🔗 Relevant Links

| Resource | Link |
|---|---|
| 🌐 Live Website | [Hero App](https://hero-app-lime.vercel.app/) |
| 💻 GitHub Repository | [Hero App Repository](https://github.com/fahimrahat58/hero-app) |
| 👨‍💻 GitHub Profile | [Fahim Muntasir Rahat](https://github.com/fahimrahat58) |
| 💼 LinkedIn | [Fahim Muntasir Rahat](https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/) |

---

## 📸 Screenshots

### 🏠 Homepage

<p align="center">
  <img
    src="./public/Screenshot 2026-10-04 215119.png"
    alt="Hero App Homepage"
    width="100%"
  />
</p>

---

## 🎯 Project Goals

The main goals of this project are:

- Build a real-world app discovery platform
- Practice Next.js App Router
- Improve TypeScript skills
- Learn Server and Client Components
- Practice dynamic routing
- Implement client-side state management
- Work with localStorage
- Build responsive user interfaces
- Practice Tailwind CSS and DaisyUI
- Implement error handling
- Deploy a production-ready application

---

## 📱 Responsive Support

Hero App is designed to provide a consistent experience across different screen sizes.

| Device | Support |
|---|---|
| 📱 Mobile | ✅ |
| 📲 Tablet | ✅ |
| 💻 Desktop | ✅ |
| 🖥️ Large Screens | ✅ |

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

### Fork the Project

```bash
git clone https://github.com/fahimrahat58/hero-app.git
```

### Create a Feature Branch

```bash
git checkout -b feature/AmazingFeature
```

### Commit Your Changes

```bash
git commit -m "Add AmazingFeature"
```

### Push the Branch

```bash
git push origin feature/AmazingFeature
```

Then open a Pull Request.

---

## 👨‍💻 Developer

<div align="center">

### Fahim Muntasir Rahat

**Frontend Developer in Progress**

Currently focused on building modern web applications with:

- React
- Next.js
- TypeScript
- Tailwind CSS

<br />

<a href="https://github.com/fahimrahat58">
  <img
    src="https://img.shields.io/badge/GitHub-fahimrahat58-181717?style=for-the-badge&logo=github"
    alt="GitHub"
  />
</a>

<a href="https://www.linkedin.com/in/fahim-muntasir-rahat-46ba6b2a7/">
  <img
    src="https://img.shields.io/badge/LinkedIn-Fahim%20Muntasir%20Rahat-0A66C2?style=for-the-badge&logo=linkedin"
    alt="LinkedIn"
  />
</a>

</div>

---

## 📄 License

This project is distributed under the **MIT License**.

---

<div align="center">

### ⭐ Thanks for visiting Hero App!

**DISCOVER. EXPLORE. INSTALL.**

Built with ❤️ using **Next.js & TypeScript**

</div>
