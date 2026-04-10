import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import { fetchCars } from "../services/api";
import { Car } from "../types/Car";

import Navbar from "../components/Navbar";
import HeroCarousel from "../components/HeroCarousel";
import CarGrid from "../components/CarGrid";
import AboutSection from "../components/AboutSection";
import ReservationDialog from "../components/ReservationDialog";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const fleetRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(Array.isArray(data) ? data : []))
      .catch(() => setError("Failed to load cars"))
      .finally(() => setLoading(false));
  }, []);

  const scrollToFleet = () =>
    fleetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const scrollToAbout = () =>
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const content = useMemo(() => {
    if (loading) {
      return (
        <Container sx={{ py: 6 }}>
          <Typography sx={{ mb: 2 }}>Loading cars...</Typography>
          <LinearProgress />
        </Container>
      );
    }
    if (error) {
      return (
        <Container sx={{ py: 6 }}>
          <Typography color="error">{error}</Typography>
        </Container>
      );
    }
    return (
      <Box ref={fleetRef}>
        <CarGrid cars={cars} onReserve={(car) => setSelectedCar(car)} />
      </Box>
    );
  }, [loading, error, cars]);

  return (
    <Box>
      <Navbar onFleet={scrollToFleet} onAbout={scrollToAbout} />

      <HeroCarousel onBrowse={scrollToFleet} />

      {content}

      <Box ref={aboutRef}>
        <AboutSection />
      </Box>

      <ReservationDialog
        open={!!selectedCar}
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </Box>
  );
}