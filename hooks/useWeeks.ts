import { eachDayOfInterval, eachWeekOfInterval, endOfMonth, endOfWeek, startOfMonth } from "date-fns";
import { useMemo } from "react";

const useWeeks = (currentMonth: Date): Date[][] => {
  return useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);

    const weekStarts = eachWeekOfInterval(
      {
        start: monthStart,
        end: monthEnd,
      },
      { weekStartsOn: 0 },
    );

    return weekStarts.map((weekStart) => eachDayOfInterval({ start: weekStart, end: endOfWeek(weekStart, { weekStartsOn: 0 }) }));
  }, [currentMonth]);
};

export default useWeeks;
