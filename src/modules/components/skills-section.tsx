"use client";

import { Button, Card, Column, Heading, Row } from "@/once-ui/components";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, type FC } from "react";

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
    icon: "/images/logos/nextjs.svg",
    url: "https://nextjs.org/docs",
    category: "Frontend",
  },
  {
    name: "React.js",
    icon: "/images/logos/react.svg",
    url: "https://react.dev/",
    category: "Frontend",
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.svg",
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
    icon: "/images/logos/drizzle.svg",
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
    url: "https://docs.mapbox.com/",
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
    icon: "/images/logos/geojson.svg",
    url: "https://geojson.org/",
    category: "Mapping & Geospatial",
  },
];

// Get unique categories
const categories = Array.from(
  new Set(allSkills.map((skill) => skill.category))
);

// Skill logo component with hover effect
const SkillLogo: FC<{ skill: Skill }> = ({ skill }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        onClick={() => window.open(skill.url, "_blank", "noopener noreferrer")}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{ cursor: "pointer" }}
        className="rounded-2xl"
      >
        <Card
          noHoverBackground
          style={{
            width: "75px", // Increased from 60px
            height: "75px", // Increased from 60px
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "20px",
            padding: "0",
            transition: "all 0.3s ease",
          }}
        >
          <Image
            src={skill.icon || "/placeholder.svg"}
            alt={skill.name}
            width={40} // Increased from 30
            height={40} // Increased from 30
            style={{ opacity: 0.9 }}
          />
        </Card>
      </motion.div>

      {/* Tooltip positioned absolutely relative to its parent */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "absolute",
              bottom: "100%", // Position above the icon
              left: "50%",
              transform: "translateX(-50%)",
              marginBottom: "8px", // Space between tooltip and icon
              zIndex: 1000,
              whiteSpace: "nowrap",
              pointerEvents: "none", // Prevents tooltip from interfering with hover
            }}
          >
            <div
              style={{
                background: "rgba(0, 0, 0, 0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "4px",
                padding: "4px 8px",
                color: "white",
                fontSize: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
              }}
            >
              {skill.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Category section component
const SkillCategory: FC<{ category: string }> = ({ category }) => {
  const categorySkills = allSkills.filter(
    (skill) => skill.category === category
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Column gap="4" fillWidth align="center">
        <Card
          background="overlay" // Changed from brand-strong
          radius="l"
          border="neutral-alpha-weak"
          padding="16"
          style={{
            backdropFilter: "blur(10px)",
          }}
        >
          <Row gap="8" wrap horizontal="start" fillWidth>
            {categorySkills.map((skill) => (
              <SkillLogo key={skill.name} skill={skill} />
            ))}
          </Row>
        </Card>
      </Column>
    </motion.div>
  );
};

export const SkillsSection: FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>("Frontend");

  const filteredCategories = activeFilter
    ? categories.filter((cat) => cat === activeFilter)
    : categories;

  return (
    <Column
      id="skills"
      fillWidth
      paddingX="24"
      paddingY="48"
      gap="16"
      horizontal="center"
      position="relative"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Heading as="h2" variant="display-default-s">
          Technical Skills
        </Heading>
      </motion.div>

      {/* Category filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Row gap="4" wrap horizontal="center">
          {categories.map((category) => (
            <Button
              key={category}
              size="s"
              label={category}
              weight="default"
              variant="secondary"
              onClick={() =>
                setActiveFilter(category === activeFilter ? null : category)
              }
            />
          ))}
        </Row>
      </motion.div>

      {/* Skills Categories */}
      <Column gap="16" maxWidth={900} fillWidth>
        {filteredCategories.map((category) => (
          <SkillCategory key={category} category={category} />
        ))}
      </Column>
    </Column>
  );
};
