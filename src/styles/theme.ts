export const light = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#161616",
      white: "#e0e0e0",
    },
    primary: {
      main: "#17121e",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#5145ff",
    },
  },
};

export type ThemeType = typeof light;

export const dark: ThemeType = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#161616",
      white: "#e0e0e0",
    },
    primary: {
      main: "#5145ff",
      contrastText: "#5145ff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
};

const theme = light;
export default theme;
