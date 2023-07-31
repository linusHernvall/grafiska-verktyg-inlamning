import { Box, SxProps, Typography } from "@mui/material";
import InputField from "./InputField";

function ContactForm() {
  return (
    <div>
      <Box sx={contactZoneSx}>
        <Typography sx={{ margin: "95px 0 20px" }} variant="h2">
          CONTACT US
        </Typography>
        <Box sx={contactWrapperSx}>
          <InputField />
        </Box>
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const contactZoneSx: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const contactWrapperSx: SxProps = {
  width: "100%",
  maxWidth: "780px",
  margin: "0 25px",
};

export default ContactForm;
