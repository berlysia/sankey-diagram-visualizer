import React, { useState } from "react";
import { ResponsiveSankey } from "@nivo/sankey";

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

type Data = React.ComponentProps<typeof ResponsiveSankey>["data"];
function useTransform(seed: string): Data {
  const rows = seed
    .trim()
    .split("\n")
    .map((row) => row.split(/(?:,|\t)/));
  return {
    nodes: rows
      .flatMap((x) => [x[0], x[1]])
      .reduce((a, x) => (a.includes(x) ? a : a.concat(x)), [] as string[])
      .map((id) => ({ id })),
    links: rows.map((row) => ({
      source: row[0],
      target: row[1],
      value: parseFloat(row[2]),
      startColor: row[3]?.toLowerCase() === "true" ? "#f00" : undefined,
      endColor: row[3]?.toLowerCase() === "true" ? "#f00" : undefined,
    })),
  };
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
      <div style={{ width: "100%", height: "640px" }}>
        <ResponsiveSankey
          data={data}
          margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
          align="justify"
          colors={{ scheme: "category10" }}
          nodeOpacity={1}
          nodeHoverOthersOpacity={0.35}
          nodeThickness={18}
          nodeSpacing={24}
          nodeBorderWidth={0}
          nodeBorderColor={{
            from: "color",
            modifiers: [["darker", 0.8]],
          }}
          nodeBorderRadius={3}
          linkOpacity={0.5}
          linkHoverOthersOpacity={0.1}
          linkContract={3}
          enableLinkGradient
          labelPosition="outside"
          labelOrientation="vertical"
          labelPadding={16}
          labelTextColor={{
            from: "color",
            modifiers: [["darker", 1]],
          }}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              translateX: 130,
              itemWidth: 100,
              itemHeight: 14,
              itemDirection: "right-to-left",
              itemsSpacing: 2,
              itemTextColor: "#999",
              symbolSize: 14,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
