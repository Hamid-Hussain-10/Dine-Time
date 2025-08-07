import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar, View } from "react-native";

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content"  />

      <Tabs
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#171717',
          },
          headerTintColor: '#ffffff',
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#ffa200",
          tabBarStyle: {
            backgroundColor: "#171717",
            height: 75,
            paddingBottom: 12,
          },
          tabBarLabelStyle: {
            fontSize: 14,
            paddingBottom: 5,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="history"
          options={{
            title: "History",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="history" color={color} size={24} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={24} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
