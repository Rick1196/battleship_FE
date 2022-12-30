import styled from "styled-components";

export const BoardContainer = styled.div`
  border: solid 1px #000;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex-grow: 0.5;
`;
export const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1em;
  height: 90vh;
  padding: 2em;
  justify-content: space-between;
`;
export const BoardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  align-content: stretch;
  gap: 1em;
  height: inherit;
  flex-grow: 0.5;
`;
export const LateralContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #000;
  flex-wrap: nowrap;
  align-content: stretch;
  justify-content: space-around;
  align-items: stretch;
  flex-grow: 0.1;
  gap: 1em;
`;

export const Square = styled.div`
  border: solid 1px #000;
  width: 100%;
`;
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
`;

export const ShipContainer = styled.div`
  border: solid 1px #000;
  width: 100%;
  height: 100%;
  &.dragging {
    opacity: 0.5;
    cursor: grabbing;
  }
  &:hover {
    cursor: grab;
  }
`;
