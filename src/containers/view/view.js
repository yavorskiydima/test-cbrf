import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export const View = ({ data, }) => (
  <Paper style={{ width: "600px" }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell rowSpan={2}>Вероятность</TableCell>
          <TableCell colSpan={2} align="right">
            Количество доменов в решётке
              </TableCell>
          <TableCell rowSpan={2} align="right">
            Количество ячеек в решётке (L;N;M), из них имеющих значение 1
              </TableCell>
        </TableRow>
        <TableRow>
          <TableCell align="right">Всего</TableCell>
          <TableCell align="right">Из них односвязных</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, key) => (
          <TableRow key={key}>
            <TableCell component="th" scope="row">
              {row.ver}
            </TableCell>
            <TableCell align="right">{row.allDomain}</TableCell>
            <TableCell align="right">{row.notOne}</TableCell>
            <TableCell align="right">
              {row.allCell}, {row.allOne}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);
