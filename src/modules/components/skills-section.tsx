"use client";

import {
  Column,
  Heading,
  Row,
  Text,
  SmartImage,
  InlineCode,
  Background,
} from "@/once-ui/components";
import { useState } from "react";

// Define the skill type with category
interface Skill {
  name: string;
  icon: string;
  url: string;
  category: string;
}

// Skills data organized by category
const allSkills: Skill[] = [
  // Frontend Development
  {
    name: "TypeScript",
    icon: "/images/logos/typescript.svg",
    url: "https://www.typescriptlang.org/docs/",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "/images/logos/next.svg",
    url: "https://nextjs.org/docs",
    category: "Frontend",
  },
  {
    name: "React.js",
    icon: "/images/logos/reactjs.svg",
    url: "https://react.dev/",
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwindcss.svg",
    url: "https://tailwindcss.com/docs",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "/images/logos/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    category: "Frontend",
  },
  {
    name: "Three.js",
    icon: "/images/logos/threejs.svg",
    url: "https://threejs.org/docs/",
    category: "Frontend",
  },

  // UI/UX & Design
  {
    name: "Figma",
    icon: "/images/logos/figma.svg",
    url: "https://help.figma.com/",
    category: "UI/UX & Design",
  },
  {
    name: "Shadcn",
    icon: "/images/logos/shadcn.svg",
    url: "https://ui.shadcn.com/",
    category: "UI/UX & Design",
  },
  {
    name: "Framer Motion",
    icon: "/images/logos/framer.svg",
    url: "https://www.framer.com/motion/introduction/",
    category: "UI/UX & Design",
  },
  {
    name: "MaterialUI",
    icon: "/images/logos/mui.svg",
    url: "https://mui.com/material-ui/getting-started/",
    category: "UI/UX & Design",
  },
  {
    name: "GSAP",
    icon: "/images/logos/gsap.svg",
    url: "https://greensock.com/docs/",
    category: "UI/UX & Design",
  },

  // Backend & Database
  {
    name: "DrizzleORM",
    icon: "/images/logos/drizzleorm.svg",
    url: "https://orm.drizzle.team/docs/overview",
    category: "Backend & Database",
  },
  {
    name: "tRPC",
    icon: "/images/logos/trpc.svg",
    url: "https://trpc.io/docs",
    category: "Backend & Database",
  },
  {
    name: "Prisma",
    icon: "/images/logos/prisma.svg",
    url: "https://www.prisma.io/docs",
    category: "Backend & Database",
  },
  {
    name: "Tanstack Query",
    icon: "/images/logos/tanstack.svg",
    url: "https://tanstack.com/query/latest/docs/react/overview",
    category: "Backend & Database",
  },

  // Mapping & Geospatial
  {
    name: "Mapbox",
    icon: "/images/logos/mapbox.svg",
    url: "https://www.mapbox.com/",
    category: "Mapping & Geospatial",
  },
  {
    name: "Leaflet",
    icon: "/images/logos/leaflet.svg",
    url: "https://leafletjs.com/reference.html",
    category: "Mapping & Geospatial",
  },
  {
    name: "Cesium",
    icon: "/images/logos/cesium.svg",
    url: "https://cesium.com/learn/cesiumjs-learn/",
    category: "Mapping & Geospatial",
  },
  {
    name: "GeoJSON",
    icon: "/images/logos/geo.svg",
    url: "https://geojson.org/",
    category: "Mapping & Geospatial",
  },
];

export function SkillsSection() {
  // Get unique categories
  const categories = [...new Set(allSkills.map((skill) => skill.category))];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Filter skills by active category
  const filteredSkills = allSkills.filter(
    (skill) => skill.category === activeCategory
  );

  // Handle skill click
  const handleSkillClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Column
      id="skills"
      fillWidth
      paddingX="24"
      gap="16"
      horizontal="center"
      position="relative"
      paddingY="40"
    >
      <Heading as="h2" variant="display-default-s" align="center">
        Skills
      </Heading>

      {/* Category Tabs */}
      <Row gap="8" horizontal="center" wrap paddingX="8">
        {categories.map((category) => (
          <InlineCode
            key={category}
            radius="l"
            fit
            paddingX="12"
            paddingY="4"
            onClick={() => setActiveCategory(category)}
            style={{
              cursor: "pointer",
              background:
                activeCategory === category
                  ? "var(--color-brand-solid-weak)"
                  : "var(--color-neutral-alpha-weak)",
            }}
          >
            <Text
              variant="body-default-xs"
              onBackground={
                activeCategory === category ? "brand-strong" : "neutral-medium"
              }
            >
              {category}
            </Text>
          </InlineCode>
        ))}
      </Row>

      {/* Skills Grid - More compact */}
      <Row
        gap="12"
        wrap
        horizontal="center"
        paddingX="12"
        paddingY="16"
        background="overlay"
        radius="l"
        border="neutral-alpha-weak"
      >
        {filteredSkills.map((skill) => (
          <Column
            key={skill.name}
            gap="4"
            horizontal="center"
            vertical="center"
            width={14}
            height={14}
            padding="8"
            radius="m"
            border={
              hoveredSkill === skill.name
                ? "brand-alpha-strong"
                : "neutral-alpha-weak"
            }
            onClick={() => handleSkillClick(skill.url)}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s ease-in-out",
              transform:
                hoveredSkill === skill.name ? "translateY(-3px)" : "none",
            }}
          >
            <Background
              position="absolute"
              radius="m"
              gradient={{
                display: true,
                opacity: 20,
                tilt: 135,
                height: 90,
                width: 90,
                x: 0,
                y: 0,
                colorStart: "brand-solid-weak",
                colorEnd: "accent-solid-weak",
              }}
            />
            <SmartImage
              src={skill.icon}
              alt={skill.name}
              width={8}
              height={8}
              unoptimized={true}
              objectFit="contain"
              // style={{ position: "relative", zIndex: 1 }}
            />
            <Text
              align="center"
              variant="body-default-xs"
              marginTop="8"
              style={{ position: "relative", zIndex: 1 }}
            >
              {skill.name}
            </Text>
          </Column>
        ))}
      </Row>
    </Column>
  );
}
