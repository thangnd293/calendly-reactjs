import { Box, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(251, 252, 253)",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          width: "100%",
          maxWidth: "800px",
          minHeight: "550px",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 1px 8px 0px",
        }}
      >
        <Outlet />
      </Paper>
    </Box>
  );
};

export default MainLayout;
