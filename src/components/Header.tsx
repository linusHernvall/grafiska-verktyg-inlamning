import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, SxProps, useTheme } from "@mui/material";

function Header() {
  // CSS ----------------------------------------------
  const theme = useTheme();

  const headerZoneSx: SxProps = {
    height: "80px",
    width: "100%",
    background: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "10",
    boxShadow: "0px 3px 3px rgba(0,0,0, 0.23)",
  };

  const headerWrapperSx: SxProps = {
    height: "80px",
    width: "100%",
    maxWidth: "940px",
    margin: "0 25px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cartSx: SxProps = {
    marginRight: "40px",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(1.2)",
    },
  };

  const menuSx: SxProps = {
    cursor: "pointer",
    transition: "transform 0.2s ease",
    "&:hover": {
      color: theme.palette.primary.main,
      transform: "scale(1.2)",
    },
  };

  return (
    <div>
      <Box sx={headerZoneSx}>
        <Box sx={headerWrapperSx}>
          <Box>
            <img src="../../images/lhcp-textlogo.png" alt="A text logotype" />
          </Box>

          <Box sx={{ display: "flex", marginLeft: "auto" }}>
            <Box sx={cartSx}>
              <ShoppingCartIcon />
            </Box>

            <Box sx={menuSx}>
              <MenuIcon />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default Header;
