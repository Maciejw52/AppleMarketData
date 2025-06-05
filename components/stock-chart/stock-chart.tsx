import { fetchStockData, StockDataItem } from "@/api/stockApi";
import archivo from "@/assets/fonts/Archivo-VariableFont.ttf";
import { useFont } from "@shopify/react-native-skia";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { CartesianChart, Line } from "victory-native";

interface StockChartProps {
  visibleLines: Record<CheckboxLabel, boolean>;
}

const lineConfig = {
  Open: { key: "open", color: "#0A0A7C" },
  High: { key: "high", color: "#E8618C" },
  Low: { key: "low", color: "#22CCB2" },
  Close: { key: "close", color: "#7F55E0" },
} as const;

export const StockChart = ({ visibleLines }: StockChartProps) => {
  const font = useFont(archivo, 14);
  const [data, setData] = useState<StockDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Not playing ball with the zooming
  // const transformState = useChartTransformState({
  //   scaleX: 1,
  //   scaleY: 1,
  // });

  useEffect(() => {
    fetchStockData()
      .then((fetchedData) => setData(fetchedData))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, []);

  if (!font) return null;

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );

  const activeYKeys = Object.entries(visibleLines)
    .filter(([, visible]) => visible)
    .map(([key]) => key.toLowerCase());

  return (
    <View style={styles.container}>
      <CartesianChart
        data={data}
        xKey="date"
        yKeys={activeYKeys}
        // transformState={transformState}
        axisOptions={{ font, formatYLabel: (v) => `$${v}` }}
        padding={{ left: 10, right: 10, top: 10, bottom: 10 }}
      >
        {({ points }) => (
          <>
            {Object.entries(visibleLines).map(([label, visible]) => {
              if (!visible) return null;

              const { key, color } =
                lineConfig[label as keyof typeof lineConfig];
              return (
                <Line
                  key={key}
                  points={points[key]}
                  color={color}
                  strokeWidth={2}
                />
              );
            })}
          </>
        )}
      </CartesianChart>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 307,
    minWidth: "100%",
    backgroundColor: "#DEE1E6",
    paddingRight: 21,
    paddingLeft: 14,
    borderRadius: 10,
    borderColor: "#BDC1CA",
    borderWidth: 1,
  },
});
