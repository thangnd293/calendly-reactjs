import { Stack } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const ContentWrapper = ({ children }: Props) => {
  return (
    <Stack
      direction="row"
      sx={{
        minHeight: "inherit",
      }}
    >
      {children}
    </Stack>
  );
};

export default ContentWrapper;
