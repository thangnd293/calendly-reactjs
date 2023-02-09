import { Stack, Typography } from "@mui/material";

interface Props {
  icon: React.ReactNode;
  text: string;
}
const DescriptionWithIcon = ({ icon, text }: Props) => {
  return (
    <Stack color="GrayText" direction="row" spacing="6px">
      {icon}
      <Typography color="GrayText" fontWeight="700">
        {text}
      </Typography>
    </Stack>
  );
};

export default DescriptionWithIcon;
