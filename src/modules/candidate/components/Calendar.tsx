import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate = useNavigate();

  const [value] = React.useState<Dayjs | null>(null);
  const availableDates = [dayjs(), dayjs().add(1, "day")];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        displayStaticWrapperAs="desktop"
        value={value}
        onChange={(_) => {}}
        renderInput={(params) => <TextField {...params} />}
        disablePast
        shouldDisableDate={(day) =>
          !availableDates.find((date) => date.isSame(day, "day"))
        }
        onAccept={(value) => navigate(`/${value?.format("DD-MM-YYYY")}`)}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
