import { ArrowBack } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import { Navigate, useNavigate } from "react-router-dom";
import { getMonthName } from "../../../utils/function";

interface Props {
  isLoading: boolean;
  isFetched: boolean;
  day?: string;
}

const PickTimeHeader = ({ isLoading, isFetched, day }: Props) => {
  const navigate = useNavigate();
  console.log(!isLoading && !day);

  if (isFetched && !day) return <Navigate to={"/"} />;

  const month = getMonthName(dayjs(day).month());
  const fullDate = dayjs(day).format("MMMM DD, YYYY");

  return (
    <>
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
        {month}
      </Typography>
      <Typography align="center" color="GrayText" fontSize="14px">
        {fullDate}
      </Typography>
      <Typography mt="20px" align="center" color="GrayText" fontWeight="600">
        Times are Indochina Time - VietNam
      </Typography>
    </>
  );
};

export default PickTimeHeader;
