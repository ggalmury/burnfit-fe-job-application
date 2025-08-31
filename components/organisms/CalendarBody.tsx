import React from "react";
import { View } from "react-native";

import { useCalendarStore } from "@/stores/calendarStore";

import useWeeks from "@/hooks/useWeeks";

import CalendarWeekRow from "@/components/molecules/CalendarWeekRow";

const CalendarBody = () => {
  const currentMonth = useCalendarStore((state) => state.currentMonth);

  const weeks = useWeeks(currentMonth);

  return (
    <View>
      {weeks.map((week) => (
        <CalendarWeekRow key={`week-${week}`} week={week} />
      ))}
    </View>
  );
};

export default CalendarBody;
