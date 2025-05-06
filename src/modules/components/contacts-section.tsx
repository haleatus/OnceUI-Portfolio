"use client";

import {
  Column,
  Heading,
  Icon,
  IconButton,
  Row,
  Text,
} from "@/once-ui/components";

export const ContactSection = () => {
  return (
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
      <Heading as="h1" weight="strong">
        Get In Touch
      </Heading>
      <Text marginBottom="32" align="center" onBackground="neutral-weak">
        Feel free to reach out for opportunities or just to say hello
      </Text>

      <Row
        background="overlay"
        fillWidth
        maxWidth="l"
        radius="xl"
        border="neutral-alpha-weak"
        overflow="hidden"
        mobileDirection="column"
      >
        {/* Contact Information */}
        <Column fill gap="20" padding="32" position="relative" align="center">
          <Heading as="h3" variant="display-default-s" marginBottom="16">
            Contact Information
          </Heading>

          <Row gap="12" vertical="center" horizontal="center" marginBottom="16">
            <Column background="brand-alpha-weak" padding="12" radius="full">
              <Icon name="mail" size="m" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Email
              </Text>
              <Text variant="body-strong-s">
                <a
                  href="mailto:shrestha.rohit655@gmail.com?subject=Contact&body=Hi Rohit,"
                  target="_self"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  shrestha.rohit655@gmail.com
                </a>
              </Text>
            </Column>
          </Row>

          <Row gap="12" vertical="center" horizontal="center" marginBottom="16">
            <Column background="brand-alpha-weak" padding="12" radius="full">
              <Icon name="phone" size="s" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Phone
              </Text>
              <Text variant="body-strong-s">
                <a
                  href="tel:+9779840883711"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  +977 9840883711
                </a>
              </Text>
            </Column>
          </Row>

          <Row gap="12" vertical="center" horizontal="center" marginBottom="24">
            <Column background="brand-alpha-weak" padding="12" radius="full">
              <Icon name="mapPin" size="m" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Location
              </Text>
              <Text variant="body-strong-s">Kathmandu, Nepal</Text>
            </Column>
          </Row>

          <Row gap="4" vertical="center" horizontal="end">
            <IconButton
              href="https://github.com/haleatus"
              icon="github"
              variant="ghost"
              target="_blank"
              tooltip="GitHub"
            />
            <IconButton
              href="https://www.linkedin.com/in/ro-sth/"
              icon="linkedin"
              variant="ghost"
              target="_blank"
              tooltip="LinkedIn"
            />
            <IconButton
              href="https://www.instagram.com/ro_.sth/"
              icon="instagram"
              variant="ghost"
              target="_blank"
              tooltip="Instagram"
            />
          </Row>
        </Column>
      </Row>
    </Column>
  );
};
