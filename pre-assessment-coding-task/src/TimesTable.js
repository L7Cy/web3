import React, { useState, useEffect } from "react";

const TimesTable = () => {
  const [data, setData] = useState([]);
  const [highlightedNumber, setHighlightedNumber] = useState(null);
  const [highlightedCoords, setHighlightedCoords] = useState({
    row: null,
    col: null,
  });

  useEffect(() => {
    const fetchTimesTable = async () => {
      const response = await fetch("http://127.0.0.1:5000/times-table");
      const data = await response.json();
      setData(data);
    };

    fetchTimesTable();
  }, []);

  const handleClick = (rowIndex, cellIndex, cellValue) => {
    setHighlightedCoords({ row: rowIndex, col: cellIndex });
    setHighlightedNumber(cellValue);
  };

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {Array.from({ length: 12 }, (_, i) => (
            <th
              key={i}
              className={highlightedCoords.col === i ? "row-col-highlight" : ""}
            >
              {i + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th
              className={
                highlightedCoords.row === rowIndex ? "row-col-highlight" : ""
              }
            >
              {rowIndex + 1}
            </th>
            {row.map((cell, cellIndex) => {
              const isHighlightedNumber = cell === highlightedNumber;
              const isRowOrColHighlight =
                highlightedCoords.row === rowIndex ||
                highlightedCoords.col === cellIndex;
              const className = isHighlightedNumber
                ? "highlight"
                : isRowOrColHighlight
                ? "row-col-highlight"
                : "";

              return (
                <td
                  key={cellIndex}
                  className={className}
                  onClick={() => handleClick(rowIndex, cellIndex, cell)}
                >
                  {cell}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimesTable;
