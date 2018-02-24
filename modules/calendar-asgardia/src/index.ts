import { Calendar } from "@ion-datetime-picker/build-tools";
import { FixedCalendar } from "@ion-datetime-picker/calendar-fixed";

export class AsgardiaCalendar extends FixedCalendar implements Calendar {
  public months = ["January", "February", "March", "April", "May", "June", "Asgard", "July", "August", "September", "October", "November", "December"];
}
