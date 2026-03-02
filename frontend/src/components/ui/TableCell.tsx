import { TableCell } from "@mui/material";
import type { FC, ReactNode } from "react";
import { colorPallete } from "../../utils/constants";

interface StyledTableCellProps {
  children: ReactNode;
}
export const StyledTableCell: FC<StyledTableCellProps> = ({ children }) => {
  return (
    <TableCell
      sx={{
        paddingY: "0.5rem",
        borderBottomColor: colorPallete.tableCellColor,
      }}
    >
      {children}
    </TableCell>
  );
};
