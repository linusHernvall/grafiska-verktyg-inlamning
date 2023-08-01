import { Box, SxProps } from "@mui/material";

function CircleLogo() {
  // CSS ----------------------------------------------

  const logoSx: SxProps = {
    padding: "20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <Box sx={logoSx}>
        <img src="../../images/circle-logo.png" alt="Circle logotype" />
      </Box>
    </div>
  );
}

export default CircleLogo;
