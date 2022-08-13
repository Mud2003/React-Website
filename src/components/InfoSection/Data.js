import image1 from "../../images/svg-1.svg";
import image2 from "../../images/svg-2.svg";
import image3 from "../../images/svg-3.svg";
 
 export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    LightTextDesc: true,
    topLine: "Premium Bank",
    headLine: "Unlimited Transaction with zero fees",
    description: "Get access to our exclusive app that allows you to send unlimited transaction without getting charged any fees",
    buttonLabel: 'Get started',
    imgStart: false,
    image: {image1},
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false,
}

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  LightTextDesc: false,
  topLine: "Unlimited Access",
  headLine: "Login to your account at any time.",
  description: "We have you covered no matter where you are located. All you need is an internet connection and mobile or computer.",
  buttonLabel: 'Learn More',
  imgStart: true,
  image: {image2},
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  LightTextDesc: true,
  topLine: "Join Our Team",
  headLine: "Creating an account extremely easy",
  description: "get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  image: {image3},
  alt: 'Car',
  dark: false,
  primary: false,
  darkText: true,
}
