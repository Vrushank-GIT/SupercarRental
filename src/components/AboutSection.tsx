import React from "react";
import { Box, Container, Stack, Typography, Grid, Paper } from "@mui/material";

export default function AboutSection() {
  return (
    <Box sx={{ py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="stretch">
          {/* Left: About text */}
          <Grid item xs={12} md={7}>
            <Stack spacing={2} sx={{ maxWidth: 900 }}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, letterSpacing: 0.2 }}
              >
                About Supercar Rental
              </Typography>

              <Typography color="text.secondary" sx={{ fontSize: 16, lineHeight: 1.8 }}>
                Supercar Rental is a premium track-experience web application built for car enthusiasts.
                Explore a curated collection of high-performance supercars, choose your favorite circuit,
                and reserve a time slot in seconds. Whether you’re chasing lap times or just living the
                dream, we make the booking process simple, fast, and exciting.
              </Typography>

              <Typography color="text.secondary" sx={{ fontSize: 16, lineHeight: 1.8 }}>
                Browse the fleet, pick a track layout, select a date and time slot, and get a confirmation
                with your reservation details. Your next adrenaline-filled drive starts here.
              </Typography>
            </Stack>
          </Grid>

          {/* Right: Highlight cards */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2} sx={{ height: "100%" }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderColor: "rgba(255,255,255,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                  Explore the Collection
                </Typography>
                <Typography color="text.secondary">
                  Discover iconic supercars with specs, images, and a clean card-based browsing experience.
                </Typography>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderColor: "rgba(255,255,255,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                  Pick Your Track & Slot
                </Typography>
                <Typography color="text.secondary">
                  Choose from multiple track layouts, select a date, and reserve a time slot that fits your schedule.
                </Typography>
              </Paper>

              <Paper
                variant="outlined"
                sx={{
                  p: 2.5,
                  borderColor: "rgba(255,255,255,0.10)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                }}
              >
                <Typography sx={{ fontWeight: 800, mb: 0.5 }}>
                  Instant Confirmation
                </Typography>
                <Typography color="text.secondary">
                  After booking, you’ll receive a reservation ID and confirmation details so you’re ready for race day.
                </Typography>
              </Paper>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}