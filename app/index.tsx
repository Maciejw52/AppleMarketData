import Checkbox from "@/components/checkbox/checkbox";
import StockChart from "@/components/stock-chart/stock-chart";
import StockHeader from "@/components/stock-header/stock-header";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CheckboxLabel, checkboxLabels } from "./types";

export default function StockScreen() {
  // Would come in via as prop for screen
  const stockTicker = "AAPL";

  const [checkboxOptions, setCheckboxOptions] = useState<
    Record<CheckboxLabel, boolean>
  >({
    Open: false,
    Close: false,
    Low: false,
    High: false,
  });

  const toggleOption = (label: CheckboxLabel) =>
    setCheckboxOptions((prev) => ({ ...prev, [label]: !prev[label] }));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContaienr}>
        <StockHeader ticker={stockTicker} />
      </View>

      <View style={styles.chartContainer}>
        <StockChart />
      </View>

      <View style={styles.filtersContainer}>
        <Text style={styles.filtersHeading}>Display</Text>

        {checkboxLabels.map((label) => (
          <Checkbox
            key={label}
            label={label}
            checked={checkboxOptions[label]}
            onToggle={() => toggleOption(label)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 16,
  },
  headerContaienr: { paddingBottom: 25 },
  chartContainer: { paddingBottom: 20 },
  filtersContainer: { width: "100%", gap: 7 },
  filtersHeading: { fontWeight: "700", fontSize: 14, lineHeight: 22 },
});
