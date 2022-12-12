import { defineStyleConfig } from "@chakra-ui/react";

const Card = defineStyleConfig({
    // The styles all Cards have in common
    baseStyle: {
      // display: "flex",
      // flexDirection: "column",
      // alignItems: "center",
      // gap: 2,
      background: "white",
      padding: "8px 16px",
    },
    variants: {
      smooth: {
        padding: 4,
        borderRadius: "base",
        boxShadow: "md",
      },
      taskCard: {
        // w:"300px",
        h: "auto",
        minH: "85px",
        maxH: "200px",
        borderRadius: "0.5em",
        bgColor: "whiteAlpha.900",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        marginBottom: "1.25em",
        display: "grid",
        overflow : "scroll"
      },
    },
    // set the default variant for the card
    defaultProps: {
      variant: "smooth",
    },
  });
  

export default Card;