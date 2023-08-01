import { SxProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SubmitButton from "./SubmitButton";

export default function InputField() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      component="form"
      sx={{
        ...inputFieldWrapperSx,
        margin: isWideScreen ? "0 0 5px" : "0 25px 5px",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography sx={topicSx} variant="h3">
        Name
      </Typography>
      <TextField
        sx={{
          ...inputSx,
          "& input": { height: "35px", padding: "0px 10px" },
          width: isWideScreen ? "380px" : "360px",
        }}
        id="outlined-basic"
        label=""
        variant="outlined"
      />
      <Typography sx={topicSx} variant="h3">
        Email
      </Typography>
      <TextField
        sx={{
          ...inputSx,
          "& input": { height: "35px", padding: "0px 10px" },
          width: isWideScreen ? "380px" : "360px",
        }}
        id="outlined-basic"
        label=""
        variant="outlined"
      />
      <Typography sx={topicSx} variant="h3">
        Message
      </Typography>
      <TextField
        sx={{
          ...messageSx,
          "& .MuiInputBase-input": {
            minHeight: "220px",
            textAlign: "left",
          },
          width: isWideScreen ? "780px" : "590px",
        }}
        id="outlined-basic"
        variant="outlined"
        multiline
      />
      <SubmitButton />
    </Box>
  );
}

// CSS ----------------------------------------------

const inputFieldWrapperSx: SxProps = {
  display: "flex",
  flexDirection: "column",
};

const topicSx: SxProps = {
  margin: "0 0 5px",
  fontWeight: "bold",
};

const inputSx: SxProps = {
  margin: "0 0 20px",
  height: "35px",
  borderRadius: "50px",
};

const messageSx: SxProps = {
  margin: "0 0 20px",
  width: "590px",
};

// const buttonSx: SxProps = {
//   background: "#40128b",
//   borderRadius: "0",
//   width: "140px",
//   height: "35px",
//   marginBottom: "75px",
// };
