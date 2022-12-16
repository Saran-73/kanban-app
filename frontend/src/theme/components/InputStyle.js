import { appColors } from "../foundations/appColor";


export const InputStyle = {
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
                bg: appColors.brandDarkGray["100"],
                pl: "2em",
                borderRadius: "1em",
            }
        }
    },
};