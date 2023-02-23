export type ThemeTypes = {
  bgColor: string;
  textColor1: string;
  textColor2: string;
  primary: string;
  bigSize: string;
  mediumSize: string;
  smallSize: string;
  defaultSize: string;
};

export const lightTheme: ThemeTypes = {
  bgColor: "#18122B",
  textColor1: "#cbd1e1",
  textColor2: "#d9dfef",
  primary: "#635985",
  bigSize: "2.8rem",
  mediumSize: "2rem",
  smallSize: "1.8rem",
  defaultSize: "1.6rem",
};

export const darkTheme: ThemeTypes = {
  bgColor: "#fafbff",
  textColor1: "#5a6376",
  textColor2: "#313c54",
  primary: "#B088F9",
  bigSize: "2.8rem",
  mediumSize: "2rem",
  smallSize: "1.8rem",
  defaultSize: "1.6rem",
};
