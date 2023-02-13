import { Container, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import PickTimeHeader from "../components/PickTimeHeader";
import PickTimeWrapper from "../components/PickTimeWrapper";
import TimePicker from "../components/TimePicker";
import { Shift } from "../services/type";
import { useCreateReservation } from "../services/useCreateReservation";
import {
  useInvalidatedShiftsAvailable,
  useShiftsAvailable,
} from "../services/useShiftAvailable";
import { useWorkingDay } from "../services/useWorkingDay";

const PickTime = () => {
  const { day } = useParams();

  const workingDay = useWorkingDay(day as string);
  const shifts = useShiftsAvailable(day as string);
  const invalidatedShiftsAvailable = useInvalidatedShiftsAvailable(
    day as string
  );

  const {} = useMutation({
    mutationFn: (test: string) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(test);
        }, 2000);
      });
    },
  });

  const { mutate: createReservationMutation } = useCreateReservation();

  const onCreateReservationMutation = (shift: string) => {
    createReservationMutation(
      {
        user: "Thang Nguyen",
        shift: shift,
      },
      {
        onSuccess: invalidatedShiftsAvailable,
      }
    );
  };

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
          {shifts.data?.map((time: Shift) => (
            <TimePicker
              key={time._id}
              startTime={time.startTime}
              endTime={time.endTime}
              onConfirm={() => onCreateReservationMutation(time._id)}
            />
          ))}
        </Stack>
      </Container>
    </PickTimeWrapper>
  );
};

export default PickTime;
