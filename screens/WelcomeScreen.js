import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { PrimaryButton } from "@/components/PrimaryButton/PrimaryButton";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../images/welcome.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.contentContainer}>
        <View style={styles.bottomBlock}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Find your moment in our space</Text>
            <Text style={styles.subtitle}>
              An app that opens the door to events in our cultural space.
              Discover, register, and stay connected.
            </Text>
          </View>
          <PrimaryButton
            title="GO"
            onPress={() => navigation.navigate("Drawer")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  bottomBlock: {
    backgroundColor: "white",
    padding: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    minHeight: "33%",
    justifyContent: "space-between",
  },
  textContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
});
