import { Converter, PickerModel } from "@ion-datetime-picker/build-tools";

export class DateConverter implements Converter<Date> {
  public convertFromPicker(input: PickerModel | undefined, previousOutput: Date | undefined): Date {
    input = input || {};
    let date = isDate(previousOutput) ? new Date(previousOutput.getTime()) : new Date();
    if (input.year !== undefined) {
      date.setFullYear(input.year);
    }
    if (input.month !== undefined) {
      date.setMonth(input.month - 1);
      date.setMonth(input.month - 1);
    }
    if (input.day !== undefined) {
      date.setDate(input.day);
      date.setDate(input.day);
    }
    if (input.hour !== undefined) {
      date.setHours(input.hour);
    }
    if (input.minute !== undefined) {
      date.setMinutes(input.minute);
    }
    if (input.second !== undefined) {
      date.setSeconds(input.second);
    }
    return date;
  }

  public convertToPicker(input: Date | undefined): PickerModel {
    input = isDate(input) ? input : new Date();
    return {
      year: input.getFullYear(),
      month: input.getMonth() + 1,
      day: input.getDate(),
      hour: input.getHours(),
      minute: input.getMinutes(),
      second: input.getSeconds(),
    };
  }
}

function isDate(input: any): input is Date {
  return input instanceof Date;
}
