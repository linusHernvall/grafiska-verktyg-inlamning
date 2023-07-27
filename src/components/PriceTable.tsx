import { createTheme, useMediaQuery } from "@mui/material";
import TablePhone from "./TablePhone";
import TableTabDesk from "./TableTabDesk";

function PriceTable() {
  const theme = createTheme();
  const isWideScreen = useMediaQuery(theme.breakpoints.up("md"));

  return <div>{isWideScreen ? <TableTabDesk /> : <TablePhone />}</div>;
}

export default PriceTable;
