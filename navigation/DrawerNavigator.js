import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { ThemeContext } from "../context/ThemeContext";

import TabNavigator from "./TabNavigator";
import HelpScreen from "../screens/HelpScreen";
import ContactsScreen from "../screens/ContactsScreen";
import LogoutScreen from "../screens/LogoutScreen";
import MyEventsScreen from "../screens/MyEventsScreen";
import PastEventsScreen from "../screens/PastEventsScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
          <DrawerItemList {...props} />
          <View
            style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}
          >
            <DrawerItem
              label="Switch Theme"
              onPress={toggleTheme}
              icon={({ color, size }) => (
                <Ionicons name="color-palette" size={size} color={color} />
              )}
            />
          </View>
        </DrawerContentScrollView>
      )}
      screenOptions={({ route }) => ({
        drawerIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "My Events") {
            iconName = "bookmark";
          } else if (route.name === "Past Events") {
            iconName = "time";
          } else if (route.name === "Help") {
            iconName = "help-circle";
          } else if (route.name === "Contacts") {
            iconName = "call";
          } else if (route.name === "Logout") {
            iconName = "log-out";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        drawerActiveTintColor: "#EF5656",
        drawerInactiveTintColor: "gray",
        drawerActiveBackgroundColor: "#FFE2E5",
        drawerStyle: {
          borderRightColor: "#EF5656",
          borderRightWidth: 1,
        },
      })}
    >
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="My Events" component={MyEventsScreen} />
      <Drawer.Screen name="Past Events" component={PastEventsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="Contacts" component={ContactsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
}
