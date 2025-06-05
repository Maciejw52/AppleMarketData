import Checkbox from "@/components/checkbox/checkbox";
import StockChart from "@/components/stock-chart/stock-chart";
import StockHeader from "@/components/stock-header/stock-header";
import { SafeAreaView, StyleSheet, View } from "react-native";

export default function StockScreen() {
  const stockTicker = "AAPL";

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingBottom: 25 }}>
        <StockHeader ticker={stockTicker} />
      </View>

      <StockChart />
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    paddingTop: 10,
  },
});
