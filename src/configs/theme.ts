import { createTheme } from "@mui/material";
import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    text: CSSProperties;
  }

  interface TypographyVariantsOptions {
    text?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text: true;
  }
}

export const theme = createTheme({
  typography: {
    // fontFamily: ["Alata", "sans-serif"].join(","),
    allVariants: {
      color: "#1a1a1a",
    },
    h1: {
      fontSize: "28px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 700,
    },
    text: {
      fontWeight: 300,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          text: "p",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
