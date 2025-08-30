import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

import { MaterialCommunityIconName } from "@/types/vectorIconName";

const SCREENS: {
  name: string;
  tabBarLabel: string;
  tabBarIconName: MaterialCommunityIconName;
}[] = [
  { name: "home", tabBarLabel: "HOME", tabBarIconName: "home" },
  { name: "calendar", tabBarLabel: "CALENDAR", tabBarIconName: "calendar-month-outline" },
  { name: "library", tabBarLabel: "LIBRARY", tabBarIconName: "dumbbell" },
  { name: "mypage", tabBarLabel: "MY PAGE", tabBarIconName: "account" },
];

const TabsLayout = () => {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#333333", tabBarInactiveTintColor: "#999999" }}
    >
      {SCREENS.map((screen) => {
        const { name, tabBarLabel, tabBarIconName } = screen;

        return (
          <Tabs.Screen
            key={name}
            name={name}
            options={{
              tabBarLabel,
              tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name={tabBarIconName} color={color} size={size} />,
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default TabsLayout;
