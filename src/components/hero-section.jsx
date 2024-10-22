"use client";
import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Modal,
  TextInput,
  Flex,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import classes from "./hero-section.module.css";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>Comprehensive</span>
            <br /> Shipment Solution
          </Title>
          <Text c="dimmed" mt="md">
            Build robust, seamless logistics solutions for transporters,
            shippers, and dispatchers. Our platform includes advanced features
            to streamline every aspect of the shipping process.
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>End-to-End Shipment Management</b> – From bidding and
              assignment to delivery and proof of receipt, manage all your
              shipments in one place.
            </List.Item>
            <List.Item>
              <b>Customizable for All Business Needs</b> – Handle any type of
              shipment, including small packages, palletized goods, container
              shipments, and more. Flexible for individual transporters and
              fleet operators.
            </List.Item>
            {/* <List.Item>
              <b>Automated Invoicing and Tracking</b> – Automatically generate
              invoices and track shipment history without the need for real-time
              tracking.
            </List.Item> */}
            <List.Item>
              <b>Bid System for Transparent Pricing </b> – Transporters bid on
              shipments, ensuring competitive rates, and shippers choose the
              best option.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => navigate("/shipment")}
            >
              New Shipment
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
              onClick={open}
            >
              Track Shipment
            </Button>
          </Group>
        </div>
        <Image
          src="images/truck-delivery-svgrepo-com.svg"
          className={classes.image}
        />
      </div>
      <Modal
        opened={opened}
        size="70%"
        onClose={close}
        centered
        withCloseButton={false}
      >
        <Flex className="gap-5 items-end">
          <TextInput
            className="w-full"
            label="Track Number"
            placeholder="Track Number"
          />
          <Button className="flex-none">Track</Button>
        </Flex>
      </Modal>
    </Container>
  );
}
