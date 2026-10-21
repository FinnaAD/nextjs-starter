import { baseURL, meta } from "@/resources/seo";
import {
  Badge,
  Button,
  Column,
  Grid,
  Heading,
  Icon,
  Line,
  Row,
  Schema,
  Text,
} from "@once-ui-system/core";

const services = [
  {
    number: "01",
    title: "Brand identity",
    description:
      "Distinctive identities that give your business a clear voice and a lasting impression.",
    icon: "sparkle",
  },
  {
    number: "02",
    title: "Digital experiences",
    description: "Considered websites and digital products, designed to feel as good as they work.",
    icon: "globe",
  },
  {
    number: "03",
    title: "Creative direction",
    description: "A thoughtful point of view to bring every part of your brand together.",
    icon: "eye",
  },
] as const;

export default function Home() {
  return (
    <Column as="main" fillWidth horizontal="center" paddingX="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={meta.home.title}
        description={meta.home.description}
        path={meta.home.path}
      />
      <Column maxWidth="l">
        <Row
          as="nav"
          aria-label="Main navigation"
          fillWidth
          horizontal="between"
          vertical="center"
          gap="16"
          paddingY="24"
          s={{ direction: "column", vertical: "start" }}
        >
          <Column gap="4">
            <Heading variant="heading-strong-m">dahlStudio</Heading>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Independent creative studio
            </Text>
          </Column>
          <Row gap="8" vertical="center">
            <Button href="#services" variant="tertiary" size="s">
              Services
            </Button>
            <Button href="#contact" variant="secondary" size="s">
              Get in touch
            </Button>
          </Row>
        </Row>

        <Column
          as="section"
          id="home"
          fillWidth
          minHeight="560px"
          vertical="center"
          gap="24"
          paddingY="64"
        >
          <Badge
            textVariant="label-default-s"
            border="neutral-alpha-medium"
            onBackground="neutral-medium"
            vertical="center"
            gap="8"
          >
            <Icon name="sparkle" size="s" onBackground="brand-medium" />
            Design with intention
          </Badge>
          <Column maxWidth="m">
            <Heading variant="display-strong-xl" wrap="balance">
              Thoughtful design for what comes next.
            </Heading>
          </Column>
          <Column maxWidth="s">
            <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
              dahlStudio builds clear, characterful brands and digital experiences for people moving
              good ideas forward.
            </Text>
          </Column>
          <Row gap="12" wrap>
            <Button href="#contact" size="m" arrowIcon>
              Start a project
            </Button>
            <Button href="#services" variant="tertiary" size="m">
              Explore services
            </Button>
          </Row>
          <Row fillWidth gap="16" vertical="center" marginTop="32">
            <Line fillWidth background="neutral-alpha-weak" />
            <Text variant="label-default-s" onBackground="neutral-weak">
              BRAND · DIGITAL · DIRECTION
            </Text>
          </Row>
        </Column>

        <Column as="section" id="services" fillWidth gap="32" paddingY="40">
          <Row fillWidth horizontal="between" vertical="end" gap="24" wrap>
            <Column gap="12">
              <Text variant="label-default-s" onBackground="brand-medium">
                WHAT WE DO
              </Text>
              <Heading variant="display-strong-s">Good work, made meaningful.</Heading>
            </Column>
            <Column maxWidth="xs">
              <Text variant="body-default-m" onBackground="neutral-weak">
                From the first idea to the final detail, we make every choice count.
              </Text>
            </Column>
          </Row>
          <Grid columns="3" m={{ columns: "2" }} s={{ columns: "1" }} gap="16">
            {services.map((service) => (
              <Column
                key={service.number}
                fill
                background="surface"
                border
                radius="l"
                padding="24"
                gap="24"
              >
                <Row fillWidth horizontal="between" vertical="center">
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {service.number}
                  </Text>
                  <Icon name={service.icon} size="m" onBackground="brand-medium" />
                </Row>
                <Column gap="12">
                  <Heading variant="heading-strong-m">{service.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {service.description}
                  </Text>
                </Column>
              </Column>
            ))}
          </Grid>
        </Column>

        <Column
          as="section"
          id="contact"
          fillWidth
          background="brand-alpha-weak"
          border
          radius="l"
          padding="40"
          gap="24"
          marginY="64"
        >
          <Text variant="label-default-s" onBackground="brand-medium">
            HAVE SOMETHING IN MIND?
          </Text>
          <Row fillWidth horizontal="between" vertical="center" gap="32" wrap>
            <Column gap="12">
              <Heading variant="display-strong-s">Let&apos;s make it matter.</Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                Tell us a little about your next project. We&apos;d love to hear what you&apos;re
                thinking.
              </Text>
            </Column>
          </Row>
        </Column>

        <Row
          as="footer"
          fillWidth
          horizontal="between"
          vertical="center"
          gap="16"
          paddingY="24"
          wrap
        >
          <Text variant="label-default-s" onBackground="neutral-weak">
            dahlStudio
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Independent by nature. Thoughtful by design.
          </Text>
        </Row>
      </Column>
    </Column>
  );
}
