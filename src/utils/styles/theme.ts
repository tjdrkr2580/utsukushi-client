export type ThemeTypes = {
  bgColor: string;
  textColor1: string;
  textColor2: string;
  primary: string;
  bigSize: number;
  mediumSize: number;
  smallSize: number;
  defaultSize: number;
};

export const lightTheme: ThemeTypes = {
  bgColor: "#18122B",
  textColor1: "#cbd1e1",
  textColor2: "#d9dfef",
  primary: "#635985",
  bigSize: 2.8,
  mediumSize: 2,
  smallSize: 1.8,
  defaultSize: 1.6,
};

export const darkTheme: ThemeTypes = {
  bgColor: "#fafbff",
  textColor1: "#5a6376",
  textColor2: "#313c54",
  primary: "#B088F9",
  bigSize: 2.8,
  mediumSize: 2,
  smallSize: 1.8,
  defaultSize: 1.6,
};
