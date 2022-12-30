import React, { useState } from "react";
import { ShipContainer } from "./components";

const ships = [
  {
    length: 2,
    type: "destroyer",
  },
  {
    length: 3,
    type: "submarine",
  },
  {
    length: 3,
    type: "cruiser",
  },
  {
    length: 4,
    type: "battleship",
  },
  {
    length: 5,
    type: "carrier",
  },
];

const ShipsContainer = () => {
  const [shipsState] = useState(ships);
  const handleDragStart = (event, index, ship) => {
    console.log(event, index, ship);
  };
  const handleDragEnd = (event, index, ship) => {
    console.log("on end", event, index, ship);
    console.log(typeof event.target.classList);
    event.target.classList.remove("dragging");
  };
  const handleDragEnter = (event) => {
    console.log("on enter", event);
    event.target.classList.add("dragging");
  };
  return (
    <>
      {shipsState.map((ship, index) => {
        return (
          <ShipContainer
            onDragStart={(event) => handleDragStart(event, index, ship)}
            onDragEnd={(event) => handleDragEnd(event, index, ship)}
            onDragEnter={(event) => handleDragEnter(event)}
            key={`ship_${index}`}
            draggable
          >
            {index}
          </ShipContainer>
        );
      })}
    </>
  );
};
export default ShipsContainer;
