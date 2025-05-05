"use client";

import { Background, Column, Heading, Row, Text } from "@/once-ui/components";
import Image from "next/image";

// -- Skills Data --
const allSkills = [
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

// -- Component --
export const SkillsSection = () => {
  return (
    <Column
      id="skills"
      fillWidth
      paddingX="24"
      paddingY="16"
      gap="4"
      horizontal="center"
      position="relative"
    >
      {/* Section Heading */}
      <Heading as="h2" variant="display-default-s">
        Skills & Expertise
      </Heading>

      {/* Skills Card Container */}
      <Column
        background="overlay"
        radius="m"
        border="neutral-alpha-weak"
        padding="16"
        maxWidth={800}
      >
        <Row gap="4" wrap fillWidth horizontal="center">
          {allSkills.map((skill) => (
            <Column
              key={skill.name}
              horizontal="center"
              gap="2"
              padding="4"
              radius="m"
              width="16"
              style={{ cursor: "pointer" }}
              background="neutral-alpha-weak"
              onClick={() =>
                window.open(skill.url, "_blank", "noopener noreferrer")
              }
            >
              <Image src={skill.icon} alt={skill.name} width={30} height={30} />
              <Text
                variant="body-default-xs"
                align="center"
                style={{
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  wordBreak: "break-word",
                }}
              >
                {skill.name}
              </Text>
            </Column>
          ))}
        </Row>
      </Column>
    </Column>
  );
};
