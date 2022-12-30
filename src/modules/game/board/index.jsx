import React from "react";

import Board from "./board";
import { BoardsContainer, GameContainer, LateralContainer } from "./components";
import ShipsContainer from "./shipsContainer";

const GameBoard = () => {
  return (
    <GameContainer>
      <BoardsContainer>
        <Board boardKey="enemy_board"></Board>
        <Board boardKey="player_board"></Board>
      </BoardsContainer>
      <LateralContainer>
        <ShipsContainer />
      </LateralContainer>
    </GameContainer>
  );
};

export default GameBoard;
