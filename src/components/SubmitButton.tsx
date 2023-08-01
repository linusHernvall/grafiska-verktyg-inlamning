import { Button, SxProps, Typography, useTheme } from "@mui/material";

function SubmitButton() {
  // CSS ----------------------------------------------
  const theme = useTheme();

  const buttonSx: SxProps = {
    width: "140px",
    height: "35px",
    marginBottom: "75px",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  };

  return (
    <div>
      <Button sx={buttonSx} variant="contained">
        <Typography variant="h3">SUBMIT</Typography>
      </Button>
    </div>
  );
}

export default SubmitButton;
