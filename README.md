# Swaminath Nalwar — Portfolio

A modern, fully responsive personal portfolio built with **React + Vite + Tailwind CSS + Framer Motion**.

## 🏗️ Project Structure

```
portfolio/
├── index.html              ← Standalone HTML version (no build needed)
├── index-react.html        ← React app entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx            ← React entry
    ├── App.jsx             ← Root component
    ├── index.css           ← Global styles + Tailwind
    ├── data/
    │   └── portfolio.js    ← All resume content (edit here)
    ├── hooks/
    │   ├── useTheme.js     ← Dark/light mode
    │   └── useIntersection.js  ← Scroll animation trigger
    ├── components/
    │   ├── Navbar.jsx
    │   └── Footer.jsx
    └── sections/
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Certifications.jsx
        └── Contact.jsx
```

## ⚡ Quick Start — Standalone HTML (No Build)

Just open `index.html` in any browser. Zero setup required.

## 🚀 Run Locally — React App

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
# Output goes to /dist folder
```

Preview the production build:
```bash
npm run preview
```

## 🌐 Deploy on Vercel

### Option A — Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Framework preset: Vite
# - Build command: npm run build
# - Output directory: dist

# For production deploy:
vercel --prod
```

### Option B — Vercel Dashboard (GUI)

1. Push your code to GitHub/GitLab
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Configure:
   - **Framework**: Vite
   - **Build command**: `npm run build`
   - **Output directory**: `dist`
5. Click **Deploy** ✅

### Option C — Netlify

```bash
npm run build
# Drag & drop the /dist folder to netlify.com/drop
```

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## ✏️ Customization

All portfolio content lives in `src/data/portfolio.js`. Edit that file to:
- Update name, contact details, social links
- Add/remove skills, experience, projects
- Update certifications and education

## 🎨 Design Features

- **Dark/Light mode** toggle with smooth transition
- **Framer Motion** animations on scroll
- **Responsive** for mobile, tablet, desktop
- **Syne** (display) + **DM Sans** (body) typography
- **Purple gradient** accent system
- Animated skill progress bars
- Timeline-style experience section
- Project cards with hover effects
- Functional contact form UI

## 📄 License

MIT — free to use and modify.
