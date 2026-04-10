import React from "react";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

type NavbarProps = {
  onFleet?: () => void;
  onAbout?: () => void;
};

export default function Navbar({ onFleet, onAbout }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const handleFleet = () => {
    if (onFleet) return onFleet();     // scroll (Home)
    navigate("/cars");                 // fallback: go to browse page
  };

  const handleAbout = () => {
    if (onAbout) return onAbout();     // scroll (Home)
    // fallback: stay on home and scroll to bottom-ish
    if (location.pathname !== "/") navigate("/");
    window.setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 150);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(10, 14, 20, 0.72)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ py: 1 }}>
          <Typography
            component={RouterLink}
            to="/"
            variant="h6"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              fontWeight: 900,
              letterSpacing: 0.4,
            }}
          >
            Supercar Rental
            <Box component="span" sx={{ color: "primary.main" }}>
              .
            </Box>
          </Typography>

          <Box sx={{ flex: 1 }} />

          <Button
            component={RouterLink}
            to="/"
            color="inherit"
            sx={{
              mx: 0.5,
              opacity: isActive("/") ? 1 : 0.8,
              borderBottom: isActive("/") ? "2px solid" : "2px solid transparent",
              borderColor: "primary.main",
              borderRadius: 0,
            }}
          >
            Home
          </Button>

          <Button
            onClick={handleFleet}
            color="inherit"
            sx={{
              mx: 0.5,
              opacity: isActive("/cars") ? 1 : 0.8,
              borderBottom: isActive("/cars") ? "2px solid" : "2px solid transparent",
              borderColor: "primary.main",
              borderRadius: 0,
            }}
          >
            Fleet
          </Button>

          <Button onClick={handleAbout} color="inherit" sx={{ mx: 0.5, opacity: 0.9 }}>
            About
          </Button>

          <Button
            component={RouterLink}
            to="/cars"
            variant="contained"
            color="primary"
            sx={{ ml: 1.5, fontWeight: 800 }}
          >
            Reserve Now
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}