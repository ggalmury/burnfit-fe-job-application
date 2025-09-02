import { View } from "react-native";

import CalendarCell from "@/components/atoms/CalendarCell";

interface CalendarWeekDayRowProps {
  week: Date[];
}

const CalendarWeekRow = ({ week }: CalendarWeekDayRowProps) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingVertical: 4 }}>
      {week.map((date) => (
        <CalendarCell key={`date-${date}`} date={date} />
      ))}
    </View>
  );
};

export default CalendarWeekRow;
