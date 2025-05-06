# 🚀 Rohit's Portfolio

A sleek, modern, and responsive portfolio website showcasing my professional journey, projects, and skills. Built with [Next.js](https://nextjs.org/) and styled using the elegant [OnceUI Design System](https://onceui.dev/).

<div align="center">
  <img src="public\preview.png" alt="Portfolio Preview" />
</div>

## ✨ Key Features

- ⚡ **Blazing Fast**: Built with Next.js for optimized performance and SSR
- 🎨 **Beautiful UI**: Styled using OnceUI component library for consistent design
- 🌙 **Theme Toggle**: Seamless light/dark mode transitions
- 📱 **Responsive Design**: Perfect viewing experience across all device sizes
- 💌 **Contact Integration**: Email form powered by EmailJS - no backend required
- 🔗 **Social Connectivity**: Integrated profile links (GitHub, LinkedIn, Instagram)
- ♿ **Accessibility**: WCAG compliant components and keyboard navigation
- 🌐 **SEO Optimized**: Built-in metadata management for better discoverability

## 🛠️ Technology Stack

| Technology                                                           | Purpose                                         |
| -------------------------------------------------------------------- | ----------------------------------------------- |
| **[Next.js](https://nextjs.org/)**                                   | React framework with SSR, file-based routing    |
| **[TypeScript](https://www.typescriptlang.org/)**                    | Type safety and enhanced developer experience   |
| **[OnceUI](https://onceui.dev/)**                                    | Beautiful accessible UI component library       |
| **[Bun](https://bun.sh/)**                                           | Ultra-fast JavaScript runtime & package manager |
| **[EmailJS](https://www.emailjs.com/)**                              | Client-side email sending without a backend     |
| **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)** | Code quality and consistent formatting          |

## 📂 Project Structure

```
/
├── src/
│   ├── app/          # App directory (Next.js 13+ App Router)
│   │   ├── layout.tsx    # Root layout component
│   │   ├── page.tsx      # Home page component
│   │   └── resources/    # Static resources
│   │       └── favicon.ico
│   │
│   ├── modules/
│   │   └── components/   # Page section components
│   │       ├── about-me-section.tsx
│   │       ├── contacts-section.tsx
│   │       ├── education-section.tsx
│   │       ├── experience-section.tsx
│   │       └── skills-section.tsx
│   │
│   └── once-ui/          # OnceUI design system integration
│       ├── components/   # Custom UI components
│       ├── hooks/        # React hooks
│       ├── modules/      # Functional modules
│       ├── styles/       # Styling utilities
│       ├── tokens/       # Design tokens
│       ├── icons.ts      # Icon definitions
│       ├── interfaces.ts # TypeScript interfaces
│       └── types.ts      # TypeScript type definitions
│
├── .env                  # Environment variables
├── .env.example          # Example environment variables
└── .eslintrc.json        # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (Recommended)
- Node.js 18+ (Alternative)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/haleatus/OnceUI-Portfolio.git
cd OnceUI-Portfolio
```

2. **Install dependencies with Bun** (Recommended)

```bash
bun install
```

Or with npm:

```bash
npm install
```

3. **Configure environment variables**

Create a `.env.local` file in the root directory:

```ini
# EmailJS Configuration
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_PUBLIC_KEY=your_public_key

# Optional Analytics
NEXT_PUBLIC_GA_TRACKING_ID=UA-XXXXXXXXX-X
```

4. **Start the development server**

```bash
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio in the browser.

## 📦 Build and Production

### Create a production build

```bash
bun run build
```

### Run in production mode

```bash
bun start
```

## 🌐 Deployment Options

This portfolio can be deployed to various platforms:

- **[Vercel](https://vercel.com/)** (Recommended for Next.js):

  ```bash
  vercel deploy
  ```

- **[Netlify](https://www.netlify.com/)**:
  Connect your GitHub repository in the Netlify dashboard.

- **[Cloudflare Pages](https://pages.cloudflare.com/)**:
  Connect your GitHub repository in the Cloudflare dashboard.

## 🧩 Customization

### Personalizing Content

1. Edit personal information in `src/config/personal.ts`
2. Update projects in `src/config/projects.ts`
3. Modify skills list in `src/config/skills.ts`

### Theme Customization

1. Adjust theme variables in `src/styles/theme.ts`
2. Modify global styles in `src/styles/globals.css`

## 📬 Contact & Support

Feel free to reach out through any of these channels:

- **Email**: [shrestha.rohit655@gmail.com](mailto:shrestha.rohit655@gmail.com)
- **GitHub Issues**: [Create an issue](https://github.com/haleatus/OnceUI-Portfolio/issues)
- **Location**: Kathmandu, Nepal 🇳🇵

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <sub>Built with ❤️ by Rohit Shrestha</sub>
</div>
