import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage:
          "linear-gradient(to right top, #daede4, #cee8e3, #c3e2e4, #bbdbe5, #b8d3e5, #b7d1e4, #b5cfe3, #b4cde2, #b2d1e1, #b3d4de, #b5d7db, #badad8)",
      },
    },
  },
  colors: {
    brand: {
      600: "#0099cc",
      },
  },
  components: {
    Button: {
      variants: {
        n: {
          bg: "red",
        },
      },
    },
    Text: {
      variants: {
            navText: { 
              bg: "white",
              color: "blue.700",
              padding: "0.5em",
              borderRadius: "0.25em",
              cursor: "pointer",
        },
      },
    },
  },
});

export default customTheme;
