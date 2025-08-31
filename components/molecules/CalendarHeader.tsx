import { format } from "date-fns";
import { Text, View } from "react-native";

import { useCalendarStore } from "@/stores/calendarStore";

import IconButton from "@/components/atoms/buttons/IconButton";

const CalendarHeader = () => {
  const currentMonth = useCalendarStore((state) => state.currentMonth);
  const prevMonth = useCalendarStore((state) => state.prevMonth);
  const nextMonth = useCalendarStore((state) => state.nextMonth);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 16 }}>
      <IconButton iconName="chevron-left" color="#007AFF" onPress={prevMonth} />
      <Text style={{ fontSize: 18, fontWeight: "600" }}>{format(currentMonth, "MMMM yyyy")}</Text>
      <IconButton iconName="chevron-right" color="#007AFF" onPress={nextMonth} />
    </View>
  );
};

export default CalendarHeader;
