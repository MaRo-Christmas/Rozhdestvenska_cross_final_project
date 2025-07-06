import React, { useContext, useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { ThemeContext } from "../context/ThemeContext";
import { EventCard } from "../components/EventCard/EventCard";
import { fetchPastEvents } from "../api/pastEvents";

export default function PastEventsScreen({ navigation }) {
  const { themeColors } = useContext(ThemeContext);
  const allEvents = useSelector((state) => state.allEvents);

  const [pastEvents, setPastEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPastEvents()
      .then((data) => {
        setPastEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching past events:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View
        style={[styles.container, { backgroundColor: themeColors.background }]}
      >
        <ActivityIndicator size="large" color="#EF5656" />
      </View>
    );
  }

  if (pastEvents.length === 0) {
    return (
      <View
        style={[styles.container, { backgroundColor: themeColors.background }]}
      >
        <Text style={{ color: themeColors.text }}>
          No past events available.
        </Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <FlatList
        data={pastEvents}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <EventCard
            imageUrl={item.imageUrl}
            title={item.title}
            date={item.date}
            onPress={() => navigation.navigate("EventDetails", { event: item })}
          />
        )}
        contentContainerStyle={{ padding: 16, alignItems: "center" }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
