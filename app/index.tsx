import Checkbox from "@/components/checkbox/checkbox";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>AAPL Market Data</Text>
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Checkbox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
