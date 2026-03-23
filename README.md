<div align="center">

# The.Navlekar
### Financial Services Website

*Trusted. Professional. Since 2013.*

---

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Status](https://img.shields.io/badge/Status-Live-22c55e?style=for-the-badge)

<br/>

> A modern, fast, and fully responsive website for **Bhosale And Co** — a Chartered Accountant firm based in Vasai East, Maharashtra.  
> Built with React, TypeScript, Vite, and powered by the Google Gemini API for an intelligent client experience.

<br/>

</div>

---

## 📋 Table of Contents

- [📌 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [📜 Available Scripts](#-available-scripts)
- [📦 Dependencies](#-dependencies)
- [🎨 Fonts & Design](#-fonts--design)
- [🔍 SEO & Metadata](#-seo--metadata)
- [🤖 Gemini Integration](#-gemini-integration)
- [☁️ Deployment](#️-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📌 Project Overview

**Bhosale And Co** is a Chartered Accountant (CA) and financial services firm established in **2013**, located in **Vasai East, Maharashtra, India**.

This repository contains the source code for their official website — a single-page React application that presents services, team information, and contact details to prospective clients.

I built this project from scratch to give Bhosale And Co a clean, professional digital presence. The site is designed to be fast, mobile-friendly, and easy to maintain.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📊 **Services Showcase** | Highlights key offerings: loans, investments, income tax filing, GST compliance, and more |
| 🤖 **Financial Chatbot** | Google Gemini-powered assistant that answers client queries directly on the site |
| 📱 **Responsive Design** | Mobile-first layout built with Tailwind CSS v4, works across all screen sizes |
| 🎞️ **Smooth Animations** | Polished UI transitions and scroll animations using the `motion` library |
| 🔗 **Client-Side Routing** | Seamless multi-page navigation via `react-router-dom` v7 |
| 🔤 **Custom Typography** | Lato + Playfair Display Google Fonts for a professional, trustworthy look |
| 🔎 **SEO Optimised** | Meta title and description pre-configured for local search visibility in Vasai East |
| 🛡️ **Type-Safe** | ~98% TypeScript for a maintainable, error-resistant codebase |
| ⚡ **Blazing Fast** | Vite 6 for near-instant HMR and highly optimised production builds |

---

## 🛠 Tech Stack

| Layer | Technology | Version |
|---|---|---|
| 🖼 UI Library | React | `^19.0.0` |
| 💬 Language | TypeScript | `~5.8.2` |
| ⚡ Build Tool | Vite | `^6.2.0` |
| 🎨 Styling | Tailwind CSS | `^4.1.14` |
| 🔗 Routing | React Router DOM | `^7.13.1` |
| 🎞 Animation | Motion (Framer Motion) | `^12.23.24` |
| 🔣 Icons | Lucide React | `^0.546.0` |
| 🤖 Chatbot API | Google GenAI SDK | `^1.29.0` |
| 🌐 Server | Express | `^4.21.2` |
| 🔑 Environment | dotenv | `^17.2.3` |

---

## 📁 Project Structure

```
CA/
│
├── 📂 src/                     # Application source code
│   └── main.tsx                # React entry point
│
├── 📄 index.html               # HTML shell — fonts, meta, root div
├── 📄 package.json             # Scripts, dependencies, project metadata
├── 📄 package-lock.json        # Locked dependency tree
├── 📄 tsconfig.json            # TypeScript compiler configuration
├── 📄 vite.config.ts           # Vite build & plugin configuration
├── 📄 metadata.json            # App metadata
├── 📄 .env.example             # Template for environment variables
├── 📄 .gitignore               # Git ignore rules
└── 📄 README.md                # You are here
```

> 💡 The `src/` directory contains the full React component tree — Hero, Services, About, Contact sections, plus the Gemini chatbot logic.

---

## ⚙️ Prerequisites

Make sure you have the following before getting started:

- **Node.js** v18+ → [nodejs.org](https://nodejs.org/)
- **npm** — comes bundled with Node.js
- **Google Gemini API Key** → [Get yours here](https://aistudio.google.com/app/apikey)

Verify your setup:

```bash
node --version
npm --version
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AtharvaNavlekar/CA.git
cd CA
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:

```env
GEMINI_API_KEY="your_actual_gemini_api_key_here"
APP_URL="http://localhost:3000"
```

> ⚠️ **Never commit `.env.local` to version control.** It's already covered by `.gitignore`.

### 4️⃣ Run the Development Server

```bash
npm run dev
```

🌍 Open **[http://localhost:3000](http://localhost:3000)** in your browser.  
The server binds to `0.0.0.0`, so it's also accessible on your local network. Vite will hot-reload on every file save.

### 5️⃣ Build for Production

```bash
npm run build
```

Output lands in `dist/` — TypeScript compiled, modules bundled, Tailwind purged for minimal size.

### 6️⃣ Preview the Production Build

```bash
npm run preview
```

Serves `dist/` locally for a final sanity check before deploying.

---

## 🔐 Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | Powers the Gemini chatbot via `@google/genai`. Get it at [aistudio.google.com](https://aistudio.google.com/app/apikey). |
| `APP_URL` | ✅ Yes (production) | Base URL of the hosted app. Used for API endpoints and callbacks. Use `http://localhost:3000` locally. |

> When deploying via **Google AI Studio**, both variables are injected automatically from the Secrets panel — no manual setup needed.

---

## 📜 Available Scripts

```bash
npm run dev        # Start dev server on port 3000
npm run build      # Build for production → dist/
npm run preview    # Preview production build locally
npm run clean      # Delete the dist/ folder
npm run lint       # TypeScript type-check (no emit)
```

| Script | Command |
|---|---|
| `dev` | `vite --port=3000 --host=0.0.0.0` |
| `build` | `vite build` |
| `preview` | `vite preview` |
| `clean` | `rm -rf dist` |
| `lint` | `tsc --noEmit` |

---

## 📦 Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | `^19.0.0` | Core UI library |
| `react-dom` | `^19.0.0` | React DOM renderer |
| `react-router-dom` | `^7.13.1` | Client-side routing |
| `@google/genai` | `^1.29.0` | Google Generative AI SDK — powers the Gemini chatbot |
| `@tailwindcss/vite` | `^4.1.14` | Tailwind CSS Vite plugin |
| `motion` | `^12.23.24` | Animation library for UI transitions |
| `lucide-react` | `^0.546.0` | SVG icon library for React |
| `express` | `^4.21.2` | Node.js HTTP server for serving the app when deployed |
| `dotenv` | `^17.2.3` | Loads `.env` variables into `process.env` |
| `vite` | `^6.2.0` | Frontend build tool |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `typescript` | `~5.8.2` | Type checking and compilation |
| `tailwindcss` | `^4.1.14` | Utility-first CSS framework |
| `autoprefixer` | `^10.4.21` | Adds CSS vendor prefixes automatically |
| `@vitejs/plugin-react` | `^5.0.4` | React Fast Refresh + JSX transform for Vite |
| `tsx` | `^4.21.0` | Runs TypeScript files directly in Node |
| `@types/express` | `^4.17.21` | TypeScript types for Express |
| `@types/node` | `^22.14.0` | TypeScript types for Node.js built-ins |

---

## 🎨 Fonts & Design

I chose two Google Fonts to give the site a professional, finance-appropriate character:

| Font | Weights | Usage |
|---|---|---|
| **Lato** | 300, 400, 700 (+ italics) | Body text, descriptions, UI labels |
| **Playfair Display** | 400–900 (+ italics) | Headings and section titles |

**Why this pairing?**  
Playfair Display's elegant serif style communicates authority and tradition — exactly right for a CA firm. Lato keeps body copy clean and readable without competing for attention.

Both fonts load via `<link>` tags in `index.html` with `preconnect` hints for optimal performance.

---

## 🔍 SEO & Metadata

Pre-configured in `index.html` for local search visibility:

```html
<title>Bhosale And Co | Financial Services, Vasai East</title>
<meta name="description"
  content="Bhosale And Co — trusted financial services in Vasai East since 2013.
  Loans, investments, tax filing, and more. Contact us today." />
```

**Planned improvements:**
- [ ] Open Graph + Twitter Card tags for social previews
- [ ] `sitemap.xml` for search engine crawling
- [ ] JSON-LD structured data for local business schema

---

## 🤖 Gemini Integration

The site features a financial assistant chatbot built with Google's **Gemini** model via the `@google/genai` SDK. The API key is loaded server-side at runtime — never exposed in the client bundle.

```typescript
import { GoogleGenerativeAI } from "@google/genai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent("Your prompt here");
const response = await result.response;
const text = response.text();
```

The chatbot lets visitors instantly ask about loan eligibility, tax filing, GST queries, or investment options — without needing to call the office.

> 🔒 **Security:** `GEMINI_API_KEY` must stay server-side. Never bundle it into client-facing JavaScript.

---

## ☁️ Deployment

### 🟢 Via Google AI Studio

1. Push your code to GitHub
2. Connect the repo in [Google AI Studio](https://aistudio.google.com/)
3. Set `GEMINI_API_KEY` and `APP_URL` in the **Secrets** panel
4. AI Studio builds and deploys automatically to **Google Cloud Run** ✅

### 🔵 Manual Deployment (Any Node Host)

**Step 1 — Build:**
```bash
npm run build
```

**Step 2 — Set env vars on your platform:**
```
GEMINI_API_KEY=your_key_here
APP_URL=https://your-domain.com
```

**Step 3 — Serve with Express:**
```javascript
// server.js
import express from "express";
import path from "path";

const app = express();
app.use(express.static(path.join(process.cwd(), "dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});
app.listen(process.env.PORT || 8080);
```

**Step 4 — Deploy to:**  
`Google Cloud Run` · `Railway` · `Render` · `Fly.io` · `Vercel`

---

## 🤝 Contributing

Contributions and suggestions are always welcome!

```bash
# 1. Fork the repo and clone your fork
git clone https://github.com/YOUR_USERNAME/CA.git

# 2. Create a feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes, then commit
git commit -m "feat: describe your change"

# 4. Push and open a Pull Request
git push origin feature/your-feature-name
```

Before submitting, make sure the TypeScript check passes:

```bash
npm run lint
```

---

## 📄 License

This project is **private** and not published to npm.  
All rights reserved © **Atharva Navlekar**.

---

<div align="center">

<br/>

**— The.Navlekar —**

*Built for Bhosale And Co · Vasai East, Maharashtra · Est. 2013*

</div>
