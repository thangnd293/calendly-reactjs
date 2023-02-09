import { ArrowBack } from "@mui/icons-material";
import {
  Container,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import PickTimeWrapper from "../components/PickTimeWrapper";
import TimePicker from "../components/TimePicker";

const PickTime = () => {
  const navigate = useNavigate();
  return (
    <PickTimeWrapper>
      <IconButton
        color="primary"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        onClick={() => navigate(-1)}
      >
        <ArrowBack />
      </IconButton>
      <Typography variant="h3" align="center" color="GrayText">
        Wednesday
      </Typography>
      <Typography align="center" color="GrayText" fontSize="14px">
        June 28, 2017
      </Typography>
      <Typography mt="20px" align="center" color="GrayText" fontWeight="600">
        Times are Pacific Time - US & Canada
      </Typography>
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
          <Stack direction="row" alignItems="center" spacing="0">
            <Typography>am/pm</Typography>

            <FormControlLabel
              control={<Switch defaultChecked />}
              label="24 hr"
            />
          </Stack>
        </Stack>
        <Stack spacing="10px">
          {Array.from({ length: 6 }).map((_, index) => (
            <TimePicker
              key={index}
              time="08:30am"
              onConfirm={() => console.log("confirm")}
            />
          ))}
        </Stack>
      </Container>
    </PickTimeWrapper>
  );
};

export default PickTime;
