import {
  Box,
  SxProps,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SignUpField from "./SignUpField";

function Footer() {
  const theme = useTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <div>
      <Box sx={footerZoneSx}>
        <Box
          sx={{
            ...footerWrapperSx,
            width: isWideScreen ? "940px" : "440px",
            flexDirection: isWideScreen ? "row" : "column",
            justifyContent: isWideScreen ? "space-between" : "center",
          }}
        >
          <Box sx={footerRowOneSx}>
            <Box>
              <Typography variant="h3" sx={topicSx}>
                ABOUT US
              </Typography>
              <Box sx={{ margin: "5px 240px 0 0" }}>
                <Typography sx={linkSx} variant="h3">
                  Artists
                </Typography>
                <Typography sx={linkSx} variant="h3">
                  Contact
                </Typography>
                <Typography sx={linkSx} variant="h3">
                  News
                </Typography>
              </Box>
            </Box>
            <Box>
              <Typography variant="h3" sx={topicSx}>
                INFORMATION
              </Typography>
              <Box sx={{ marginTop: "5px" }}>
                <Typography sx={linkSx} variant="h3">
                  Prices
                </Typography>
                <Typography sx={linkSx} variant="h3">
                  Shipments
                </Typography>
                <Typography sx={linkSx} variant="h3">
                  FAQ
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{ marginTop: isWideScreen ? "0" : "40px" }}>
            <Typography variant="h3" sx={topicSx}>
              SIGN UP
            </Typography>
            <SignUpField />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

// CSS ----------------------------------------------

const footerZoneSx: SxProps = {
  background: "#000000",
  display: "flex",
  justifyContent: "center",
};

const footerWrapperSx: SxProps = {
  margin: "35px 0",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "940px",
};

const topicSx: SxProps = {
  fontWeight: "bold",
  color: "#FFFFFF",
};

const linkSx: SxProps = {
  color: "#FFFFFF",
  cursor: "pointer",
};

const footerRowOneSx: SxProps = {
  display: "flex",
  justifyContent: "space-between",
};

export default Footer;
