import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"; // import utility for setting light and dark mode props

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {},
  tabpanel: {
    // color: "green"
  },
});

const sizes = definePartsStyle({
  tab: {},
});

// define custom variants
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    tab: {
      pos: "relative",
      left:"6em",
      color: "#a2a0a2",
      fontWeight: "600",
      fontSize: "14px",
      p: "0 0 10px",
      mr: "1.5em",
      // bg: mode(`${c}.300`, `${c}.600`)(props),
      _selected: {
        //   bg: mode('#fff', 'gray.800')(props),
        //   color: mode(`${c}.500`, `${c}.300`)(props),
        borderBottom: "2px solid #a2a0a2",
        color: "#f5f4f3",
      },
      _hover: {
        borderBottom: "2px solid #a2a0a2",
        color: "#f5f4f3",
      }
    },
    tablist: {
        borderBottom:  "1px solid #424244"
    },
    tabpanel: {
      p:"0",
    },
  };
});

const variants = {
  elegant: colorfulVariant,
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  // size: 'xl',
  variant: "elegant",
  // colorScheme: "green",
};

// export the component theme
export const TabStyle = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps,
});
