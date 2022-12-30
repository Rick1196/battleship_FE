import React from "react";
import { useState } from "react";
import { BoardContainer, RowContainer, Square } from "./components";

const coordinate_statuses = {
  empty: "empty",
  ship: "ship",
  hit: "hit",
};
5;
const baseCoordinateData = {
  status: coordinate_statuses.empty,
  content: [],
};
const baseBoardContentMatrix = Array(8).fill(
  Array(8).fill(baseCoordinateData, 0, 8),
  0,
  8
);
const Board = ({ boardContentMatrix = baseBoardContentMatrix, boardKey }) => {
  const [boardState] = useState(boardContentMatrix);
  return (
    <BoardContainer>
      {boardState.map((row, rowIndex) => {
        return (
          <RowContainer key={`${boardKey}_row_container_${rowIndex}`}>
            {row.map((square, colIndex) => (
              <Square key={`${boardKey}_row_container_${rowIndex}_${colIndex}`}>
                {rowIndex}
                {colIndex}
              </Square>
            ))}
          </RowContainer>
        );
      })}
    </BoardContainer>
  );
};
export default Board;
