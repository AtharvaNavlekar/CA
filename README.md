# Bhosale And Co — Financial Services Website

> A modern website for **Bhosale And Co**, a trusted financial services firm based in Vasai East, Maharashtra. The website showcases services including loans, investments, tax filing, and more — built with React, TypeScript, and Vite.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Configure Environment Variables](#3-configure-environment-variables)
  - [4. Run the Development Server](#4-run-the-development-server)
  - [5. Build for Production](#5-build-for-production)
  - [6. Preview the Production Build](#6-preview-the-production-build)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
  - [Runtime Dependencies](#runtime-dependencies)
  - [Dev Dependencies](#dev-dependencies)
- [Fonts & Design](#fonts--design)
- [SEO & Metadata](#seo--metadata)
- [Gemini Integration](#gemini-integration)
- [Deployment](#deployment)
  - [Deploying via Google AI Studio](#deploying-via-google-ai-studio)
  - [Deploying Manually (Cloud Run / Any Node Host)](#deploying-manually-cloud-run--any-node-host)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

**Bhosale And Co** is a Chartered Accountant (CA) and financial services firm established in **2013**, located in **Vasai East, Maharashtra, India**. This repository contains the source code for their official website — a single-page React application that presents their services, team, and contact information to prospective clients.

I built this project from scratch to give Bhosale And Co a clean, professional digital presence. The site is designed to be fast, mobile-friendly, and easy to maintain.

---

## Features

- **Services Showcase** — Highlights key offerings: loans, investments, income tax filing, GST compliance, and more.
- **Financial Assistant Chatbot** — Integrated with the Google Gemini API to answer client queries about financial services directly on the site.
- **Responsive Design** — Built with Tailwind CSS v4 for a fully mobile-first, responsive layout across all screen sizes.
- **Smooth Animations** — Uses the `motion` library for polished UI transitions and scroll animations.
- **Multi-Page Navigation** — Client-side routing powered by `react-router-dom` v7 for seamless page transitions.
- **Custom Typography** — Uses Google Fonts: `Lato` (body) and `Playfair Display` (headings) for a professional, trustworthy appearance.
- **SEO Optimised** — Meta title and description configured for local search visibility in Vasai East.
- **Type-Safe Codebase** — Written entirely in TypeScript (~98% of the codebase) for maintainability and reliability.
- **Fast Development & Build** — Powered by Vite 6 for near-instant hot module replacement and optimised production builds.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI Library | React | ^19.0.0 |
| Language | TypeScript | ~5.8.2 |
| Build Tool | Vite | ^6.2.0 |
| Styling | Tailwind CSS | ^4.1.14 |
| Routing | React Router DOM | ^7.13.1 |
| Animation | Motion (Framer Motion) | ^12.23.24 |
| Icons | Lucide React | ^0.546.0 |
| Chatbot | Google GenAI SDK | ^1.29.0 |
| Server (optional) | Express | ^4.21.2 |
| Environment | dotenv | ^17.2.3 |

---

## Project Structure

```
CA/
├── src/                    # Application source code
│   └── main.tsx            # React application entry point
├── index.html              # HTML shell with font imports and root div
├── package.json            # Project metadata, scripts, and dependencies
├── package-lock.json       # Locked dependency tree
├── tsconfig.json           # TypeScript compiler configuration
├── vite.config.ts          # Vite build and plugin configuration
├── metadata.json           # AI Studio app metadata
├── .env.example            # Template for required environment variables
├── .gitignore              # Files and folders excluded from version control
└── README.md               # Project documentation (this file)
```

> **Note:** The `src/` directory contains the full React component tree, including components for each section of the website (Hero, Services, About, Contact, etc.) as well as the Gemini chatbot integration.

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** — v18 or later recommended ([Download here](https://nodejs.org/))
- **npm** — Comes bundled with Node.js
- **A Google Gemini API Key** — Required for the chatbot feature ([Get yours at Google AI Studio](https://aistudio.google.com/app/apikey))

To verify your Node.js and npm installation, run:

```bash
node --version
npm --version
```

---

## Getting Started

Follow these steps to get the project running on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/AtharvaNavlekar/CA.git
cd CA
```

### 2. Install Dependencies

```bash
npm install
```

This installs all runtime and development dependencies listed in `package.json`.

### 3. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env.local
```

Then open `.env.local` in your editor and set your Gemini API key:

```env
GEMINI_API_KEY="your_actual_gemini_api_key_here"
APP_URL="http://localhost:3000"
```

> ⚠️ **Never commit `.env.local` to version control.** It is already listed in `.gitignore`.

### 4. Run the Development Server

```bash
npm run dev
```

The app will start at **[http://localhost:3000](http://localhost:3000)**. The server binds to `0.0.0.0`, making it accessible on your local network as well.

Vite will watch for file changes and automatically reload the browser via Hot Module Replacement (HMR).

### 5. Build for Production

```bash
npm run build
```

The production-optimised output will be placed in the `dist/` directory. Vite compiles TypeScript, bundles all modules, and applies Tailwind CSS purging for minimal file sizes.

### 6. Preview the Production Build

```bash
npm run preview
```

This serves the `dist/` folder locally so you can verify the production build before deploying.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | Your Google Gemini API key. Used to power the chatbot via `@google/genai`. Obtain it from [Google AI Studio](https://aistudio.google.com/app/apikey). |
| `APP_URL` | ✅ Yes (in production) | The base URL where the app is hosted. Used for self-referential links, API endpoints, and callbacks when deployed. Set to `http://localhost:3000` for local development. |

When deploying through **Google AI Studio**, both variables are automatically injected at runtime from your configured secrets — you do not need to manually set them in that environment.

---

## Available Scripts

All scripts are run via `npm run <script>`:

| Script | Command | Description |
|---|---|---|
| `dev` | `vite --port=3000 --host=0.0.0.0` | Starts the Vite development server on port 3000, accessible on all network interfaces. |
| `build` | `vite build` | Compiles and bundles the app for production into the `dist/` directory. |
| `preview` | `vite preview` | Serves the production build locally for testing. |
| `clean` | `rm -rf dist` | Deletes the `dist/` directory. Useful before a fresh build. |
| `lint` | `tsc --noEmit` | Runs the TypeScript compiler in check-only mode to catch type errors without emitting files. |

---

## Dependencies

### Runtime Dependencies

| Package | Version | Purpose |
|---|---|---|
| `react` | ^19.0.0 | Core UI library |
| `react-dom` | ^19.0.0 | React DOM renderer |
| `react-router-dom` | ^7.13.1 | Client-side routing and navigation |
| `@google/genai` | ^1.29.0 | Google Generative AI SDK for the Gemini chatbot |
| `@tailwindcss/vite` | ^4.1.14 | Tailwind CSS Vite plugin for seamless CSS-in-build integration |
| `motion` | ^12.23.24 | Animation library for UI transitions and scroll effects |
| `lucide-react` | ^0.546.0 | Icon library with clean SVG icons as React components |
| `express` | ^4.21.2 | Node.js HTTP server for API proxying when deployed |
| `dotenv` | ^17.2.3 | Loads environment variables from `.env*` files into `process.env` |
| `vite` | ^6.2.0 | Next-generation frontend build tool |

### Dev Dependencies

| Package | Version | Purpose |
|---|---|---|
| `typescript` | ~5.8.2 | TypeScript language support and type checking |
| `tailwindcss` | ^4.1.14 | Utility-first CSS framework |
| `autoprefixer` | ^10.4.21 | PostCSS plugin to add vendor prefixes to CSS |
| `@vitejs/plugin-react` | ^5.0.4 | Vite plugin for React Fast Refresh and JSX transform |
| `tsx` | ^4.21.0 | TypeScript executor for running `.ts`/`.tsx` files directly in Node |
| `@types/express` | ^4.17.21 | TypeScript type definitions for Express |
| `@types/node` | ^22.14.0 | TypeScript type definitions for Node.js built-ins |

---

## Fonts & Design

I chose two Google Fonts to give the site a professional, finance-appropriate look:

- **Lato** (`300`, `400`, `700` — regular and italic) — Used for body text, descriptions, and UI elements. Clean and highly readable.
- **Playfair Display** (`400–900` — regular and italic) — Used for headings and section titles. The elegant serif style conveys trust and authority, which fits well for a financial firm.

Both fonts are loaded via `<link>` tags in `index.html` with `preconnect` hints to reduce font loading time.

---

## SEO & Metadata

The `index.html` file includes SEO metadata configured for local discoverability in Vasai East:

```html
<title>Bhosale And Co | Financial Services, Vasai East</title>
<meta name="description" content="Bhosale And Co — trusted financial services in Vasai East since 2013. Loans, investments, tax filing, and more. Contact us today." />
```

Future improvements to consider:
- Open Graph (`og:`) and Twitter Card meta tags for social media previews
- A `sitemap.xml` for search engine crawling
- Structured data (JSON-LD) for local business schema markup

---

## Gemini Integration

The site includes a financial assistant chatbot powered by Google's **Gemini** model via the `@google/genai` SDK. The API key is loaded securely from the `GEMINI_API_KEY` environment variable at runtime and never exposed to the client bundle.

**Usage pattern:**

```typescript
import { GoogleGenerativeAI } from "@google/genai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent("Your prompt here");
const response = await result.response;
const text = response.text();
```

The chatbot helps site visitors get quick answers about Bhosale And Co's services — things like loan eligibility, tax filing queries, or investment options — without needing to call the office.

> **Security note:** Keep `GEMINI_API_KEY` server-side at all times. Never expose it in client-side JavaScript bundles.

---

## Deployment

### Deploying via Google AI Studio

This project is set up to deploy seamlessly through Google AI Studio:

1. Push your code to GitHub.
2. Connect the repository in [Google AI Studio](https://aistudio.google.com/).
3. Configure `GEMINI_API_KEY` and `APP_URL` in the **Secrets** panel.
4. AI Studio will build and deploy the app to **Google Cloud Run**, injecting all secrets at runtime automatically.

### Deploying Manually (Cloud Run / Any Node Host)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Set environment variables** on your hosting platform:
   ```
   GEMINI_API_KEY=your_key_here
   APP_URL=https://your-domain.com
   ```

3. **Serve the `dist/` folder** via the included Express server:

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

4. **Deploy** to your preferred platform — Google Cloud Run, Railway, Render, Fly.io, or Vercel.

---

## Contributing

If you'd like to contribute or suggest improvements:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "feat: add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request describing your changes.

Please make sure your code passes the TypeScript lint check before submitting:

```bash
npm run lint
```

---

## License

This project is **private** (`"private": true` in `package.json`) and not published to npm. All rights reserved by **Atharva Navlekar**.

---

<p align="center">
  <strong>The.Navlekar</strong>
</p>
