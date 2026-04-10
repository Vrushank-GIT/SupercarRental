import React, { useMemo, useState } from "react";
import { Car } from "../types/Car";
import { reserveTrack } from "../services/api";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const TRACKS = ["Short Circuit", "Grand Prix Circuit", "Drift Arena"] as const;
const SLOTS = ["09:00-10:00", "10:00-11:00", "11:00-12:00"] as const;

export default function ReservationDialog({
  open,
  car,
  onClose,
}: {
  open: boolean;
  car: Car | null;
  onClose: () => void;
}) {
  const [track, setTrack] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [slot, setSlot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  const canSubmit = useMemo(() => {
    if (!car) return false;
    if (!track || !slot || !date || !name || !email) return false;
    if (!/^\S+@\S+\.\S+$/.test(email)) return false;
    return true;
  }, [car, track, slot, date, name, email]); // only change: include slot in deps

  const handleReserve = async () => {
    if (!car || !canSubmit) return;

    setSubmitting(true);
    try {
      const result = await reserveTrack({
        carId: car.carId,
        track,
        date,
        slot,
        customer: { name, email },
      });

      // unchanged behavior: only show reservationId
      setToast({ type: "success", msg: `Reservation confirmed! ID: ${result.reservationId}` });

      onClose();
      setTrack("");
      setDate("");
      setName("");
      setEmail("");
      setSlot(""); // only change: reset slot too
    } catch {
      setToast({ type: "error", msg: "Reservation failed. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>Reserve Track Experience</DialogTitle>

        <DialogContent>
          {car && (
            <Stack spacing={2} sx={{ mt: 1 }}>
              <Typography color="text.secondary">
                Car: <b>{car.make} {car.model}</b> ({car.year})
              </Typography>

              <TextField
                select
                label="Track"
                value={track}
                onChange={(e) => setTrack(e.target.value)}
                fullWidth
              >
                <MenuItem value="">Select a track</MenuItem>
                {TRACKS.map((t) => (
                  <MenuItem key={t} value={t}>
                    {t}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                select
                label="Time Slot"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                fullWidth
              >
                <MenuItem value="">Select a slot</MenuItem>
                {SLOTS.map((s) => (
                  <MenuItem key={s} value={s}>
                    {s}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                label="Date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />

              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />

              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                helperText="We’ll send confirmation to this address."
              />
            </Stack>
          )}
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} variant="outlined" color="primary">
            Cancel
          </Button>
          <Button
            onClick={handleReserve}
            disabled={!canSubmit || submitting}
            variant="contained"
            color="primary"
          >
            {submitting ? "Reserving..." : "Confirm Reservation"}
          </Button>
        </DialogActions>
      </Dialog>

      {toast && (
        <Snackbar
          open
          autoHideDuration={4500}
          onClose={() => setToast(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert onClose={() => setToast(null)} severity={toast.type} variant="filled">
            {toast.msg}
          </Alert>
        </Snackbar>
      )}
    </>
  );
}