import { Converter, PickerModel } from "@ion-datetime-picker/build-tools";
import { toAsgardian, toGregorian } from "asgardia-calendar-converter";

export class AsgardiaConverter implements Converter<PickerModel> {
  // @TODO: Make mode choose better (for example put it into constructor and then, when using "useFactory", add params there in example)
  public mode: "feb" | "jun" | "non" = "jun";

  public convertFromPicker(input: PickerModel | undefined): PickerModel {
    if (input === undefined) {
      return {};
    }
    if (input.month === undefined || input.day === undefined) {
      if (input.month !== undefined || input.day !== undefined) {
        throw new Error("Asgardia calendar converter can't be used with model that has month and day, but not both.");
      }
      return input;
    }

    let {year, month, day} = toGregorian({
      year: input.year === undefined ? 1 : input.year,
      month: input.month,
      day: input.day,
    }, this.mode);

    if (input.year !== undefined) {
      return {...input, year, month, day};
    }
    return {...input, month, day};
  }

  public convertToPicker(input: PickerModel | undefined): PickerModel {
    if (input === undefined) {
      return {};
    }
    if (input.month === undefined || input.day === undefined) {
      if (input.month !== undefined || input.day !== undefined) {
        throw new Error("Asgardia calendar converter can't be used with model that has month and day, but not both.");
      }
      return input;
    }

    let {year, month, day} = toAsgardian({
      year: input.year === undefined ? 2017 : input.year,
      month: input.month,
      day: input.day,
    }, this.mode);

    if (input.year !== undefined) {
      return {...input, year, month, day};
    }
    return {...input, month, day};
  }
}
