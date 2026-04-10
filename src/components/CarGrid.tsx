import React from "react";
import { Car } from "../types/Car";
import { Container, Typography, Grid } from "@mui/material";
import CarCard from "./CarCard";

export default function CarGrid({
  cars,
  onReserve,
}: {
  cars: Car[];
  onReserve: (car: Car) => void;
}) {
  return (
    <Container sx={{ py: { xs: 4, md: 6 } }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Fleet
      </Typography>

      <Grid container spacing={2}>
        {cars.map((car) => (
          <Grid item key={car.carId} xs={12} sm={6} md={4}>
            <CarCard car={car} onReserve={onReserve} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}