import { green,white, grey, dark } from "../settings/Colors";
import { primaryFont } from "../settings/Typography";
import bg from '../../assets/bg.jpg'

interface Theme {
  primaryFont: string,
  primaryColor: string,
  textPrimaryColor : string,
  textColor: string,
  textFieldBackground: string ,
  bodyBackground: string | any,
}

export const defaultTheme:Theme = {
  primaryFont: primaryFont,
  primaryColor: green,
  textPrimaryColor:green,
  textColor: grey,
  textFieldBackground: white,
  bodyBackground: `url(${bg})`,
};

export const blackFridayTheme:Theme = {
  primaryFont: primaryFont,
  primaryColor: green,
  textPrimaryColor:white,
  textColor: white,
  textFieldBackground: dark,
  bodyBackground: "#000000",
};