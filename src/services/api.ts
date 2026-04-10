import { Car } from "../types/Car";

const API_BASE = "https://siefalfek1.execute-api.us-east-1.amazonaws.com";

export async function fetchCars(): Promise<Car[]> {
  const res = await fetch(`${API_BASE}/cars`);
  if (!res.ok) throw new Error("Failed to fetch cars");
  return res.json();
}

export type ReservePayload = {
  carId: string;
  track: string;
  date: string;
  slot: string; 
  customer: { name: string; email: string };
};

export async function reserveTrack(data: ReservePayload): Promise<{ reservationId: string }> {
  const res = await fetch(`${API_BASE}/reserve`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Reservation failed");
  return res.json();
}