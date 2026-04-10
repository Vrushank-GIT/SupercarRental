import React, { useEffect, useMemo, useState } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Slide = { title: string; subtitle: string; image: string };

type HeroCarouselProps = {
  onBrowse?: () => void; // optional scroll handler
};

export default function HeroCarousel({ onBrowse }: HeroCarouselProps) {
  const navigate = useNavigate();

  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Luxury Car Track Experience",
        subtitle: "Pick an exotic car, select a circuit, and reserve your track slot in minutes.",
        image:
          "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=2400&q=70",
      },
      {
        title: "Curated Exotic Fleet",
        subtitle: "Lamborghini, Ferrari, Porsche, Bugatti and more—ready for the perfect lap.",
        image:
          "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2400&q=70",
      },
      {
        title: "Built for Speed. Designed for Comfort.",
        subtitle: "Premium UI, simple booking, and clean confirmations—powered by cloud APIs.",
        image:
          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2400&q=70",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const active = slides[index];

  const handleBrowse = () => {
    if (onBrowse) return onBrowse(); // scroll (Home)
    navigate("/cars");              // fallback: go to browse page
  };

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: 460, md: 560 },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${active.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1.03)",
          filter: "saturate(1.1) contrast(1.05)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.30) 100%)",
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1000px 500px at 20% 40%, rgba(245,197,66,0.16), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", py: { xs: 6, md: 8 } }}>
        <Stack spacing={2} sx={{ maxWidth: 760 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, lineHeight: 1.05 }}>
            {active.title}
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 640 }}>
            {active.subtitle}
          </Typography>

          <Stack direction="row" spacing={1.5} sx={{ pt: 2, flexWrap: "wrap" }}>
            <Button variant="contained" color="primary" size="large" onClick={handleBrowse} sx={{ fontWeight: 900 }}>
              Browse Cars
            </Button>

            <Button variant="outlined" color="primary" size="large" onClick={() => navigate("/cars")} sx={{ fontWeight: 800 }}>
              Reserve a Slot
            </Button>
          </Stack>

          <Stack direction="row" spacing={1} sx={{ pt: 3 }}>
            {slides.map((_, i) => {
              const selected = i === index;
              return (
                <Box
                  key={i}
                  onClick={() => setIndex(i)}
                  role="button"
                  aria-label={`Go to slide ${i + 1}`}
                  sx={{
                    width: selected ? 28 : 10,
                    height: 10,
                    borderRadius: 999,
                    cursor: "pointer",
                    transition: "all 180ms ease",
                    backgroundColor: selected ? "primary.main" : "rgba(255,255,255,0.35)",
                    border: "1px solid rgba(255,255,255,0.18)",
                  }}
                />
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}