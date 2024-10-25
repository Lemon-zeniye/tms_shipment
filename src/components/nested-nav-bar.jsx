import { ScrollArea } from "@mantine/core";
import {
  IconNotes,
  IconGauge,
  IconFileAnalytics,
  IconTruck,
  IconCreditCard,
  IconSettings,
  IconUser,
  IconMapPin,
} from "@tabler/icons-react";
import classes from "./nested-nab-bar.module.css";
import { LinksGroup } from "./navbar-link-group";

const mockdata = [
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  { label: "Shipments", icon: IconNotes, link: "/shipments" },
  // {
  //   label: "Transporters",
  //   icon: IconTruck,
  //   initiallyOpened: true,
  //   links: [
  //     { label: "Drivers", link: "/drivers" },
  //     { label: "Vehicles", link: "/vehicles" },
  //   ],
  // },
  { label: "Track Shipment", icon: IconMapPin, link: "/track" },
  { label: "Drivers", icon: IconUser, link: "/drivers" },

  { label: "Vehicles", icon: IconTruck, link: "/vehicles" },

  { label: "Payments", icon: IconCreditCard, link: "/dashboard" },
  { label: "Report", icon: IconFileAnalytics, link: "/dashboard" },
  { label: "Settings", icon: IconSettings, link: "/dashboard" },
];

export function NavbarNested() {
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>User button</div>
    </nav>
  );
}
