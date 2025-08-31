import { isSameDay, isToday } from "date-fns";
import { Pressable, Text } from "react-native";

import { useCalendarStore } from "@/stores/calendarStore";

interface CalendarCellProps {
  date: Date;
}

const CalendarCell = ({ date }: CalendarCellProps) => {
  const currentMonth = useCalendarStore((state) => state.currentMonth);
  const selectedDate = useCalendarStore((state) => state.selectedDate);
  const selectDate = useCalendarStore((state) => state.selectDate);

  const day = date.getDate();

  const isCurrentMonth = date.getMonth() === currentMonth.getMonth();
  const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
  const isTodayFocused = isToday(date) && !isSelected;

  const labelColor = (): string => {
    if (isSelected) return "#FFFFFF";

    return isCurrentMonth ? "#333333" : "#CCCCCC";
  };

  return (
    <Pressable
      style={({ pressed }) => [
        {
          width: 40,
          aspectRatio: 1,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 99,
          opacity: pressed ? 0.6 : 1,
        },
        isTodayFocused && { borderWidth: 1.5, borderColor: "#007AFF" },
        isSelected && { backgroundColor: "#007AFF" },
      ]}
      disabled={!isCurrentMonth}
      onPress={() => isCurrentMonth && selectDate(date)}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "500",
          color: labelColor(),
        }}
      >
        {day}
      </Text>
    </Pressable>
  );
};

export default CalendarCell;
