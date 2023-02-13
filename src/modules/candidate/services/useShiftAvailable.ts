import { client } from "@/common";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Shift } from "./type";

function getShiftsAvailable(id: string): Promise<Shift[]> {
  return client({
    url: `shifts/working-day-available/${id}`,
    method: "GET",
  }).then((response) => response.data);
}

export function useShiftsAvailable(id: string) {
  return useQuery<Shift[], AxiosError>({
    queryKey: ["working-days", id, "shifts", "available"],
    queryFn: () => getShiftsAvailable(id),
  });
}

export function useInvalidatedShiftsAvailable(id: string) {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({
      queryKey: ["working-days", id, "shifts", "available"],
    });
}
