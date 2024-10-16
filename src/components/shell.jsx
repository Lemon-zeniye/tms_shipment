import { useDisclosure } from "@mantine/hooks";
import { AppShell, Box, Burger, Group, Skeleton } from "@mantine/core";
import { NavbarNested } from "./nested-nav-bar";

export function BasicAppShell({ children }) {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          Logo
        </Group>
      </AppShell.Header>
      <AppShell.Navbar px="md">
        <NavbarNested />
      </AppShell.Navbar>
      <AppShell.Main className="bg-gray-100">
        <Box className="m-2 rounded-md min-h-[85vh] bg-white p-4">
          {children}
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
