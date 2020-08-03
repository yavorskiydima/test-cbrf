import React from "react";
import { Container, Row, NoCell, Cell, } from './board.styled'

export const Board = ({ board, color, changeValue }) => (
  <Container>
    {board.map((item, index1) => (
      <Row key={index1} margin={index1 * 30}>
        {item.map((cell, index2) =>
          cell === null ? (
            <NoCell key={index2} />
          ) : (
              <Cell
                key={index2}
                col={color[index1][index2]}
                onClick={() => changeValue(index1, index2)}
              >
                <span>{cell}</span>
              </Cell>
            )
        )}
      </Row>
    ))}
  </Container>
)
