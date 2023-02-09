import { AccessTimeFilled, Videocam } from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";
import DescriptionWithIcon from "./DescriptionWithIcon";

const InformationMeeting = () => {
  return (
    <Box px="30px" py="25px" width="50%">
      <Typography color="GrayText">Thang Nguyen</Typography>
      <Typography variant="h1">Phan bien TLCN 2022</Typography>

      <Stack mt="24px" spacing="12px">
        <DescriptionWithIcon icon={<AccessTimeFilled />} text={"30 min"} />
        <DescriptionWithIcon
          icon={<Videocam />}
          text={"Web conferencing details provided upon confirmation."}
        />
      </Stack>
      <Stack mt="20px">
        <Typography>
          Các nhóm chọn một lịch phù hợp cho nhóm, khi đến giờ nhóm chọn thì cả
          nhóm join vào link Teams bên dưới.
        </Typography>
        <Typography>
          Lưu ý: chuẩn bị demo trong 20p và có 10p trả lời câu hỏi phản biện.
          Cần nộp báo cáo bản mềm trước giờ báo cáo.
        </Typography>
      </Stack>
    </Box>
  );
};

export default InformationMeeting;
