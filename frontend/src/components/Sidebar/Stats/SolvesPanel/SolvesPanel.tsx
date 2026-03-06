import {
  Box,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { StyledTableCell } from "../../../ui/TableCell";
import { SessionSection } from "./Session/SessionSection";
import type { Solve } from "../../../../utils/types";
import { useSolves } from "../../../../hooks/useSolves";

export const SolvesPanel = () => {
  const { data: solves } = useSolves();

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "0.5rem",
        overflowY: "auto",
        maxHeight: "27rem",
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <SessionSection />
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Box>Solves: {solves ? solves.length : 0}</Box>
        </Box>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell> </StyledTableCell>
              <StyledTableCell>
                <b>Time</b>
              </StyledTableCell>
              <StyledTableCell>
                <b>ao5</b>
              </StyledTableCell>
              <StyledTableCell>
                <b>ao12</b>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {solves &&
              solves.map((solve: Solve, index: number) => (
                <TableRow key={solve.id}>
                  <StyledTableCell>{solves.length - index}</StyledTableCell>
                  <StyledTableCell>{solve.finalTime}</StyledTableCell>
                  <StyledTableCell>{solve?.ao5 || "-"}</StyledTableCell>
                  <StyledTableCell>{solve?.ao12 || "-"}</StyledTableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
