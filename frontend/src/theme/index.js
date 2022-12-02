import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Card = defineStyleConfig({
  // The styles all Cards have in common
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    background: "white",
    alignItems: "center",
    gap: 2,
  },
  variants: {
    smooth: {
      padding: 4,
      borderRadius: "base",
      boxShadow: "md",
    },
    taskCard: {
      // w:"300px",
      h: "170px",
      borderRadius: "0.5em",
      bgColor: "whiteAlpha.900",
      boxShadow:
        "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
      marginBottom: "1.25em",
    },
  },
  // set the default variant for the card
  defaultProps: {
    variant: "smooth",
  },
});

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "#F4F3F3",
        // backgroundImage:
        //   "linear-gradient(to right top, #daede4, #cee8e3, #c3e2e4, #bbdbe5, #b8d3e5, #b7d1e4, #b5cfe3, #b4cde2, #b2d1e1, #b3d4de, #b5d7db, #badad8)",
      },
    },
  },
  colors: {
    brand: {
      600: "#0099cc",
      100: "#005573",
    },
  },
  components: {
    AppBox: {
      baseStyle: {
        p: "1em 2em",
        borderRadius: "16px",
        bg: "whiteAlpha.900",
      },
      variants: {
        formContainer: {},
        loginForm: {},
        registrationForm: {},
      },
      defaultProps: {
        variant: "formContainer",
      },
    },
    Card,
    Button: {
      variants: {
        submitButton: {
          bg: "brand.600",
          color: "whiteAlpha.900",
          mt: "1em",
        },
      },
    },
    Input: {
      variants: {
        userInput: {
          field: {
            _focus: {
            }
          }
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
