export interface Calendar {
  getMonthsOfYear(year: number): string[];
  getDaysOfMonth(year: number, month: number): CalendarDayMap;
  getNumberOfDaysInMonth(year: number, month: number): number;
  getWeekDays(year: number, month: number): string[];
  getLabelOfDayOfMonth(year: number, month: number, day: number): string;
}

export type CalendarDayMap = Array<Array<number | undefined>>;

export interface PickerModel {
  year?: number;
  month?: number;
  day?: number;
  hour?: number;
  minute?: number;
  second?: number;
}

export interface Converter<T> {
  convertFromPicker(input: PickerModel | undefined, previousOutput: T | undefined): T;
  convertToPicker(input: T | undefined): PickerModel;
}
