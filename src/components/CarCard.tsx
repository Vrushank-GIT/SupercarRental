import React from "react";
import { Car } from "../types/Car";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
  Chip,
} from "@mui/material";

export default function CarCard({
  car,
  onReserve,
}: {
  car: Car;
  onReserve: (car: Car) => void;
}) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        border: "1px solid rgba(255,255,255,0.08)",
        backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        transition: "transform .18s ease, border-color .18s ease",
        "&:hover": { transform: "translateY(-4px)", borderColor: "rgba(245,197,66,0.35)" },
      }}
    >
      <CardMedia
        component="img"
        height="190"
        image={car.imageUrl}
        alt={`${car.make} ${car.model}`}
        sx={{ filter: "contrast(1.05) saturate(1.05)" }}
      />

      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">
            {car.make} {car.model}
          </Typography>

          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            <Chip size="small" label={`Year ${car.year}`} />
            <Chip size="small" label={car.color} />
            <Chip size="small" label={car.engine} />
            <Chip size="small" label={`${car.kmDriven.toLocaleString()} km`} />
          </Stack>
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, mt: "auto" }}>
        <Button fullWidth variant="contained" color="primary" onClick={() => onReserve(car)}>
          Reserve Track Experience
        </Button>
      </CardActions>
    </Card>
  );
}