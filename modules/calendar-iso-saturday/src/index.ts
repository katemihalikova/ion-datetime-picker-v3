import { Calendar } from "@ion-datetime-picker/build-tools";
import { ISOMondayCalendar } from "@ion-datetime-picker/calendar-iso-monday";

export class ISOSaturdayCalendar extends ISOMondayCalendar implements Calendar {
  public weekDays = ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"];

  protected getFirstWeekDayOfMonth(year: number, month: number): number {
    return (super.getFirstWeekDayOfMonth(year, month) + 2) % 7 || 7;
  }
}
