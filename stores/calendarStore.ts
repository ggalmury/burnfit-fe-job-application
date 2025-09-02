import { addMonths, startOfMonth } from "date-fns";
import { create } from "zustand";

interface CalendarState {
  currentMonth: Date;
  selectedDate: Date | null;
  setMonth: (date: Date) => void;
  prevMonth: () => void;
  nextMonth: () => void;
  selectDate: (date: Date) => void;
}

export const useCalendarStore = create<CalendarState>((set) => ({
  currentMonth: startOfMonth(new Date()),
  selectedDate: null,
  setMonth: (date) => set({ currentMonth: startOfMonth(date) }),
  prevMonth: () => set((state) => ({ currentMonth: startOfMonth(addMonths(state.currentMonth, -1)) })),
  nextMonth: () => set((state) => ({ currentMonth: startOfMonth(addMonths(state.currentMonth, 1)) })),
  selectDate: (date) => set((state) => ({ selectedDate: date === state.selectedDate ? null : date })),
}));
