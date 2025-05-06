"use client";

import { Card, Column, Heading, Row, Text } from "@/once-ui/components";

export const EducationSection = () => {
  return (
    <Column fillWidth marginTop="64" gap="8">
      <Heading as="h2" variant="display-default-s" align="center">
        Education
      </Heading>

      <Card
        fillWidth
        background="overlay"
        radius="xl"
        border="neutral-alpha-weak"
        padding="32"
        noHoverBackground
      >
        <Column gap="24" fill>
          <Row
            horizontal="space-between"
            mobileDirection="column"
            gap="4"
            fillWidth
          >
            <Column gap="4">
              <Heading as="h3" variant="body-strong-l">
                Bachelor of Computer Science and Information Technology
              </Heading>
              <Text variant="body-strong-s" onBackground="neutral-weak">
                Infrastructure University Kuala Lumpur, Sunway College
              </Text>
            </Column>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Mar 2022 - Mar 2025
            </Text>
          </Row>
          <Text variant="code-default-xs">Kathmandu, Nepal</Text>
        </Column>
      </Card>
    </Column>
  );
};
