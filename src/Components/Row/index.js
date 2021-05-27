import React, { useState } from "react";
import Block from "../Block";
import initialBlocks from "../../constants";
import successBlocks from "../../success";

export default function Row() {
  const [boardBlocks, setBoardBlocks] = useState(initialBlocks);

  const handleMove = (blockValue, i, rowValue, rowIndex) => {
    let empty;
    boardBlocks.forEach((rowValue, rowIndex) => {
      return rowValue.forEach((blockValue, i) => {
        if (!blockValue) {
          empty = [rowIndex, i];
        }
      });
    });

    const canBeMoved = [
      [empty[0], empty[1] - 1],
      [empty[0], empty[1] + 1],
      [empty[0] - 1, empty[1]],
      [empty[0] + 1, empty[1]],
    ];

    let canMove = false;
    canBeMoved.forEach((move) => {
      if (rowIndex === move[0] && i === move[1]) {
        canMove = true;
      }
    });

    if (canMove) {
      const newBoardBlocks = [...boardBlocks];
      newBoardBlocks[rowIndex][i] = null;
      newBoardBlocks[empty[0]][empty[1]] = blockValue;
      setBoardBlocks(newBoardBlocks);
    }
    if (!canMove) {
      alert("Can't be moved");
    }
    if (checkSuccess()) {
      alert("Success!");
    }
  };

  const checkSuccess = () => {
    let success = true;
    boardBlocks.forEach((rowValue, rowIndex) => {
      rowValue.forEach((blockValue, i) => {
        if (blockValue !== successBlocks[rowIndex][i]) {
          success = false;
        }
      });
    });
    return success;
  };

  return (
    <div className="board">
      {boardBlocks.map((rowValue, rowIndex) => (
        <Block
          rowValue={rowValue}
          rowIndex={rowIndex}
          handleMove={handleMove}
        />
      ))}
    </div>
  );
}
