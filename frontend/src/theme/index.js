import { extendTheme } from "@chakra-ui/react";
import { appColors } from "./foundations/appColor";
import Card from "./components/CardStyles";
import { globalStyles } from "./styles";
import { ButtonStyle } from "./components/ButtonStyle";
import { InputStyle } from "./components/InputStyle";
import { TextStyle } from "./components/TextStyle";
import { BoxStyle } from "./components/BoxStyle";
import { FlexStyle } from "./components/FlexStyle";

const customTheme = extendTheme({
  styles: globalStyles,
  colors: appColors,
  components: {
    AppFlex: FlexStyle,
    AppBox: BoxStyle,
    Button: ButtonStyle,
    Input: InputStyle,
    Text: TextStyle,
    Card,
  },
});

export default customTheme;
