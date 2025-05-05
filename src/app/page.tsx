"use client";

import type React from "react";
import { useState } from "react";

import {
  Avatar,
  Background,
  Button,
  Card,
  Column,
  CompareImage,
  DateRangePicker,
  Dialog,
  Fade,
  Feedback,
  Heading,
  HoloFx,
  Icon,
  IconButton,
  InlineCode,
  Input,
  Line,
  Logo,
  PasswordInput,
  Row,
  SegmentedControl,
  Select,
  SmartImage,
  SmartLink,
  StatusIndicator,
  StyleOverlay,
  Switch,
  TagInput,
  Text,
  Textarea,
  ThemeSwitcher,
  TiltFx,
  useToast,
  type DateRange,
} from "@/once-ui/components";
import { ScrollToTop } from "@/once-ui/components/ScrollToTop";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedRange, setSelectedRange] = useState<DateRange>();
  const [isFirstDialogOpen, setIsFirstDialogOpen] = useState(false);
  const [isSecondDialogOpen, setIsSecondDialogOpen] = useState(false);
  const [firstDialogHeight, setFirstDialogHeight] = useState<number>();
  const { addToast } = useToast();
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tags, setTags] = useState<string[]>([
    "UX / UI",
    "Design systems",
    "AI / ML",
  ]);
  const [twoFA, setTwoFA] = useState(false);

  const handleSelect = (value: string) => {
    console.log("Selected option:", value);
    setSelectedValue(value);
  };

  const links = [
    {
      href: "https://once-ui.com/docs/theming",
      title: "Themes",
      description: "Style your app in minutes",
    },
    {
      href: "https://once-ui.com/docs/flexComponent",
      title: "Layout",
      description: "Build responsive layouts",
    },
    {
      href: "https://once-ui.com/docs/typography",
      title: "Typography",
      description: "Scale text automatically",
    },
  ];

  // Skills data organized by category
  const skills = [
    {
      category: "Frontend Development",
      items: [
        "TypeScript",
        "Next.js",
        "React.js",
        "TailwindCSS",
        "JavaScript",
        "Three.js",
        "GSAP",
        "Flutter",
      ],
    },
    {
      category: "Backend & Database",
      items: ["DrizzleORM", "tRPC", "Prisma", "Tanstack Query"],
    },
    {
      category: "UI/UX & Design",
      items: [
        "Figma",
        "Shadcn",
        "AceternityUI",
        "Framer Motion",
        "MaterialUI",
        "Recharts",
      ],
    },
    {
      category: "Mapping & Geospatial",
      items: [
        "Cesium",
        "Leaflet",
        "Mapbox",
        "OSM",
        "GeoJSON",
        "GPX",
        "GoogleMaps",
      ],
    },
    {
      category: "Dev Tools & Methodologies",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Notion",
        "Agile",
        "Scrum",
        "Docker",
      ],
    },
  ];

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
      image: "/images/project2.jpg",
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
      image: "/images/project3.jpg",
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
      image: "/images/project4.jpg",
    },
  ];

  const validateIntro = (value: React.ReactNode) => {
    if (typeof value === "string" && value.length < 10) {
      return (
        <Row horizontal="center" marginBottom="12" gap="8">
          <Icon name="errorCircle" />
          Intro must be at least 10 characters long.
        </Row>
      );
    }
    return null;
  };

  const validateLogin = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
      return "Email and / or password is invalid.";
    }
    return null;
  };

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
            size="s"
            icon={false}
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
            gap="32"
            padding="32"
            position="relative"
          >
            <InlineCode radius="xl" shadow="m" fit paddingX="16" paddingY="8">
              <Text>Frontend Developer from Nepal</Text>
            </InlineCode>
            <Heading
              wrap="balance"
              variant="display-strong-xl"
              align="center"
              marginBottom="16"
            >
              ROHIT SHRESTHA
            </Heading>
            <Button
              id="downloadCV"
              target="_blank"
              label="Download CV"
              href="cv/Rohit_Shrestha_CV.pdf"
              variant="secondary"
              arrowIcon
            />
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
            <Heading as="h2" variant="display-default-m">
              About Me
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              Frontend Developer specializing in modern web technologies
            </Text>

            <Row
              marginY="32"
              background="overlay"
              fillWidth
              radius="xl"
              border="neutral-alpha-weak"
              overflow="hidden"
              mobileDirection="column"
            >
              <Row fill hide="m">
                <SmartImage
                  src="/images/my-image.png"
                  alt="Rohit Shrestha"
                  sizes="560px"
                  quality={100}
                  objectFit="cover"
                />
              </Row>
              <Column fillWidth gap="20" padding="32" position="relative">
                <Heading as="h3" variant="display-default-s">
                  Hello, I'm Rohit
                </Heading>
                <Text marginBottom="16">
                  I'm a Frontend Developer from Kathmandu, Nepal, specializing
                  in Next.js, React, and geospatial web technologies with
                  experience creating innovative applications for trip planning,
                  AI-assisted interviews, and HR management.
                </Text>
                <Text marginBottom="16">
                  Currently completing my Bachelor's degree in Computer Science
                  (expected 2025), I have professional experience as a Frontend
                  Developer Intern at Going Genius Group, where I specialized in
                  integrating geospatial technologies like Cesium and Leaflet
                  into web applications.
                </Text>
                <Text marginBottom="16">
                  My technical skills include TypeScript, Next.js, React.js,
                  TailwindCSS, GSAP, JavaScript, Three.js, DrizzleORM, tRPC, and
                  various UI component libraries like Shadcn and AceternityUI.
                  I'm passionate about creating intuitive and visually appealing
                  user interfaces that deliver exceptional user experiences.
                </Text>

                <Row gap="16" horizontal="start" marginTop="16">
                  <Button
                    href="https://github.com/RohitSth"
                    prefixIcon="github"
                    label="GitHub"
                    variant="tertiary"
                    target="_blank"
                  />
                  <Button
                    href="https://www.linkedin.com/in/rohit-shrestha/"
                    prefixIcon="linkedin"
                    label="LinkedIn"
                    variant="tertiary"
                    target="_blank"
                  />
                </Row>
              </Column>
            </Row>
          </Column>

          {/* SKILLS SECTION */}
          <Column
            id="skills"
            fillWidth
            paddingX="32"
            gap="12"
            horizontal="center"
            position="relative"
            paddingY="64"
            marginTop="32"
          >
            <Background
              mask={{
                x: 0,
                y: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                width: "0.25rem",
                color: "accent-alpha-strong",
                height: "0.25rem",
              }}
            />
            <Heading as="h2" variant="display-default-m">
              Skills & Expertise
            </Heading>
            <Text marginBottom="32" align="center" onBackground="neutral-weak">
              A comprehensive toolkit of technologies I work with
            </Text>

            <Column gap="24" fillWidth>
              {skills.map((skillGroup, index) => (
                <Column
                  key={index}
                  background="overlay"
                  fillWidth
                  radius="xl"
                  border="neutral-alpha-weak"
                  padding="24"
                  gap="12"
                >
                  <Heading as="h3" variant="display-default-xs">
                    {skillGroup.category}
                  </Heading>
                  <Row gap="8" wrap fillWidth>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <InlineCode
                        key={skillIndex}
                        radius="m"
                        fit
                        paddingX="12"
                        paddingY="8"
                        margin="4"
                      >
                        <Text variant="body-default-s">{skill}</Text>
                      </InlineCode>
                    ))}
                  </Row>
                </Column>
              ))}
            </Column>
          </Column>

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
            <Background
              mask={{
                x: 0,
                y: 100,
              }}
              position="absolute"
              grid={{
                display: true,
                width: "0.25rem",
                color: "brand-alpha-strong",
                height: "0.25rem",
              }}
            />
            <Heading as="h2" variant="display-default-m">
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
        </Column>

        {/* CONTACT SECTION */}
        <Column
          id="contact"
          fillWidth
          paddingX="32"
          gap="12"
          horizontal="center"
          position="relative"
          paddingY="64"
          marginTop="32"
        >
          <Background
            mask={{
              x: 100,
              y: 0,
              radius: 75,
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
          <Heading as="h2" variant="display-default-m">
            Get In Touch
          </Heading>
          <Text marginBottom="32" align="center" onBackground="neutral-weak">
            Feel free to reach out for opportunities or just to say hello
          </Text>

          <Row
            marginY="32"
            background="overlay"
            fillWidth
            maxWidth="l"
            radius="xl"
            border="neutral-alpha-weak"
            overflow="hidden"
          >
            <Column
              fillWidth
              gap="20"
              padding="32"
              position="relative"
              horizontal="center"
            >
              <Row
                gap="12"
                vertical="center"
                marginBottom="16"
                wrap={true}
                horizontal="center"
              >
                <Icon name="mail" size="m" onBackground="brand-medium" />
                <Text variant="body-strong-m">shrestha.rohit655@gmail.com</Text>
              </Row>
              <Row
                gap="12"
                vertical="center"
                marginBottom="16"
                wrap={true}
                horizontal="center"
              >
                <Icon name="phone" size="m" onBackground="brand-medium" />
                <Text variant="body-strong-m">+977 9840883711</Text>
              </Row>
              <Row
                gap="12"
                vertical="center"
                marginBottom="24"
                wrap={true}
                horizontal="center"
              >
                <Icon name="mapPin" size="m" onBackground="brand-medium" />
                <Text variant="body-strong-m">Kathmandu, Nepal</Text>
              </Row>

              <Row gap="16" horizontal="center" marginTop="16">
                <IconButton
                  href="https://github.com/haleatus"
                  icon="github"
                  variant="secondary"
                  target="_blank"
                  tooltip="GitHub"
                />
                <IconButton
                  href="https://www.linkedin.com/in/ro-sth/"
                  icon="linkedin"
                  variant="secondary"
                  target="_blank"
                  tooltip="LinkedIn"
                />
                <IconButton
                  href="mailto:shrestha.rohit655@gmail.com"
                  icon="mail"
                  variant="secondary"
                  tooltip="Email"
                />
              </Row>
            </Column>
          </Row>
        </Column>

        {/* FOOTER */}
        <Row
          position="relative"
          as="footer"
          fillWidth
          paddingX="l"
          paddingTop="64"
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

      <Dialog
        isOpen={isFirstDialogOpen}
        onClose={() => setIsFirstDialogOpen(false)}
        title="Account details"
        description="Manage your security settings and password."
        base={isSecondDialogOpen}
        onHeightChange={(height) => setFirstDialogHeight(height)}
        footer={
          <Button
            variant="secondary"
            onClick={() => setIsFirstDialogOpen(false)}
          >
            Close
          </Button>
        }
      >
        <Column paddingTop="24" fillWidth gap="24">
          <Switch
            reverse
            isChecked={twoFA}
            onToggle={() => setTwoFA(!twoFA)}
            label="2FA"
            description="Enable two factor authentication"
          />
          <Button onClick={() => setIsSecondDialogOpen(true)}>
            Change password
          </Button>
        </Column>
      </Dialog>
      <Dialog
        isOpen={isSecondDialogOpen}
        onClose={() => setIsSecondDialogOpen(false)}
        title="Change password"
        stack
        description="Choose a new password for your account."
        minHeight={firstDialogHeight}
        footer={
          <>
            <Button
              variant="secondary"
              onClick={() => setIsSecondDialogOpen(false)}
            >
              Close
            </Button>
            <Button onClick={() => setIsSecondDialogOpen(false)}>Save</Button>
          </>
        }
      >
        <PasswordInput id="resetPassword" label="New password" />
      </Dialog>
    </Column>
  );
}
