# Emma's Site

A modern web application built with Vite, React, TypeScript, and TailwindCSS.

## 🚀 Tech Stack

- **Vite** - Fast build tool and development server
- **React 19** - UI library with latest features
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS v4** - Utility-first CSS framework

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd emmas_site
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Styling

This project uses TailwindCSS v4 for styling. The main CSS file is located at `src/index.css` and includes the TailwindCSS import.

## 📁 Project Structure

```
emmas_site/
├── public/           # Static assets
├── src/             # Source code
│   ├── assets/      # Images, fonts, etc.
│   ├── App.tsx      # Main App component
│   ├── index.css    # Global styles with TailwindCSS
│   └── main.tsx     # Entry point
├── index.html       # HTML template
└── vite.config.ts   # Vite configuration
```

## 🚀 Deployment

To build for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

---

Built with ❤️ for Emma
