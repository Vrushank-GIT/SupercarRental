import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#f5c542" },     // gold accent
    secondary: { main: "#6ee7ff" },   // cool accent
    background: {
      default: "#0b0f14",
      paper: "#111827",
    },
    text: {
      primary: "#e5e7eb",
      secondary: "#9ca3af",
    },
  },
  shape: { borderRadius: 14 },
  typography: {
    fontFamily: `"Inter", system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif`,
    h3: { fontWeight: 800 },
    h5: { fontWeight: 700 },
  },
});