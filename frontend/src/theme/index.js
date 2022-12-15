import { extendTheme } from "@chakra-ui/react";
import ComponentStyles from "./components";
import { appColors } from "./foundations/appColor";
import { globalStyles } from "./foundations/globalstyles";


const customTheme = extendTheme({
  styles: globalStyles,
  colors: appColors,
  components: ComponentStyles
});

export default customTheme;
