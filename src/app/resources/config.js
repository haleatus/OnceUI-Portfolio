const baseURL = "https://once-ui-portfolio-sigma.vercel.app/";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: false,
    x: 100,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 90,
    x: 100,
    y: 60,
    width: 70,
    height: 50,
    tilt: -40,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 20,
    size: "2",
    color: "brand-on-background-weak",
  },
  grid: {
    display: true,
    opacity: 100,
    color: "accent-alpha-weak",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Rohit Shrestha",
    description: "A portfolio of Rohit Shrestha (Frontend developer) made using OnceUI",
    image: "/og/logo.svg",
    canonical: "/",
    robots: "index,follow",
    alternates: [
      { href: "/", hrefLang: "en" },
    ],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Person",
  name: "Rohit Shrestha",
  description: meta.home.description,
  email: "shrestha.rohit655@gmail.com",
};

// social links
const social = {
  github: "https://github.com/haleatus",
  linkedin: "https://www.linkedin.com/in/ro-sth/",
  discord: "https://discord.com/invite/NTdNrUeqEJ",
  instagram: "https://www.instagram.com/ro_.sth/",
};

export { baseURL, font, style, meta, schema, social, effects };
