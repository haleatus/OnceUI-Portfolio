"use client";

import {
  Button,
  Column,
  Heading,
  Row,
  SmartImage,
  Text,
} from "@/once-ui/components";

export const AboutMeSection = () => {
  return (
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
          objectFit="contain"
        />
      </Row>
      <Column fillWidth gap="20" padding="32" position="relative">
        <Heading as="h4" variant="display-default-xs">
          Hello, I'm Rohit Shrestha
        </Heading>
        <Text>
          I'm a Frontend Developer from Kathmandu, Nepal, specializing in
          Next.js, React, and geospatial web technologies with experience
          creating innovative applications for trip planning, AI-assisted
          interviews, and HR management.
        </Text>
        <Text marginBottom="16">
          Recently completed my Bachelor's degree in Computer Science, I have
          professional experience as a Frontend Developer Intern at Going Genius
          Group, where I specialized in integrating geospatial technologies like
          Cesium and Leaflet into web applications.
        </Text>

        <Row gap="16" horizontal="start" marginTop="16">
          <Button
            href="https://github.com/haleatus"
            prefixIcon="github"
            label="GitHub"
            variant="tertiary"
            target="_blank"
          />
          <Button
            href="https://www.linkedin.com/in/ro-sth/"
            prefixIcon="linkedin"
            label="LinkedIn"
            variant="tertiary"
            target="_blank"
          />
          <Button
            id="downloadCV"
            prefixIcon="resume"
            target="_blank"
            label="Resume"
            href="cv/Rohit_Shrestha_CV.pdf"
            variant="tertiary"
            arrowIcon
          />
        </Row>
      </Column>
    </Row>
  );
};
