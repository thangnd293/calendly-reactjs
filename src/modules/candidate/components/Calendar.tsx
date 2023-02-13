import { CircularProgress, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import dayjs, { Dayjs } from "dayjs";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useWorkingDaysAvailable } from "../services/useWorkingDaysAvailable";

function shouldDisableDate(days: Dayjs[] | undefined) {
  return (day: Dayjs) => {
    return !days?.find((date) => {
      return date.isSame(day, "day");
    });
  };
}

const Calendar = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useWorkingDaysAvailable();
  const [value] = React.useState<Dayjs | null>(null);

  const availableDays = data?.map((day) => dayjs(day.day));

  const onSelectDate = (date: Dayjs | null) => {
    const selectedItem = data?.find((item) =>
      dayjs(item.day).isSame(date, "day")
    );
    if (selectedItem) navigate(`/${selectedItem._id}`);
  };

  return isLoading ? (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <CircularProgress />
    </Stack>
  ) : (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(_) => {}}
        renderInput={(params) => <TextField {...params} />}
        disablePast
        shouldDisableDate={shouldDisableDate(availableDays)}
        onAccept={onSelectDate}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
