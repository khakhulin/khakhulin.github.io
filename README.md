# Taras Khakhulin - Personal Research Website

A modern, interactive personal website built with Next.js, featuring video hover effects, glassmorphism design, and responsive layout.

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js and npm installed on your system:

```bash
# Check if Node.js is installed
node --version

# Check if npm is installed  
npm --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/) or install via Homebrew:

```bash
# On macOS with Homebrew
brew install node
```

### Installation & Running

1. **Clone or navigate to the project directory:**
   ```bash
   cd /path/to/khakhulin.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the website:**
   Open your browser and go to:
   - Local: `http://localhost:3000`
   - Network: `http://[your-ip]:3000` (accessible from other devices on same network)

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the production version
- `npm run start` - Start the production server (after build)
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Main page component
│   ├── layout.tsx      # Root layout with metadata
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── profile-section.tsx
│   ├── publication-entry.tsx
│   └── ...
└── data/              # Content data files
    ├── aboutme.ts     # Personal information
    ├── publication.ts # Research publications
    └── ...

public/                # Static assets
├── images/           # Profile and publication images
├── videos/           # Publication hover videos
└── *.pdf            # CV and other documents
```

## ✨ Features

- **Interactive Publications**: Hover over research papers to see video demonstrations
- **Glassmorphism Design**: Modern UI with backdrop blur and transparency effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **TypeScript**: Type-safe development with full IntelliSense
- **Tailwind CSS**: Utility-first styling with custom animations
- **Fast Loading**: Optimized images and videos with Next.js

## 🎨 Customization

### Adding New Publications

Edit `src/data/publication.ts` to add new research papers:

```typescript
{
  year: "2024",
  conference: "Conference Name",
  title: "Your Paper Title",
  authors: "Author Names",
  paperUrl: "https://arxiv.org/...",
  codeUrl: "https://github.com/...",
  projectUrl: "https://project-site.com",
  imageUrl: "/images/paper-image.jpg",
  videoUrl: "/videos/paper-demo.mp4", // Optional hover video
  tldr: "Brief description of your work"
}
```

### Updating Personal Info

Edit `src/data/aboutme.ts` to update your personal information, social links, and bio.

### Adding Images/Videos

Place new media files in the `public/` directory:
- Images: `public/images/`
- Videos: `public/videos/`
- Documents: `public/`

## 🚀 Deployment

### GitHub Pages (Static Export)

1. **Configure for static export** in `next.config.ts`:
   ```typescript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: { unoptimized: true }
   }
   ```

2. **Build and export:**
   ```bash
   npm run build
   ```

3. **Deploy the `out/` folder** to GitHub Pages or any static hosting service.

### Vercel (Recommended)

1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel will automatically deploy on every push to main branch
3. No additional configuration needed!

## 📝 Notes

- The original HTML website has been fully migrated to this modern Next.js version
- All video hover effects from the original site are preserved and enhanced
- The design uses glassmorphism with subtle animations for a modern look
- Website is optimized for performance and SEO

## 🔧 Troubleshooting

**If npm is not found:**
```bash
# Use full path (adjust for your system)
/opt/homebrew/bin/npm run dev
```

**If videos don't play:**
- Ensure video files are in `public/videos/` directory
- Check that video URLs in `publication.ts` match actual file names
- Videos should be in MP4 format for best compatibility

**If images don't load:**
- Verify images are in `public/images/` directory
- Check file paths and extensions in data files

---

Built with ❤️ using [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com)
