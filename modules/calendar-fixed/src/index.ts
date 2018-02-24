import { Calendar } from "@ion-datetime-picker/build-tools";

export class FixedCalendar implements Calendar {
  public months = ["January", "February", "March", "April", "May", "June", "Sol", "July", "August", "September", "October", "November", "December"];
  public weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  private normalMonth = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28]];
  private leapMonth = this.normalMonth.concat([[29]]);

  public getMonthsOfYear() {
    return this.months;
  }

  public getDaysOfMonth(year: number, month: number): number[][] {
    if (month === 13 || (month === 6 && this.isYearLeap(year))) {
      return this.leapMonth;
    }
    return this.normalMonth;
  }

  public getNumberOfDaysInMonth(year: number, month: number) {
    if (month === 13 || (month === 6 && this.isYearLeap(year))) {
      return 29;
    }
    return 28;
  }

  public getLabelOfDayOfMonth(_year: number, month: number, day: number): string {
    if (month === 13 && day === 29) {
      return "Year Day";
    }
    if (month === 6 && day === 29) {
      return "Leap Day";
    }
    return String(day);
  }

  public getWeekDays() {
    return this.weekDays;
  }

  private isYearLeap(year: number): boolean {
    year += 16;
    if (year % 400 === 0) {
      return true;
    }
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    }
    return false;
  }
}
