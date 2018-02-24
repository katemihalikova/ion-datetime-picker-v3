import { Converter, PickerModel } from "@ion-datetime-picker/build-tools";

export class DateUtcConverter implements Converter<Date> {
  public convertFromPicker(input: PickerModel | undefined, previousOutput: Date | undefined): Date {
    input = input || {};
    let date = isDate(previousOutput) ? new Date(previousOutput.getTime()) : new Date();
    if (input.year !== undefined) {
      date.setUTCFullYear(input.year);
    }
    if (input.month !== undefined) {
      date.setUTCMonth(input.month - 1);
      date.setUTCMonth(input.month - 1);
    }
    if (input.day !== undefined) {
      date.setUTCDate(input.day);
      date.setUTCDate(input.day);
    }
    if (input.hour !== undefined) {
      date.setUTCHours(input.hour);
    }
    if (input.minute !== undefined) {
      date.setUTCMinutes(input.minute);
    }
    if (input.second !== undefined) {
      date.setUTCSeconds(input.second);
    }
    return date;
  }

  public convertToPicker(input: Date | undefined): PickerModel {
    input = isDate(input) ? input : new Date();
    return {
      year: input.getUTCFullYear(),
      month: input.getUTCMonth() + 1,
      day: input.getUTCDate(),
      hour: input.getUTCHours(),
      minute: input.getUTCMinutes(),
      second: input.getUTCSeconds(),
    };
  }
}

function isDate(input: any): input is Date {
  return input instanceof Date;
}
