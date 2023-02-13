import { client } from "@/common";
import {
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Reservation } from "./type";

type Input = {
  user: string;
  shift: string;
};

export function createReservation(input: Input): Promise<Reservation> {
  return client({
    url: `reservations`,
    method: "POST",
    data: input,
  }).then((response) => response.data);
}

export function useCreateReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReservation,
    onSuccess: (id) =>
      queryClient.invalidateQueries({
        queryKey: ["working-days", id, "shifts", "available"],
      }),
  });
}

// export function useCreateReservation(
//     config?: UseMutationOptions<Response, AxiosError, Input>
//   ) {
//     return useMutation<Response, AxiosError, Input>(createReservation, config);
//   }
