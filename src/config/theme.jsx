import { createTheme, MantineColorsTuple } from "@mantine/core";

const myColor = [
  // "#ecf1fe",
  // "#d4def7",
  // "#a6b9f1",
  // "#7592ec",
  // "#4e72e9",
  // "#375de8",
  // "#2b53e8",
  // "#2144ce",
  // "#193db9",
  // "#0b33a3"
  "#eef3ff",
  "#dce4f5",
  "#b9c7e2",
  "#94a8d0",
  "#748dc1",
  "#5f7cb8",
  "#5474b4",
  "#44639f",
  "#39588f",
  "#2d4b81",
];

export const theme = createTheme({
  colors: {
    myColor,
  },

  components: {
    Button: {
      styles: { color: "#172554" },
    },
  },
});
