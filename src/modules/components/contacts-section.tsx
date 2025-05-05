"use client";

import { useState, FormEvent, SetStateAction } from "react";
import {
  Background,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Input,
  Row,
  SmartImage,
  Text,
  Textarea,
  useToast,
} from "@/once-ui/components";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      addToast({
        message: "All fields are required",
        variant: "danger",
      });
      return;
    }

    if (!validateEmail(email)) {
      addToast({
        message: "Please enter a valid email address",
        variant: "danger",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // This would typically be an API call - just simulating for now
      // Example: await fetch('/api/contact', {method: 'POST', body: JSON.stringify({name, email, message})});
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      addToast({
        message: "Your message has been sent successfully",
        variant: "success",
      });

      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      addToast({
        message: "Failed to send message. Please try again later.",
        variant: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        mobileDirection="column"
      >
        {/* Contact Information */}
        <Column
          fill
          gap="20"
          padding="32"
          position="relative"
          background="brand-alpha-weak"
        >
          <Heading as="h3" variant="display-default-s" marginBottom="16">
            Contact Information
          </Heading>

          <Row gap="12" vertical="center" marginBottom="16">
            <Column background="brand-alpha-medium" padding="12" radius="full">
              <Icon name="mail" size="m" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Email
              </Text>
              <Text variant="body-strong-s">
                <a
                  href="mailto:shrestha.rohit655@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  shrestha.rohit655@gmail.com
                </a>
              </Text>
            </Column>
          </Row>

          <Row gap="12" vertical="center" marginBottom="16">
            <Column background="brand-alpha-medium" padding="12" radius="full">
              <Icon name="phone" size="m" onBackground="brand-strong" />
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

          <Row gap="12" vertical="center" marginBottom="24">
            <Column background="brand-alpha-medium" padding="12" radius="full">
              <Icon name="mapPin" size="m" onBackground="brand-strong" />
            </Column>
            <Column>
              <Text variant="body-default-xs" onBackground="neutral-medium">
                Location
              </Text>
              <Text variant="body-strong-s">Kathmandu, Nepal</Text>
            </Column>
          </Row>

          <Row gap="16" horizontal="start">
            <IconButton
              href="https://github.com/RohitSth"
              icon="github"
              variant="secondary"
              target="_blank"
              tooltip="GitHub"
            />
            <IconButton
              href="https://www.linkedin.com/in/rohit-shrestha/"
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

        {/* Contact Form */}
        <Column
          fillWidth
          as="form"
          onSubmit={handleSubmit}
          gap="16"
          padding="32"
          position="relative"
        >
          <Heading as="h3" variant="display-default-s" marginBottom="16">
            Send a Message
          </Heading>

          <Input
            id="name"
            label="Your Name"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            id="email"
            label="Your Email"
            placeholder="john@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
          />

          <Textarea
            id="message"
            label="Your Message"
            placeholder="I'd like to discuss a project opportunity..."
            value={message}
            onChange={(e: { target: { value: SetStateAction<string> } }) =>
              setMessage(e.target.value)
            }
            rows={5}
            required
          />

          <Button
            type="submit"
            label={isSubmitting ? "Sending..." : "Send Message"}
            variant="primary"
            disabled={isSubmitting}
            prefixIcon={isSubmitting ? "loader" : "send"}
          />
        </Column>
      </Row>
    </Column>
  );
};
