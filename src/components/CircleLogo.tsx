import { Box, SxProps } from "@mui/material";

function CircleLogo() {
  return (
    <div>
      <Box sx={logoSx}>
        <img src="../../images/circle-logo.png" alt="Circle logotype" />
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const logoSx: SxProps = {
  padding: "20px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default CircleLogo;
