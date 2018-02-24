import { Converter, PickerModel } from "@ion-datetime-picker/build-tools";

export class FixedConverter implements Converter<PickerModel> {
  public convertFromPicker(input: PickerModel | undefined, previousOutput: PickerModel | undefined): PickerModel {
    if (input === undefined) {
      return {};
    }
    if (input.month === undefined || input.day === undefined) {
      if (input.month !== undefined || input.day !== undefined) {
        throw new Error("Fixed calendar converter can't be used with model that has month or day, but not both.");
      }
      return input;
    }

    let year = input.year === undefined ? 2017 : input.year;
    let month = input.month;
    let day = (month - 1) * 28 + input.day;
    if (isYearLeap(year) && month > 6) {
      day++;
    }

    month = 1;
    let daysInMonths = [31, isYearLeap(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let m = 0; m < 12; m++) {
      if (day > daysInMonths[m]) {
        day -= daysInMonths[m];
        month++;
      } else {
        break;
      }
    }

    return {...(previousOutput || {}), ...input, month, day};
  }

  public convertToPicker(input: PickerModel | undefined): PickerModel {
    if (input === undefined) {
      return {};
    }
    if (input.month === undefined || input.day === undefined) {
      if (input.month !== undefined || input.day !== undefined) {
        throw new Error("Fixed calendar converter can't be used with model that has month and day, but not both.");
      }
      return input;
    }

    let year = input.year === undefined ? 2017 : input.year;
    let month = input.month;
    let day = input.day + [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].slice(0, month - 1).reduce((a, b) => a + b, 0);
    if (isYearLeap(year) && month > 2) {
      day++;
    }

    month = 1;
    for (let m = 0; m < 13; m++) {
      let daysInMonth = ((isYearLeap(year) && m === 5) || m === 12) ? 29 : 28;
      if (day > daysInMonth) {
        day -= daysInMonth;
        month++;
      } else {
        break;
      }
    }

    return {...input, month, day};
  }
}

function isYearLeap(year: number): boolean {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  }
  return false;
}
