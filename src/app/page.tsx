"use client";

import { AboutMeSection } from "@/modules/components/about-me-section";
import { ContactSection } from "@/modules/components/contacts-section";
import { EducationSection } from "@/modules/components/education-section";
import { ExperienceSection } from "@/modules/components/experience-section";
import { SkillsSection } from "@/modules/components/skills-section";
import {
  Background,
  Button,
  Column,
  Fade,
  Heading,
  Icon,
  IconButton,
  InlineCode,
  Logo,
  Row,
  SmartImage,
  StyleOverlay,
  Text,
  ThemeSwitcher,
} from "@/once-ui/components";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";

export default function Home() {
  // Projects data
  const projects = [
    {
      title: "Xploverse Web Application",
      description:
        "A platform for simplifying long-distance trip planning and encouraging carpooling.",
      tech: "Next.js, TailwindCSS, TypeScript, Mapbox, Shadcn, AceternityUI",
      features: [
        "Built frontend architecture with modular UI",
        "Integrated Mapbox and OpenStreetMap for route planning",
        "Developed carpooling system to let users join public trips",
        "Implemented review and rating system for trip feedback",
      ],
      image: "/images/xploverse/landing-page.png",
    },
    {
      title: "AI Interview Agent/Helper",
      description:
        "An AI-powered interview preparation tool with real-time interaction and feedback.",
      tech: "Next.js, Tailwind, TypeScript, Shadcn, Gemini, VapiAI",
      features: [
        "Developed the user interface using TailwindCSS and Shadcn components",
        "Designed and built AI-driven interview simulator with real-time feedback",
        "Integrated Gemini and VapiAI for voice-based dynamic Q&A sessions",
        "Developed performance scoring and improvement suggestion system",
      ],
      image: "/images/AI-Agent.png",
    },
    {
      title: "Xploverse Mobile App",
      description:
        "A cross-platform mobile application to help users discover and engage with events.",
      tech: "Flutter, Firebase",
      features: [
        "Integrated Leaflet Maps for geolocation and custom markers",
        "Developed ticket booking system with QR code generation",
        "Implemented Firebase Authentication, Cloud Firestore, and Firebase Storage",
        "Created navigation-to-event feature with real-time directions",
      ],
      image: "/images/xploverse/landing-flutter.png",
    },
    {
      title: "HRPortal",
      description:
        "A human resource management system focused on employee performance evaluations.",
      tech: "Next.js, Tailwind, Tanstack Query, Axios, Zustand, TypeScript, ShadcnUI",
      features: [
        "Developed multi-tiered employee review system",
        "Built comparative analysis engine for calculating performance scores",
        "Managed state with Zustand and TanStack Query for efficient data fetching",
        "Integrated Axios for handling API communications",
      ],
      image: "/images/hr-portal/HR-Portal-light.png",
    },
  ];

  return (
    <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
      <ScrollToTop>
        <IconButton variant="secondary" icon="chevronUp" />
      </ScrollToTop>
      <Fade
        zIndex={3}
        pattern={{
          display: true,
          size: "2",
        }}
        position="fixed"
        top="0"
        left="0"
        to="bottom"
        height={5}
        fillWidth
        blur={0.25}
      />
      <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Logo
            size="m"
            iconSrc="/images/og/logo-transparent.svg"
            wordmarkText="Rohit Shrestha"
            href="https://once-ui-portfolio-sigma.vercel.app/"
          />

          <Row gap="12" hide="s">
            <Button
              href="#about"
              size="s"
              label="About"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="#projects"
              size="s"
              label="Projects"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="#contact"
              size="s"
              label="Contact"
              weight="default"
              variant="tertiary"
            />
            <Row position="fixed" top="20" right="20">
              <ThemeSwitcher marginRight="12" />
              <StyleOverlay
                position="fixed"
                top="8"
                right="8"
                style={{ height: "calc(100vh - var(--static-space-16))" }}
              />
            </Row>
          </Row>
          <Row gap="16" show="s" horizontal="center" paddingRight="24">
            <IconButton
              href="#about"
              icon="user"
              variant="tertiary"
              tooltip="About"
            />
            <IconButton
              href="#projects"
              icon="layout"
              variant="tertiary"
              tooltip="Projects"
            />
            <IconButton
              href="#contact"
              icon="mail"
              variant="tertiary"
              tooltip="Contact"
            />
            <Row position="fixed" top="20" right="20">
              <StyleOverlay
                position="fixed"
                top="8"
                right="8"
                style={{ height: "calc(100vh - var(--static-space-16))" }}
              />
            </Row>
          </Row>
        </Row>
      </Row>
      <Column
        overflow="hidden"
        as="main"
        maxWidth="l"
        position="relative"
        radius="xl"
        horizontal="center"
        border="neutral-alpha-weak"
        fillWidth
      >
        {/* HERO SECTION */}
        <Column
          fillWidth
          horizontal="center"
          gap="48"
          radius="xl"
          paddingTop="80"
          position="relative"
        >
          <Background
            mask={{
              x: 0,
              y: 48,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "neutral-alpha-medium",
              height: "0.25rem",
            }}
          />
          <Background
            mask={{
              x: 80,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              tilt: -35,
              height: 50,
              width: 75,
              x: 100,
              y: 40,
              colorStart: "accent-solid-medium",
              colorEnd: "static-transparent",
            }}
          />
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 100,
            }}
            position="absolute"
            gradient={{
              display: true,
              opacity: 100,
              tilt: -35,
              height: 20,
              width: 120,
              x: 120,
              y: 35,
              colorStart: "brand-solid-strong",
              colorEnd: "static-transparent",
            }}
          />
          <Column
            fillWidth
            horizontal="center"
            vertical="center"
            gap="32"
            padding="32"
            position="relative"
            height="s"
          >
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              <Text>Frontend Developer</Text>
            </InlineCode>
            <Heading
              wrap="stable"
              variant="display-strong-xl"
              align="center"
              marginBottom="16"
            >
              ROHIT SHRESTHA
            </Heading>
          </Column>

          {/* ABOUT ME SECTION */}
          <Column
            id="about"
            fillWidth
            paddingX="32"
            gap="12"
            horizontal="center"
            position="relative"
            paddingY="64"
          >
            <Heading as="h2" variant="display-default-s" align="center">
              About Me
            </Heading>
            <Text align="center" onBackground="neutral-weak">
              Frontend Developer specializing in modern web technologies
            </Text>
            <AboutMeSection />
            <EducationSection />
            <ExperienceSection />
          </Column>

          {/* SKILLS SECTION */}
          <SkillsSection />

          {/* PROJECTS SECTION */}
          <Column
            id="projects"
            fillWidth
            paddingX="32"
            gap="12"
            horizontal="center"
            position="relative"
            paddingY="64"
            marginTop="32"
          >
            <Heading as="h2" variant="display-default-s">
              My Projects
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Featured work that showcases my skills and experience
            </Text>

            <Column gap="48" fillWidth>
              {projects.map((project, index) => (
                <Row
                  key={index}
                  marginY="16"
                  background="overlay"
                  fillWidth
                  radius="xl"
                  border="neutral-alpha-weak"
                  overflow="hidden"
                  mobileDirection="column"
                  direction={index % 2 === 0 ? "row" : "row-reverse"}
                >
                  <Row fill hide="m">
                    <SmartImage
                      src={project.image || "/images/placeholder.jpg"}
                      alt={project.title}
                      sizes="560px"
                      unoptimized={true}
                      priority={index < 2} // Prioritize loading first two images
                      quality={100}
                      objectFit="cover"
                    />
                  </Row>
                  <Column fillWidth gap="16" padding="32" position="relative">
                    <Heading as="h3" variant="display-default-s">
                      {project.title}
                    </Heading>
                    <Text onBackground="neutral-medium" marginBottom="8">
                      {project.description}
                    </Text>
                    <InlineCode
                      radius="m"
                      fit
                      paddingX="12"
                      paddingY="4"
                      marginBottom="16"
                    >
                      <Text variant="body-default-s">{project.tech}</Text>
                    </InlineCode>
                    <Column gap="8" marginBottom="16">
                      {project.features.map((feature, idx) => (
                        <Row key={idx} gap="8" vertical="center">
                          <Icon
                            name="check"
                            size="s"
                            onBackground="brand-medium"
                          />
                          <Text variant="body-default-s">{feature}</Text>
                        </Row>
                      ))}
                    </Column>
                    <Row gap="12">
                      <Button
                        label="Live Demo"
                        variant="secondary"
                        prefixIcon="globe"
                        size="s"
                        href="#"
                        target="_blank"
                      />
                      <Button
                        label="Source Code"
                        variant="tertiary"
                        prefixIcon="github"
                        size="s"
                        href="#"
                        target="_blank"
                      />
                    </Row>
                  </Column>
                </Row>
              ))}
            </Column>
          </Column>

          {/* CONTACT SECTION */}
          <ContactSection />
        </Column>

        {/* FOOTER */}
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="40"
          paddingBottom="40"
        >
          <Background
            borderTop="brand-alpha-strong"
            mask={{
              x: 50,
              y: 0,
            }}
            position="absolute"
            grid={{
              display: true,
              width: "0.25rem",
              color: "brand-alpha-strong",
              height: "0.25rem",
            }}
          />
          <Column
            position="relative"
            textVariant="body-default-xs"
            onBackground="neutral-medium"
            horizontal="center"
            align="center"
            fillWidth
            gap="16"
          >
            <Text size="m">© {new Date().getFullYear()} / Rohit Shrestha</Text>
          </Column>
        </Row>
      </Column>
    </Column>
  );
}
