import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Calendar from "@/components/organisms/Calendar";

const CalendarScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 24 }}>
        <Calendar />
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;
