import { extendTheme } from "@chakra-ui/react";
import { appColors } from "./foundations/appColor";
import Card from "./components/CardStyles";
import { globalStyles } from "./styles";

const customTheme = extendTheme({
  styles: globalStyles,
  colors: appColors,
  components: {
    AppFlex: {
      baseStyle: {
        display: "flex",
        alignItems: "center",
        gap:"1em"
      },
      variants: {
        authPage: {
          backgroundImage: "linear-gradient( 110.3deg,  rgba(73,93,109,1) 4.3%, rgba(49,55,82,1) 96.7% )",
          height: "100vh",
          justifyContent: "center",
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
      sizes: {
        
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
            bg: "#424244",
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
