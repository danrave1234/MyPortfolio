# Portfolio Context - Danrave C. Keh

## Overview
A modern, professional portfolio website for Danrave C. Keh - Full Stack Developer and Information Technology Student at Cebu Institute of Technology (CIT-U).

## Technology Stack

### Frontend
- **React 18.3.1** - UI library
- **Vite 5.4.10** - Build tool and dev server
- **Tailwind CSS 3.4.15** - Utility-first CSS framework
- **Framer Motion 10.18.0** - Animation library
- **React Slick 0.30.3** - Carousel component (used in old Projects component)

### UI Libraries
- **@headlessui/react 2.2.0** - Unstyled UI components
- **@heroicons/react 2.2.0** - Icon library
- **@tailwindcss/forms 0.5.9** - Form styling
- **@tailwindcss/typography 0.5.15** - Typography plugin

### Fonts
- **Poppins** - Used for headings (h1-h6)
- **Manrope** - Used for body text

## Project Structure

```
MyPortfolio/
├── public/
│   ├── Logo.png
│   ├── Logo.svg
│   ├── Resume.pdf
│   ├── robots.txt
│   ├── sitemap.xml
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── achievements/ (5 images)
│   │   ├── project screenshots/ (ByteMarket, LLM, Lost&Found, RuinedLight, Hackathon)
│   │   ├── technology icons/ (HTML, CSS, JS, React, Python, Java, etc.)
│   │   ├── Me.png
│   │   └── Logo files
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Dropdown.jsx (mobile menu)
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Projects.jsx
│   ├── App.jsx (main app component)
│   ├── App.css (global styles)
│   ├── index.css (base styles)
│   └── main.jsx (entry point)
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── eslint.config.js
```

## Component Breakdown

### 1. App.jsx (Main Component)
- **Purpose**: Main application container
- **Features**:
  - Intersection Observer for active section tracking
  - Mouse cursor glow effect
  - Full-screen snap scrolling
  - Section structure: Home → About → Experience → Achievements → Projects → Contact → Footer
- **State Management**:
  - `activeSection`: Tracks which section is currently in view

### 2. Header.jsx
- **Purpose**: Navigation header with logo
- **Features**:
  - Fixed position navigation
  - Active section highlighting
  - Smooth scroll to sections
  - Resume download button
  - Responsive dropdown menu for mobile
- **Navigation Items**: About, Experience, Achievements, Projects, Contact Me, Resume

### 3. Home Section (in App.jsx)
- **Content**:
  - Name: "Danrave C. Keh"
  - Title: "FullStack Developer"
  - Bio: Information about specialization in web development, web ops, deployment, SEO, and startup solutions
  - Profile image display

### 4. About.jsx
- **Purpose**: Personal introduction section
- **Content**: 
  - Educational background (CIT-U IT Student)
  - Specialization details
  - Startup solutions work
  - Company contribution focus

### 5. Experience.jsx
- **Purpose**: Skills showcase with categorized cards
- **Design**: Glassmorphism cards with categorized skills
- **Categories**:
  1. **Frontend**: HTML, CSS, JavaScript, React, TypeScript
  2. **Backend**: Python, Java, C++, MySQL
  3. **Cloud & Infrastructure**: AWS, Oracle Cloud, Google Cloud, ServiceNow
  4. **Tools & Platforms**: GitHub, Vite
- **Features**:
  - Drag-and-drop functionality
  - Proficiency bars for each skill
  - Enhanced tooltips on hover
  - Gradient card backgrounds by category

### 6. Achievements.jsx
- **Purpose**: Showcase hackathon win and press features
- **Design**: 
  - Magazine-style grid layout
  - Hero image spans full width (3 columns, 2 rows)
  - 5 additional images in balanced grid below
  - Timeline element showing event milestones
- **Features**:
  - Lightbox modal for image viewing
  - Image gallery with navigation
  - Achievement badge
  - Link to Cebu Daily News article

### 7. Projects.jsx
- **Purpose**: Portfolio projects showcase
- **Design**: Gallery-style layout with featured project hero
- **Projects Featured**:
  1. **LLM – Locals Local Market** (Featured)
     - Community-driven directory
     - Technologies: React, Tailwind CSS, Spring Boot, Java, Google Cloud, Vercel, OAuth
  2. **E-commerce Platform: Bytemarket**
     - Full-stack e-commerce solution
     - Technologies: React, Tailwind CSS, Spring Boot, MySQL
  3. **Hackathon Winner: Retro Spaceship Shooter**
     - Game project (Winner)
     - Technologies: HTML, CSS, JavaScript
  4. **Lost & Found System in CIT-U**
     - Web-based solution
     - Technologies: Python, SQLite
  5. **Ruined Light! : A Text Turn-Based RPG Game**
     - Java-based game
     - Technologies: Java
