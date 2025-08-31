import { View } from "react-native";

import CalendarHeader from "@/components/molecules/CalendarHeader";
import CalendarWeekDayRow from "@/components/molecules/CalendarWeekDayRow";
import CalendarBody from "@/components/organisms/CalendarBody";

const Calendar = () => {
  return (
    <View style={{ gap: 4 }}>
      <CalendarHeader />
      <CalendarWeekDayRow />
      <CalendarBody />
    </View>
  );
};

export default Calendar;
