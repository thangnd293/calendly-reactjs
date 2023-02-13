import { client } from "@/common";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { WorkingDay } from "./type";

export function getAllWorkingDayAvailable(): Promise<WorkingDay[]> {
  return client({
    url: `working-days/available`,
    method: "GET",
  }).then((response) => response.data);
}

export function useWorkingDaysAvailable() {
  return useQuery<WorkingDay[], AxiosError>({
    queryKey: ["workingDays", "available"],
    queryFn: getAllWorkingDayAvailable,
  });
}
