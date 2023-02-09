import { Box, Divider } from "@mui/material";
import Calendar from "../components/Calendar";
import ChooseDayWrapper from "../components/ChooseDayWrapper";
import InformationMeeting from "../components/InformationMeeting";

const ChooseDay = () => {
  return (
    <ChooseDayWrapper>
      <InformationMeeting />
      <Divider orientation="vertical" flexItem />
      <Box px="30px" py="25px" width="50%">
        <Calendar />
      </Box>
    </ChooseDayWrapper>
  );
};

export default ChooseDay;
