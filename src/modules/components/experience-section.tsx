"use client";

import { Card, Column, Heading, Row, Text } from "@/once-ui/components";

export const ExperienceSection = () => {
  return (
    <Column fillWidth marginTop="64" gap="8">
      <Heading as="h2" variant="display-default-s" align="center">
        Experience
      </Heading>

      <Card
        fillWidth
        background="overlay"
        radius="xl"
        border="neutral-alpha-weak"
        padding="24"
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
                Frontend Developer Intern
              </Heading>
              <Text variant="body-strong-s" onBackground="neutral-weak">
                Going Genius Group Of Companies
              </Text>
            </Column>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Mar 2024 – Dec 2024 | Remote
            </Text>
          </Row>

          <Column gap="8">
            <Text variant="code-default-xs">
              Tech Stack: Next.js, React.js, Mapbox, Cesium, Leaflet, OSM,
              Prisma, OAuth, Recharts
            </Text>
            <Column gap="8">
              <Text variant="code-default-xs" onBackground="neutral-weak">
                • Spearheaded frontend development as part of a dynamic team to
                deliver high-quality web applications.
              </Text>
              <Text variant="code-default-xs" onBackground="neutral-weak">
                • Collaborated closely with senior project managers and backend
                teams to manage tasks.
              </Text>
              <Text variant="code-default-xs" onBackground="neutral-weak">
                • Specialized in integrating Cesium, Leaflet, OSM, Next.js,
                GeoJSON, GPX, 3D models into webapps.
              </Text>
            </Column>
          </Column>
        </Column>
      </Card>
    </Column>
  );
};
