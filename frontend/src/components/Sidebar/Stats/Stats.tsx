import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SolvesPanel } from "./SolvesPanel/SolvesPanel";
import { StyledTableCell } from "../../ui/TableCell";
import { Seperator } from "../../ui/Seperator";

interface Category {
  name: string;
  current: string;
  best: string;
}

export const Stats = () => {
  const categories: Category[] = [
    {
      name: "time",
      current: "4.95",
      best: "3.28",
    },
    {
      name: "mo3",
      current: "4.95",
      best: "3.28",
    },
    {
      name: "ao5",
      current: "4.95",
      best: "3.28",
    },
    {
      name: "ao12",
      current: "4.95",
      best: "3.28",
    },
    {
      name: "ao100",
      current: "4.95",
      best: "3.28",
    },
  ];
  return (
    <>
      <Box sx={{ padding: "0.5rem" }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell> </StyledTableCell>
                <StyledTableCell>Current</StyledTableCell>
                <StyledTableCell>Best</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((solve) => (
                <TableRow key={solve.name}>
                  <StyledTableCell>{solve.name}</StyledTableCell>
                  <StyledTableCell>{solve.current}</StyledTableCell>
                  <StyledTableCell>{solve.best}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Seperator sx={{ marginTop: "1rem" }} />
      <SolvesPanel />
    </>
  );
};
