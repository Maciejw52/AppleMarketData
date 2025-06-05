import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onToggle: () => void;
};

export default function Checkbox({ label, checked, onToggle }: CheckboxProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.container}
      onPress={onToggle}
    >
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && (
          <Image
            style={styles.checkmark}
            source={require("@/assets/images/vector.svg")}
          />
        )}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#0A0A7C",
    justifyContent: "center",
    alignItems: "center",
  },
  checkedBox: {
    backgroundColor: "#0A0A7C",
    borderColor: "#0A0A7C",
  },
  checkmark: {
    height: 8,
    width: 8,
  },
  label: {
    marginLeft: 6,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 400,
    color: "#1E1E1E",
  },
});
