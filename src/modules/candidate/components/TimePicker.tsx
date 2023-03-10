import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";

interface Props {
  startTime: string;
  endTime: string;
  onConfirm: () => void;
}

const TimePicker = ({ startTime, endTime, onConfirm: _onConfirm }: Props) => {
  const [isSelected, setSelected] = useState(false);
  const onSelected = () => {
    setSelected(true);
  };

  const onUnselected = () => {
    setSelected(false);
  };

  const onConfirm = () => {
    _onConfirm();
  };

  const timePickerStates = {
    selected: (
      <Stack direction="row" justifyContent="space-between" spacing="10px">
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          onClick={onUnselected}
        >
          {startTime} - {endTime}
        </Button>
        <Button variant="contained" fullWidth onClick={onConfirm}>
          Confirm
        </Button>
      </Stack>
    ),
    unselected: (
      <Box
        component="button"
        sx={(theme) => ({
          width: "100%",
          padding: "10px 20px",
          borderRadius: "5px",
          border: `1px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.main,
          textAlign: "center",
          cursor: "pointer",
          backgroundColor: "transparent",
          "&:hover": {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.primary.contrastText,
          },
        })}
        onClick={onSelected}
      >
        {startTime} - {endTime}
      </Box>
    ),
  };

  return timePickerStates[isSelected ? "selected" : "unselected"];
};

export default TimePicker;
