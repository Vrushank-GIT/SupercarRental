import React, { useEffect, useState } from "react";
import { Box, Container, LinearProgress, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import CarGrid from "../components/CarGrid";
import ReservationDialog from "../components/ReservationDialog";
import { fetchCars } from "../services/api";
import { Car } from "../types/Car";

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCars()
      .then((data) => setCars(Array.isArray(data) ? data : []))
      .catch(() => setError("Failed to load cars"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Box>
      <Navbar />

      {loading && (
        <Container sx={{ py: 6 }}>
          <Typography sx={{ mb: 2 }}>Loading cars...</Typography>
          <LinearProgress />
        </Container>
      )}

      {!loading && error && (
        <Container sx={{ py: 6 }}>
          <Typography color="error">{error}</Typography>
        </Container>
      )}

      {!loading && !error && (
        <CarGrid cars={cars} onReserve={(car) => setSelectedCar(car)} />
      )}

      <ReservationDialog
        open={!!selectedCar}
        car={selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </Box>
  );
}