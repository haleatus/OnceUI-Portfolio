"use client";

import { useState, type FC } from "react";
import { Card, Column, Heading, Row } from "@/once-ui/components";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Define the skill type
interface Skill {
  name: string;
  icon: string;
  url: string;
}

// -- Skills Data --
const allSkills: Skill[] = [
  // Frontend Development
  {
    name: "TypeScript",
    icon: "/images/logos/typescript.svg",
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    name: "Next.js",
    icon: "/images/logos/nextjs.svg",
    url: "https://nextjs.org/docs",
  },
  {
    name: "React.js",
    icon: "/images/logos/react.svg",
    url: "https://react.dev/",
  },
  {
    name: "TailwindCSS",
    icon: "/images/logos/tailwind.svg",
    url: "https://tailwindcss.com/docs",
  },
  {
    name: "JavaScript",
    icon: "/images/logos/javascript.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Three.js",
    icon: "/images/logos/threejs.svg",
    url: "https://threejs.org/docs/",
  },

  // UI/UX & Design
  {
    name: "Figma",
    icon: "/images/logos/figma.svg",
    url: "https://help.figma.com/",
  },
  {
    name: "Shadcn",
    icon: "/images/logos/shadcn.svg",
    url: "https://ui.shadcn.com/",
  },
  {
    name: "Framer Motion",
    icon: "/images/logos/framer.svg",
    url: "https://www.framer.com/motion/introduction/",
  },
  {
    name: "MaterialUI",
    icon: "/images/logos/mui.svg",
    url: "https://mui.com/material-ui/getting-started/",
  },
  {
    name: "GSAP",
    icon: "/images/logos/gsap.svg",
    url: "https://greensock.com/docs/",
  },

  // Backend & Database
  {
    name: "DrizzleORM",
    icon: "/images/logos/drizzle.svg",
    url: "https://orm.drizzle.team/docs/overview",
  },
  { name: "tRPC", icon: "/images/logos/trpc.svg", url: "https://trpc.io/docs" },
  {
    name: "Prisma",
    icon: "/images/logos/prisma.svg",
    url: "https://www.prisma.io/docs",
  },
  {
    name: "Tanstack Query",
    icon: "/images/logos/tanstack.svg",
    url: "https://tanstack.com/query/latest/docs/react/overview",
  },

  // Mapping & Geospatial
  {
    name: "Mapbox",
    icon: "/images/logos/mapbox.svg",
    url: "https://docs.mapbox.com/",
  },
  {
    name: "Leaflet",
    icon: "/images/logos/leaflet.svg",
    url: "https://leafletjs.com/reference.html",
  },
  {
    name: "Cesium",
    icon: "/images/logos/cesium.svg",
    url: "https://cesium.com/learn/cesiumjs-learn/",
  },
  {
    name: "GeoJSON",
    icon: "/images/logos/geojson.svg",
    url: "https://geojson.org/",
  },
];

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
            width: "60px",
            height: "60px",
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
            width={30}
            height={30}
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

export const SkillsSection: FC = () => {
  return (
    <Column
      id="skills"
      fillWidth
      paddingX="24"
      paddingY="24"
      gap="8"
      horizontal="center"
      position="relative"
    >
      {/* Section Heading */}
      <Heading as="h2" variant="display-default-s">
        Skills & Expertise
      </Heading>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Column
          background="overlay"
          radius="l"
          border="neutral-alpha-weak"
          padding="24"
          maxWidth={900}
          style={{
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Row gap="8" wrap fillWidth horizontal="center">
            {allSkills.map((skill) => (
              <SkillLogo key={skill.name} skill={skill} />
            ))}
          </Row>
        </Column>
      </motion.div>
    </Column>
  );
};
