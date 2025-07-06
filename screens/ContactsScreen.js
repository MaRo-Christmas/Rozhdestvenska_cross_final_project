import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";

export default function ContactsScreen() {
  const handleOpenMap = () => {
    const url =
      "https://www.google.com/maps/place/Kyiv,+62,+Bohdana+Khmelnytskoho+St.";
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleOpenMap}>
        <Image
          source={require("../images/map.png")}
          style={styles.mapImage}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <Image
        source={require("../images/building.png")}
        style={styles.buildingImage}
        resizeMode="cover"
      />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>CULTURAL EVENT SPACE</Text>

        <Text style={styles.subTitle}>ADDRESS</Text>
        <Text style={styles.infoText}>Kyiv, 62, Bohdana Khmelnytskoho St.</Text>

        <Text style={styles.subTitle}>Mode:</Text>
        <Text style={styles.infoText}>
          Mon.-Thu. 12:00-20:00{"\n"}Fr.-Sun. 12:00 - 23:00
        </Text>

        <Text style={styles.subTitle}>tel.:</Text>
        <Text style={styles.infoText}>+380999999999</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
  },
  mapImage: {
    width: "100%",
    height: 250,
  },
  buildingImage: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  infoContainer: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 4,
  },
});
