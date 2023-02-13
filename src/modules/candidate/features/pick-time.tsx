import { Container, Stack, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PickTimeHeader from "../components/PickTimeHeader";
import PickTimeWrapper from "../components/PickTimeWrapper";
import TimePicker from "../components/TimePicker";
import { createReservation } from "../services/useCreateReservation";
import { useShiftsAvailable } from "../services/useShiftAvailable";
import { useWorkingDay } from "../services/useWorkingDay";

const PickTime = () => {
  const { day } = useParams();

  const workingDay = useWorkingDay(day as string);
  const { isLoading, data, isSuccess } = useShiftsAvailable(day as string);

  const queryClient = useQueryClient();

  const createReservationMutation = useMutation({
    mutationFn: createReservation,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["working-days", day, "shifts", "available"],
      }),
  });

  return (
    <PickTimeWrapper>
      <PickTimeHeader
        isLoading={workingDay.isLoading}
        isFetched={workingDay.isFetched}
        day={workingDay.data?.day}
      />
      <Container
        sx={{
          marginTop: "20px",
          width: "60%",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography align="center" fontWeight="600">
            Select a Time
          </Typography>
        </Stack>

        <Stack spacing="10px">
          {data?.map((time) => (
            <TimePicker
              key={time._id}
              time={time.startTime}
              onConfirm={() => {
                createReservationMutation.mutate({
                  user: "Thang Nguyen",
                  shift: time._id,
                });
              }}
            />
          ))}
        </Stack>
      </Container>
    </PickTimeWrapper>
  );
};

export default PickTime;
