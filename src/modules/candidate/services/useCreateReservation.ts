import { client } from "@/common";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { Reservation } from "./type";

type Input = {
  user: string;
  shift: string;
};

function createReservation(input: Input): Promise<Reservation> {
  return client({
    url: `reservations`,
    method: "POST",
    data: input,
  }).then((response) => response.data);
}

export function useCreateReservation() {
  return useMutation({
    mutationFn: createReservation,
  });
}
