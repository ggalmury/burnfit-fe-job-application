import { Text, View } from "react-native";

const WEEKDAY_LABELS: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWeekDayRow = () => {
  const labelColor = (weekDay: string): string => {
    switch (weekDay) {
      case WEEKDAY_LABELS[0]:
        return "#FF3B30";

      case WEEKDAY_LABELS[6]:
        return "#007AFF";

      default:
        return "#b7c2cb";
    }
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {WEEKDAY_LABELS.map((weekday) => (
        <View
          key={`weekday-${weekday}`}
          style={{
            width: 40,
            aspectRatio: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "600", color: labelColor(weekday) }}>{weekday}</Text>
        </View>
      ))}
    </View>
  );
};

export default CalendarWeekDayRow;
