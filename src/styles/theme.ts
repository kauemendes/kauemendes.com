export const light = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#161616",
      white: "#e0e0e0"
    },
    primary: {
      main: "#FF0032",
      contrastText: "#161616"
    },
    secondary: {
      main: "#CD0404",
      contrastText: "#fffff1"
    },
    third: {
      main: "#6F1AB6",
      contrastText: "#fb3182"
    }
  }
}

export type ThemeType = typeof light

export const dark: ThemeType = {
  borderRadius: "4px",
  palette: {
    common: {
      black: "#161616",
      white: "#e0e0e0"
    },
    primary: {
      main: "#ff946b",
      contrastText: "#ff946b"
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff"
    },
    third: {
      main: "#6F1AB6",
      contrastText: "#200629"
    }
  }
}

const theme = light
export default theme
