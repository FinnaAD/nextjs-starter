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
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const services = [
  {
    number: "01",
    title: "Websites for small businesses",
    description:
      "A custom website that tells customers who you are, what you offer and how to find you. Fast, mobile-friendly and built from scratch.",
    icon: "sparkle",
  },
  {
    number: "02",
    title: "Digital menus",
    description: "A menu customers can browse on their phone, with clear categories and photos.",
    icon: "globe",
  },
  {
    number: "03",
    title: "Care and updates",
    description: "I handle hosting, updates and small changes for one fixed monthly price. You never have to think about the technical side.",
    icon: "shield",
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
            <Heading variant="heading-strong-m">Dahl Studio</Heading>
            <Text variant="label-default-s" onBackground="neutral-weak">
              Web design for small businesses
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
          <Column maxWidth="m">
            <Heading variant="display-strong-xl" wrap="balance">
              Websites that make small businesses look as good as they are.
            </Heading>
          </Column>
          <Column maxWidth="s">
            <Text variant="heading-default-l" onBackground="neutral-weak" wrap="balance">
              I design and build fast, modern websites for restaurants, shops and local businesses, from first sketch to launch, with one person handling everything.
            </Text>
          </Column>
          <Row gap="12" wrap>
            <Button href="#contact" size="m" arrowIcon>
              Book a session
            </Button>
            <Button href="#services" variant="tertiary" size="m">
              See my work
            </Button>
          </Row>
          <Row fillWidth gap="16" vertical="center" marginTop="32">
            <Line fillWidth background="neutral-alpha-weak" />
            <Text variant="label-default-s" onBackground="neutral-weak">
              Based in Kristiansund, Norway. Available for remote work worldwide.
            </Text>
          </Row>
        </Column>

        <Column as="section" id="services" fillWidth gap="32" paddingY="40">
          <Row fillWidth horizontal="between" vertical="end" gap="24" wrap>
            <Column gap="12">
              <Text variant="label-default-s" onBackground="brand-medium">
                WHAT I DO
              </Text>
              <Heading variant="display-strong-s">Website design and development</Heading>
            </Column>
            <Column maxWidth="xs">
              <Text variant="body-default-m" onBackground="neutral-weak">
                One person, one point of contact, from first sketch to launch and beyond.
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
                  {service.icon === "shield" ? (
                    <IoShieldCheckmarkOutline
                      size={24}
                      color="var(--brand-on-background-medium)"
                    />
                  ) : (
                    <Icon name={service.icon} size="m" onBackground="brand-medium" />
                  )}
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
                Tell me a little about your business and what you need. I&apos;ll get back to you within 24 hours.
              </Text>
            <Button href="#contact" size="m" arrowIcon>
              Book a session
            </Button>
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
            Dahl Studio
          </Text>
          <Text variant="label-default-s" onBackground="neutral-weak">
            Independent by nature. Thoughtful by design.
          </Text>
        </Row>
      </Column>
    </Column>
  );
}
