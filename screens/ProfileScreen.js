import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../context/ThemeContext";

export default function ProfileScreen() {
  const { themeColors } = useContext(ThemeContext);

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <Text style={[styles.welcomeText, { color: themeColors.text }]}>
        Welcome to the community of our city's cultural space!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
