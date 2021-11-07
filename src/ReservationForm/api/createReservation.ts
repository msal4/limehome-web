import { apiURL } from "../../config";

export const createReservation = async (input: CreateReservationInput) => {
  const res = await fetch(`${apiURL}/reservations`, {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "content-type": "application/json",
    },
  });

  if (res.status !== 200) {
    throw res.json();
  }

  return await res.json();
};

export interface CreateReservationInput {
  firstName: string;
  lastName: string;
  checkInDate: string;
  checkOutDate: string;
  numOfGuests: number;
  billingAddress: string;
  billingCountry: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
}
