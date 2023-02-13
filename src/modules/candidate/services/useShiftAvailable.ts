import { client } from "@/common";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Shift } from "./type";

export function getShiftsAvailable(id: string): Promise<Shift[]> {
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
