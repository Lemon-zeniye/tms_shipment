import { ScrollArea } from "@mantine/core";
import {
  IconNotes,
  IconGauge,
  IconFileAnalytics,
  IconTruck,
  IconCreditCard,
  IconSettings,
} from "@tabler/icons-react";
import classes from "./nested-nab-bar.module.css";
import { LinksGroup } from "./navbar-link-group";

const mockdata = [
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  {
    label: "Transporters",
    icon: IconTruck,
    initiallyOpened: true,
    links: [
      { label: "Transporters", link: "/transporters" },
      { label: "Drivers", link: "/drivers" },
      { label: "Vehicles", link: "/vehicles" },
    ],
  },
  { label: "Shipments", icon: IconNotes },
  { label: "Payments", icon: IconCreditCard },
  { label: "Report", icon: IconFileAnalytics },
  { label: "Settings", icon: IconSettings },
  //   {
  //     label: "Security",
  //     icon: IconLock,
  //     links: [
  //       { label: "Enable 2FA", link: "/" },
  //       { label: "Change password", link: "/" },
  //       { label: "Recovery codes", link: "/" },
  //     ],
  //   },
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
