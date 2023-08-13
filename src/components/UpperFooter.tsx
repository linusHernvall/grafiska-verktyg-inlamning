import { Box, SxProps, useMediaQuery, useTheme } from "@mui/material";

function UpperFooter() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // CSS ----------------------------------------------

  const upperFooterWrapperSx: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  };

  const topShadowSx: SxProps = {
    height: "1px",
    boxShadow: "0px 3px 3px rgba(0,0,0, 0.23)",
  };
  return (
    <div>
      <Box sx={topShadowSx} />
      <Box sx={upperFooterWrapperSx}>
        <img
          src={
            isWideScreen
              ? "../../images/lh-logotype-small.png"
              : "../../images/lh-logotype.png"
          }
          alt="LH Custom Picks logotype"
        />
      </Box>
    </div>
  );
}

export default UpperFooter;
