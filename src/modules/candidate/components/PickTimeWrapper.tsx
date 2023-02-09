import { Box } from "@mui/material";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const PickTimeWrapper = ({ children }: Props) => {
  return (
    <Box px="30px" py="25px">
      <Box
        sx={{
          position: "relative",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PickTimeWrapper;