- **Features**:
  - Featured project with hero image
  - Hover-to-reveal image previews
  - Project cards with gradient overlays
  - Category badges
  - Image count indicators
  - Smooth animations and transitions

### 8. Contact.jsx
- **Purpose**: Contact information and social links
- **Features**:
  - Email contact button
  - Social media links (GitHub, LinkedIn, Facebook)
  - Centered layout with call-to-action

### 9. Footer.jsx
- **Purpose**: Copyright information
- **Content**: Current year copyright notice

### 10. Dropdown.jsx
- **Purpose**: Mobile navigation menu
- **Features**:
  - Headless UI Menu component
  - Active section highlighting
  - Smooth animations
  - Download resume functionality

## Design System

### Color Scheme
- **Primary Background**: `#0A1741` (Dark blue)
- **Primary Accent**: Teal/Cyan (`#14b8a6`, `#06b6d4`)
- **Text Colors**:
  - White for headings
  - Slate variations for body text (slate-300, slate-400)
  - Teal-400 for accents and highlights

### Typography
- **Headings**: Poppins (Bold weights: 300-800)
- **Body**: Manrope (Regular weights: 300-800)
- **Base Font Size**: 16px

### Animations
- **Framer Motion**: Used throughout for page transitions and component animations
- **Custom Animations**:
  - Fade in/out
  - Scale transitions
  - Slide animations
  - Staggered children animations
- **Interactive Effects**:
  - Cursor glow (desktop only)
  - Hover lift effects
  - Image zoom on hover
  - Card tilt effects

### Layout Patterns
- **Snap Scrolling**: Full-screen sections with snap points
- **Glassmorphism**: Translucent cards with backdrop blur
- **Gradient Overlays**: Used in project cards and images
- **Responsive Grid**: Adaptive layouts for mobile, tablet, desktop

## Key Features

### 1. Intersection Observer
- Tracks active section for navigation highlighting
- Smooth scroll behavior
- Section-based navigation

### 2. Cursor Glow Effect
- Follows mouse movement (desktop only)
- Subtle glow overlay for visual interest

### 3. Image Lightbox
- Full-screen image viewing in Achievements section
- Navigation between images
- Keyboard-friendly

### 4. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)
- Adaptive navigation (desktop menu vs mobile dropdown)

### 5. SEO Optimization
- Meta tags in index.html
- Structured data (JSON-LD) for Person, WebSite, and Projects
- Semantic HTML structure
- Alt texts for images

## Styling Approach

### CSS Architecture
1. **Tailwind Utility Classes**: Primary styling method
2. **Custom CSS**: App.css for global styles and utilities
3. **Component Styles**: Inline styles and Tailwind classes

### Custom CSS Utilities (App.css)
- Glassmorphism effects
- Scrollbar hiding
- Line clamp utilities
- Smooth transitions
- Glow effects
- Loading skeletons
- Custom animations (fadeInUp, fadeInDown, scaleIn)

## Assets

### Images
- **Profile**: Me.png
- **Achievements**: 6 images (Hackathon event photos)
- **Projects**: Multiple screenshots per project
- **Technology Icons**: SVG icons for all technologies used

### Icons
- Custom logo SVG
- Technology brand icons (React, AWS, GitHub, etc.)

## Build & Development

### Scripts
```json
{
  "dev": "vite",              // Development server
  "build": "vite build",      // Production build
  "preview": "vite preview",   // Preview production build
  "lint": "eslint src..."      // Lint code
}
```

### Build Tools
- **Vite**: Fast build tool with HMR
- **PostCSS**: CSS processing
- **Autoprefixer**: Vendor prefix automation
- **ESLint**: Code linting

## Recent Updates

1. **Redesigned Experience Page**: 
   - Categorized skill cards
   - Proficiency indicators
   - Enhanced visual hierarchy

2. **Redesigned Achievements Page**:
   - Balanced grid layout
   - Timeline elements
   - Lightbox functionality

3. **Redesigned Projects Page**:
   - Gallery-style layout
   - Featured project hero section
   - Hover-to-reveal image previews

4. **Font Updates**:
   - Poppins for headings
   - Manrope for body text

5. **Bio Updates**:
   - Focus on web development specialization
   - Mention of web ops, deployment, SEO
   - Startup solutions emphasis
   - Company contribution focus

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox support required
- JavaScript ES6+ features

## Performance Considerations
- Lazy loading for images
- Code splitting via Vite
- Optimized animations with Framer Motion
- Font preloading for Google Fonts

## Future Enhancements (Potential)
- Project filtering/tagging
- Blog section
- Testimonials
- More interactive animations
- Dark/light mode toggle
- Multi-language support

