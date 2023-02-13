import { client } from "@/common";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { WorkingDay } from "./type";

export function getWorkingDay(id: string): Promise<WorkingDay> {
  return client({
    url: `working-days/${id}`,
    method: "GET",
  }).then((response) => response.data);
}

export function useWorkingDay(id: string) {
  return useQuery<WorkingDay, AxiosError>({
    queryKey: ["workingDay", id],
    queryFn: () => getWorkingDay(id),
  });
}
