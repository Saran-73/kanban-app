export const ButtonStyle = {
  baseStyle: {
    p: "1em 2em",
    borderRadius: "8px",
    bg: "#fff",
  },
  variants: {
    submitButton: {
      bg: "brand.600",
      color: "whiteAlpha.900",
      mt: "1em",
    },
    secondaryButton: {
      bg: "transparent",
      border: "1px solid #565557",
      color: "f5f4f3",
      fontSize: "12px",
      height: "28px",
      padding: "0 8px",
      borderRadius: "6px",
    },
  },
  defaultProps: {
    variant: "formContainer",
  },
};
