import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Тут можеш додати валідацію або реєстрацію
    navigation.navigate("Profile"); // ✅ Перехід на ProfileScreen
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../images/registration.png")}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Welcome!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
        <Text style={styles.loginButtonText}>Register</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>Or continue with</Text>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={{ fontSize: 18, color: "white" }}>G</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={{ fontSize: 18, color: "white" }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={{ fontSize: 18, color: "white" }}>f</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: "center" },
  image: { width: "100%", height: 250, marginBottom: 20 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  loginButton: {
    backgroundColor: "#EF5656",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  loginButtonText: { color: "white", fontSize: 16, fontWeight: "bold" },
  footerText: { textAlign: "center", marginBottom: 12, color: "#555" },
  socialContainer: { flexDirection: "row", justifyContent: "space-around" },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#EF5656",
    alignItems: "center",
    justifyContent: "center",
  },
});
