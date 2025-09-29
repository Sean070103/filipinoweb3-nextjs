# Filipino Web3 - Next.js

A modern Next.js application for the Filipino Web3 community, converted from the original HTML/CSS/JS website.

## Features

- 🚀 Built with Next.js 15 and React 19
- 📱 Responsive design with mobile-first approach
- 🎨 Custom CSS with CSS variables for theming
- 🔧 TypeScript for type safety
- 📦 Modern component architecture
- 🖼️ Optimized images with Next.js Image component
- 📝 Contact form with reCAPTCHA integration
- 🎯 Interactive FAQs with smooth animations
- 👥 Team member showcase with social links

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Unicons and Font Awesome
- **Fonts**: Google Fonts (Montserrat)
- **Forms**: FormKeep integration with reCAPTCHA
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd filipinoweb3-nextjs
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page
└── components/
    ├── Navigation.tsx       # Navigation bar with mobile menu
    ├── Header.tsx           # Hero section
    ├── Categories.tsx       # Vision and Mission section
    ├── Values.tsx           # Core values section
    ├── Team.tsx             # Team members showcase
    ├── FAQs.tsx             # Interactive FAQ section
    ├── Contact.tsx          # Contact form
    └── Footer.tsx           # Footer with links
```

## Key Components

### Navigation
- Fixed navigation bar with scroll effects
- Mobile-responsive hamburger menu
- Smooth scroll navigation

### Header
- Hero section with call-to-action
- Responsive image with Next.js Image optimization

### Team Section
- Core team and founding members
- Hover effects with social media links
- Responsive grid layout

### FAQs
- Interactive accordion-style questions
- Smooth open/close animations
- Client-side state management

### Contact Form
- FormKeep integration
- reCAPTCHA v3 protection
- Form validation and state management

## Styling

The project uses custom CSS with CSS variables for consistent theming:

```css
:root {
  --color-primary: #055709;
  --color-bg: #05386b;
  --color-bg1: #06407a;
  --color-bg2: #0c5eb1;
  /* ... more variables */
}
```

## Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Railway**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, contact the Filipino Web3 team at filipinoweb3@gmail.com