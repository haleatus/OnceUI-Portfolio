"use client";

import type React from "react";

import {
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Input,
  Row,
  Text,
  Textarea,
  useToast,
} from "@/once-ui/components";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { addToast } = useToast();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting || formSubmitted) return;

    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Email sent!", result.text);
          addToast({
            message: "Message sent successfully!",
            variant: "success",
          });
          setFormSubmitted(true);

          // Reset form
          if (formRef.current) {
            formRef.current.reset();
          }
        },
        (error) => {
          console.log("Error:", error.text);
          addToast({
            message: "Failed to send message. Please try again.",
            variant: "danger",
          });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
        <Column
          fill
          gap="20"
          padding="32"
          position="relative"
          align="center"
          background="brand-alpha-weak"
        >
          <Heading as="h3" variant="display-default-s" marginBottom="16">
            Contact Information
          </Heading>

          <Row gap="12" vertical="center" marginBottom="16">
            <Column background="brand-alpha-weak" padding="12" radius="full">
              <Icon name="mail" size="m" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-strong-s">
                <p style={{ textDecoration: "none", color: "inherit" }}>
                  shrestha.rohit655@gmail.com
                </p>
              </Text>
            </Column>
          </Row>

          <Row gap="12" vertical="center" marginBottom="16">
            <Column background="brand-alpha-weak" padding="12" radius="full">
              <Icon name="phone" size="s" onBackground="brand-strong" />
            </Column>
            <Column>
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

          <Row gap="12" vertical="center" marginBottom="24">
            <Column background="brand-alpha-weak" padding="12" radius="full">
              <Icon name="mapPin" size="m" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-strong-s">Chandragiri, Kathmandu, Nepal</Text>
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

        {/* Contact Form */}
        <Column fill padding="32" gap="20">
          <Heading as="h3" variant="display-default-s" marginBottom="16">
            Send a Message
          </Heading>

          <form ref={formRef} onSubmit={sendEmail}>
            <Column gap="16" fillWidth>
              <Input
                id="name"
                name="user_name"
                required
                label="Name"
                disabled={isSubmitting || formSubmitted}
              />

              <Input
                id="email"
                type="email"
                name="user_email"
                required
                label="Email"
                disabled={isSubmitting || formSubmitted}
              />

              <input
                type="hidden"
                name="to_email"
                value="shrestha.rohit655@gmail.com"
              />

              <Textarea
                id="message"
                name="message"
                required
                label="Message"
                rows={5}
                disabled={isSubmitting || formSubmitted}
              />

              <Button
                type="submit"
                variant="tertiary"
                loading={isSubmitting}
                disabled={isSubmitting || formSubmitted}
                fillWidth
              >
                {formSubmitted ? "Message Sent" : "Send Message"}
              </Button>

              {formSubmitted && (
                <Text
                  variant="body-default-s"
                  onBackground="success-strong"
                  align="center"
                >
                  Your message has been sent successfully!
                </Text>
              )}
            </Column>
          </form>
        </Column>
      </Row>
    </Column>
  );
};
