import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StockHeaderProps {
  ticker: string;
}

const StockHeader = ({ ticker }: StockHeaderProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/apple-logo.svg")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{ticker} Market Data</Text>
      </View>
    </View>
  );
};

export default StockHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    paddingLeft: 8,
  },
  headerText: {
    fontSize: 32,
    lineHeight: 48,
  },
  image: {
    width: 51,
    height: 47,
  },
});
