import { Button, SxProps, Typography } from "@mui/material";

function SubmitButton() {
  return (
    <div>
      <Button sx={buttonSx} variant="contained">
        <Typography variant="h3">SUBMIT</Typography>
      </Button>
    </div>
  );
}

export default SubmitButton;

// CSS ----------------------------------------------

const buttonSx: SxProps = {
  width: "140px",
  height: "35px",
  marginBottom: "75px",
};
