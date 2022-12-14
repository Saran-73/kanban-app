export const ButtonStyle = {
    baseStyle: {
        p: "1em 2em",
        borderRadius: "16px",
        bg: "#fff",
      },
    variants: {
        submitButton: {
            bg: "brand.600",
            color: "whiteAlpha.900",
            mt: "1em",
        },
    },
    defaultProps: {
        variant: "formContainer",
      },
};