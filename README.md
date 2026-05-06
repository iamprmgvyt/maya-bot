# Maya Bot - Discord Music Bot Website

A beautiful, animated website for Maya Bot - your ultimate Discord music companion. Built with support for multiple languages (English, Vietnamese, Hindi).

## 🎵 Features

- **Beautiful Animations** - Smooth, modern animations powered by CSS and JavaScript
- **Multi-Language Support** - Switch between English, Vietnamese, and Hindi instantly
- **Responsive Design** - Looks great on all devices
- **Interactive Elements** - Animated music visualizer, play/pause controls, hover effects
- **Modern UI** - Glass morphism effects, gradient backgrounds, and contemporary design

## 🌐 Deployment Options

### Option 1: Next.js Version (Recommended)

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Run development server:**
   ```bash
   bun run dev
   ```

3. **Build for production:**
   ```bash
   bun run build
   ```

4. **Deploy to GitHub Pages:**
   - Follow the detailed guide in `GITHUB_PAGES_DEPLOYMENT.md`

### Option 2: Standalone HTML Version (Easiest)

The `maya-bot.html` file is a self-contained version that can be hosted anywhere:

1. **Just upload `maya-bot.html` to:**
   - GitHub Pages
   - Netlify (Drag & Drop)
   - Vercel
   - Any static hosting service

2. **GitHub Pages Quick Deploy:**
   ```bash
   # Clone the repo or create one
   git init
   git add maya-bot.html
   git commit -m "Add Maya Bot website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/maya-bot.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select source: Deploy from a branch
   - Select branch: main
   - Click Save

Your website will be live at: `https://YOUR_USERNAME.github.io/maya-bot`

## 📁 Project Structure

```
/home/z/my-project/
├── maya-bot.html                    # Standalone HTML version (ready to deploy)
├── GITHUB_PAGES_DEPLOYMENT.md       # Detailed GitHub Pages deployment guide
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Next.js main page
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── i18n/
│   │   └── translations.ts          # Multi-language translations
│   └── hooks/
│       └── use-language.ts          # Language switcher hook
└── package.json
```

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `maya-bot.html`:

```css
.gradient-text {
    background: linear-gradient(to right, #9333ea, #ec4899, #f97316);
}

.feature-gradient {
    background: linear-gradient(135deg, #9333ea, #ec4899);
}
```

### Adding More Languages

Add translations in `src/i18n/translations.ts`:

```typescript
export const translations = {
  en: { ... },
  vi: { ... },
  hi: { ... },
  // Add your language here
  es: {
    home: "Inicio",
    features: "Características",
    // ... more translations
  }
};
```

## 🌍 Languages Supported

- 🇬🇧 **English** (en)
- 🇻🇳 **Vietnamese** (vi)
- 🇮🇳 **Hindi** (hi)

## 🚀 Quick Start

### For Next.js Version:

```bash
# Clone or navigate to the project
cd /home/z/my-project

# Install dependencies
bun install

# Start development server
bun run dev

# Visit http://localhost:3000
```

### For HTML Version:

1. Open `maya-bot.html` directly in a browser, OR
2. Upload to GitHub Pages (see above)

## 📱 Features Breakdown

### Hero Section
- Animated music disc with orbiting notes
- Real-time music visualizer bars
- Play/pause interactive button
- Floating particle background

### Features Section
- 6 feature cards with hover effects
- Glass morphism design
- Smooth slide-in animations

### Commands Section
- 8 bot commands with descriptions
- Interactive cards with hover effects
- Code styling for commands

### Stats Section
- Impressive statistics display
- Gradient background
- Hover scale effects

## 🔧 Technologies Used

### Next.js Version:
- Next.js 16 with App Router
- React 19
- Framer Motion (animations)
- Tailwind CSS
- TypeScript

### HTML Version:
- Pure HTML5
- CSS3 Animations
- JavaScript (ES6+)
- Tailwind CSS (via CDN)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and make it your own! Suggestions and improvements are welcome.

## 📧 Support

If you need help deploying or customizing the website:
1. Check `GITHUB_PAGES_DEPLOYMENT.md` for deployment help
2. Review the code comments in `maya-bot.html`
3. Test the standalone HTML version first before Next.js version

---

**Made with ❤️ for Maya Bot Community**

Enjoy your beautiful music bot website! 🎵✨
