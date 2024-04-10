import React, { useState, useEffect } from "react";

const TimesTable = () => {
  const [data, setData] = useState([]);
  const [highlightedNumber, setHighlightedNumber] = useState(null);

  useEffect(() => {
    const fetchTimesTable = async () => {
      const response = await fetch("http://127.0.0.1:5000/times-table");
      const data = await response.json();
      setData(data);
    };

    fetchTimesTable();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th></th> {}
          {Array.from({ length: 12 }, (_, i) => (
            <th key={i}>{i + 1}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{rowIndex + 1}</th> {}
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className={cell === highlightedNumber ? "highlight" : ""}
                onClick={() => setHighlightedNumber(cell)}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TimesTable;
