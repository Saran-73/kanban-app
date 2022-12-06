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
      },
    },
  },
  colors: {
    brand: {
      600: "#0099cc",
      100: "#005573",
    },
    brandGrey: {
      500: "rgba(73,93,109,1)"
    },
    brandGreyishBlue: {
      900: "rgba(49,55,82,1)"
    }
  },
  components: {
    AppFlex: {
      baseStyle: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        height:"100vh",
      },
      variants: {
        authPage: {
          backgroundImage: "linear-gradient( 110.3deg,  rgba(73,93,109,1) 4.3%, rgba(49,55,82,1) 96.7% )",
          // backgroundColor:"#8BC6EC",
        },
      }
    },
    AppBox: {
      baseStyle: {
        p: "1em 2em",
        borderRadius: "16px",
        bg: "#fff",
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
      baseStyle: {
        field: {
        }
      },
      variants: {
        userInput: {
          field: {
            _focus: {
            }
          }
        },
        searchInput: {
          field: {
            bg: "whiteAlpha.800",
            color: "black",
            pl: "2em",
            borderRadius: "1em",
          }
        }
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
