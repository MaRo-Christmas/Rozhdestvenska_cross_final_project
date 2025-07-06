import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
} from "react-native";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { CategoryBadge } from "@/components/CategoryBadge/CategoryBadge";
import { EventCard } from "@/components/EventCard/EventCard";
import { EventListItem } from "@/components/EventListItem/EventListItem";
import { fetchEvents } from "../api/api";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch } from "react-redux";
import { setEvents as setEventsRedux } from "../redux/allEventsSlice";

export default function ExploreScreen({ navigation }) {
  const { themeColors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const categories = [
    "All Events",
    "Concerts",
    "Technology",
    "Lectures",
    "Tours",
  ];

  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All Events");

  const handleNavigate = useCallback(
    (event) => {
      navigation.navigate("EventDetails", { event });
    },
    [navigation]
  );

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
  };

  const filteredEvents =
    activeCategory === "All Events"
      ? events
      : events.filter((event) => event.category === activeCategory);

  useEffect(() => {
    fetchEvents()
      .then((data) => {
        setEvents(data);
        dispatch(setEventsRedux(data));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setError("Failed to load events");
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return (
      <View
        style={[
          styles.loaderContainer,
          { backgroundColor: themeColors.background },
        ]}
      >
        <ActivityIndicator size="large" color="#EF5656" />
        <Text style={[styles.loaderText, { color: themeColors.text }]}>
          Loading events...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          styles.loaderContainer,
          { backgroundColor: themeColors.background },
        ]}
      >
        <Text style={[styles.errorText, { color: "red" }]}>{error}</Text>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { backgroundColor: themeColors.background }]}
    >
      <SearchBar placeholder="Search events" onChangeText={() => {}} />

      <View style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryBadge
            key={index}
            title={category}
            isActive={category === activeCategory}
            onPress={() => handleCategoryPress(category)}
          />
        ))}
      </View>

      {activeCategory === "All Events" && (
        <>
          <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
            Upcoming events
          </Text>
          <View style={styles.flatListWrapper}>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={filteredEvents.slice(0, 5)}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <EventCard
                  imageUrl={item.imageUrl}
                  title={item.title}
                  date={item.date}
                  onPress={() => handleNavigate(item)}
                />
              )}
              contentContainerStyle={styles.flatListContainer}
              style={{ flexGrow: 0 }}
            />
          </View>
        </>
      )}

      <Text style={[styles.sectionTitle, { color: themeColors.text }]}>
        {activeCategory === "All Events"
          ? "All events"
          : `${activeCategory} events`}
      </Text>

      {filteredEvents.length > 0 ? (
        filteredEvents.map((event) => (
          <EventListItem
            key={event.id}
            imageUrl={event.imageUrl}
            title={event.title}
            date={event.date}
            onPress={() => handleNavigate(event)}
          />
        ))
      ) : (
        <Text
          style={{
            color: themeColors.text,
            textAlign: "center",
            marginTop: 16,
          }}
        >
          No events found for this category.
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  categories: {
    flexDirection: "row",
    marginVertical: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loaderText: {
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    fontSize: 16,
  },
  flatListContainer: {
    paddingVertical: 8,
    paddingLeft: 16,
  },
  flatListWrapper: {
    minHeight: 250,
  },
});
