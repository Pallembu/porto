# Muhammad Faizal Rais Athallah - Portfolio

A sophisticated, single-page personal portfolio built with Next.js, TailwindCSS, and GSAP animations.

## 🎨 Color Palette

This portfolio strictly adheres to the following color palette:

- **#FFF5F2** - Main Background
- **#F5BABB** - Light Accent
- **#568F87** - Muted Accent
- **#064232** - Primary Text / Dark Accent

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: React Icons

## 📦 Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

## 🏃 Running the Project

### Development Mode

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Lint Code

```bash
npm run lint
```

## 📁 Project Structure

```
porto/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx             # Main page combining all sections
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Sidebar.tsx          # Vertical navigation sidebar
│       ├── Hero.tsx             # Hero section with GSAP animations
│       ├── About.tsx            # About Me section with skills
│       ├── Projects.tsx         # Featured projects section
│       ├── Experience.tsx       # Career timeline
│       └── Contact.tsx          # Contact information
├── public/
│   └── favicon.svg              # "Z" favicon
├── tailwind.config.ts           # TailwindCSS configuration
├── tsconfig.json                # TypeScript configuration
└── next.config.js               # Next.js configuration
```

## 🎯 Features

### Navigation

- **Vertical Sidebar**: Fixed left sidebar with smooth scroll navigation (Home, About, Projects, Experience, Contact)
- **Active Section Highlighting**: Automatically highlights the current section
- **Enhanced Visual Effects**: Gradient backgrounds, animated tooltips, and pulse indicators
- **Smooth Scrolling**: Click navigation items to smoothly scroll to sections

### Sections

#### 1. Hero (Home)

- Animated gradient background with floating blobs
- Glowing profile photo placeholder (letter "Z") with floating animation
- Animated name reveal (letter-by-letter) with gradient text
- Professional headline with gradient effect
- Welcome badge and summary
- Two CTA buttons: "View My Work" and "Get In Touch"
- **To add your photo**: Replace the placeholder div in `src/components/Hero.tsx` with an Image component

#### 2. About Me (NEW!)

- Personal story bridging IT Support and Web Development backgrounds
- 6 animated skill cards with progress bars:
  - Frontend Development (Next.js, React, TailwindCSS)
  - CMS Integration (Sanity, Headless CMS)
  - Server Administration (Ubuntu Server, OpenVPN)
  - Network Management (MikroTik, UniFi, Cisco)
  - Performance Optimization (SSR, SSG, SEO)
  - IT Support (Hardware, Troubleshooting)
- Glassmorphism design with backdrop blur effects
- Animated background elements
- Corner decorations and gradient overlays

#### 3. Projects

- Two featured project cards with glassmorphism design:
  - High-Performance Landing Pages
  - Headless CMS Integration
- 3D rotation effects on hover
- Shine animation across cards
- Scroll-triggered fade-in animations with rotation
- Project number badges
- Gradient technology tags
- Corner decorations

#### 4. Experience

- Vertical timeline with gradient glow effect
- Glassmorphism cards with backdrop blur
- Three career entries:
  - **Pashart** (Current): Web Builder & Development Freelance - with pulsing indicator
  - **Hascar Auto Services**: IT Support & Teknisi
  - **RZL Games**: Pramuniaga dan Teknisi
- Alternating left-right layout
- Enhanced current position badge with pulse animation
- Hover effects with subtle rotation
- Corner decorations

#### 5. Contact

- Email, Phone, Website, GitHub, and LinkedIn
- Glassmorphism contact cards with gradient icon containers
- Shine animation on hover
- 3D rotation effects
- Direct links to contact methods
- Enhanced footer with glassmorphism badge
- Animated background blobs

## 🎨 Customization

### Adding Your Profile Photo

1. Add your profile photo to the `public` folder (e.g., `public/profile.jpg`)
2. Update `src/components/Hero.tsx`:

```tsx
// Replace the placeholder div with:
<Image
  src="/profile.jpg"
  alt="Muhammad Faizal Rais Athallah"
  fill
  className="object-cover"
  priority
/>
```

### Updating Project Links

Edit the `projects` array in `src/components/Projects.tsx` to add actual project URLs:

```tsx
const projects = [
  {
    ...
    link: 'https://your-actual-project-url.com',
  },
];
```

### Modifying Colors

All colors are defined in `tailwind.config.ts`. To change the palette:

```typescript
colors: {
  background: "#FFF5F2",
  lightAccent: "#F5BABB",
  mutedAccent: "#568F87",
  darkAccent: "#064232",
}
```

## ⚡ GSAP Animations

The portfolio uses GSAP for sophisticated animations:

- **Hero Section**: Letter-by-letter name reveal with 3D rotation, staggered text animations, profile image scaling
- **About Section**: Title scaling with bounce, staggered skill card reveals with rotation, progress bar width animations
- **Projects**: Scroll-triggered fade-in with rotation and stagger effect, shine animations
- **Experience**: Timeline line reveal from top, alternating entry animations with horizontal movement
- **Contact**: Staggered card animations with vertical movement

All animations use `ScrollTrigger` for viewport-based triggering and feature:

- Smooth easing functions (power3.out, back.out)
- Staggered delays for sequential reveals
- 3D transforms and rotations
- Scale and opacity transitions

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO

Metadata is configured in `src/app/layout.tsx`:

- Page title
- Meta description
- Keywords
- Open Graph tags
- Custom "Z" favicon

## 📝 ESLint

The project follows Next.js ESLint rules. All code has been validated and builds successfully.

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on Vercel
3. Deploy automatically

### Other Platforms

1. Build the project: `npm run build`
2. Deploy the `.next` folder and `public` directory
3. Ensure Node.js is available on the server

## 📧 Contact Information

- **Email**: faizal.rais29@gmail.com
- **Phone**: +62 813-8729-2445
- **Website**: https://zaristh.page
- **GitHub**: https://github.com/Pallembu
- **LinkedIn**: https://www.linkedin.com/in/zaristh/

## 📄 License

ISC License - © 2025 Muhammad Faizal Rais Athallah

---

Built with ❤️ using Next.js, TailwindCSS & GSAP
