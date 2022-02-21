import React, { useState } from "react";
import { Chart } from "react-google-charts";

const options = {
  sankey: {
    node: {
      label: {
        fontName: "sans-serif",
        fontSize: 16,
        color: "#222",
        bold: true,
        italic: false,
      },
    },
  },
};

const defaultValue = `Brazil,Portugal,5
Brazil,France,1
Brazil,Spain,1
Brazil,England,1
Canada,Portugal,1
Canada,France,5
Canada,England,1
Mexico,Portugal,1
Mexico,France,1
Mexico,Spain,5
Mexico,England,1
USA,Portugal,1
USA,France,1
USA,Spain,1
USA,England,5
Portugal,Angola,2
Portugal,Senegal,1
Portugal,Morocco,1
Portugal,South Africa,3
France,Angola,1
France,Senegal,3
France,Mali,3
France,Morocco,3
France,South Africa,1
Spain,Senegal,1
Spain,Morocco,3
Spain,South Africa,1
England,Angola,1
England,Senegal,1
England,Morocco,2
England,South Africa,7
South Africa,China,5
South Africa,India,1
South Africa,Japan,3
Angola,China,5
Angola,India,1
Angola,Japan,3
Senegal,China,5
Senegal,India,1
Senegal,Japan,3
Mali,China,5
Mali,India,1
Mali,Japan,3
Morocco,China,5
Morocco,India,1
Morocco,Japan,3
`;

const HEAD = [
  "From",
  "To",
  "Weight",
  { type: "string", role: "style" },
] as const;
type Head = typeof HEAD;
type Row = [string, string, number, string];
type Data = [Head, ...Row[]];

function useTransform(seed: string): Data {
  return [
    HEAD,
    ...seed
      .trim()
      .split("\n")
      .map((row) => row.split(/(?:,|\t)/))
      .map(
        (row) =>
          [
            row[0],
            row[1],
            parseFloat(row[2]),
            row[3]?.toLowerCase() === "true" ? "color: red" : "",
          ] as Row
      ),
  ];
}

function App() {
  const [dataStr, setData] = useState(defaultValue);
  const data = useTransform(dataStr);

  return (
    <div>
      <div>
        <textarea
          style={{ width: 640, height: "4em" }}
          value={dataStr}
          onChange={(e) => setData(e.currentTarget.value)}
        ></textarea>
      </div>
      <Chart
        chartType="Sankey"
        width="100%"
        height="640px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default App;
