import {
  Box,
  SxProps,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SubmitButton from "./SubmitButton";

function SignUpField() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  // CSS ----------------------------------------------

  const inputWrapperSx: SxProps = {
    marginTop: "5px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    minWidth: "380px",
  };

  return (
    <div>
      <Box sx={inputWrapperSx}>
        <TextField
          sx={{
            "& input": {
              height: "35px",
              padding: "0px 10px",
              background: "#FFF",
              borderRadius: "3px",
            },
            width: isWideScreen ? "230px" : "290px",
          }}
          id="outlined-basic"
          variant="outlined"
          placeholder="example@email.com"
        />

        <SubmitButton />
      </Box>
    </div>
  );
}

export default SignUpField;
