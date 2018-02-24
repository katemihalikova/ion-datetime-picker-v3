import { Converter, PickerModel } from "@ion-datetime-picker/build-tools";

export class IsoStringConverter implements Converter<string> {
  private DATE_REGEXP = /^(?:(?:([+-]?\d{4,})(?:-(\d\d)(?:-(\d\d))?)?|(\d\d)-(\d\d))(?:$|T|\s)|(\d\d)(?:T|\s))/;
  private TIME_REGEXP = /(?:^|T|\s)(?:(\d\d)(?::(\d\d)(?::(\d\d))?)?(?:$|Z|[+-]\d\d(?::|\d)|\s)|(\d\d):(\d\d):(\d\d)\.)/;

  public convertFromPicker(input: PickerModel): string {
    let dateString = "";
    if (input.month === undefined && input.day !== undefined) {
      input.month = 1;
    } else if (input.year === undefined && input.month !== undefined && input.day === undefined) {
      input.day = 1;
    }

    if (input.year !== undefined) {
      dateString += pad(input.year, 4);
    }
    if (input.month !== undefined) {
      if (input.year !== undefined) {
        dateString += "-";
      }
      dateString += pad(input.month);
    }
    if (input.day !== undefined) {
      dateString += "-" + pad(input.day);
    }

    let timeString = "";
    if (input.hour === undefined && (input.minute !== undefined || input.second !== undefined)) {
      input.hour = 0;
    }
    if (input.minute === undefined && input.second !== undefined) {
      input.minute = 0;
    }

    if (input.hour !== undefined) {
      timeString += pad(input.hour);
    }
    if (input.minute !== undefined) {
      timeString += ":" + pad(input.minute);
    }
    if (input.second !== undefined) {
      timeString += ":" + pad(input.second);
    }

    return dateString + (dateString !== "" && timeString !== ""  ? "T" : "") + timeString;
  }

  public convertToPicker(input: string | undefined): PickerModel {
    if (input === undefined) {
      return {};
    }

    let output: PickerModel = {};
    if (this.DATE_REGEXP.test(input)) {
      let parts = this.DATE_REGEXP.exec(input) as RegExpExecArray;
      if (parts[1] !== undefined) {
        output.year = Number(parts[1]);
      }
      if (parts[2] !== undefined) {
        output.month = Number(parts[2]);
      }
      if (parts[3] !== undefined) {
        output.day = Number(parts[3]);
      }
      if (parts[4] !== undefined) {
        output.month = Number(parts[4]);
      }
      if (parts[5] !== undefined) {
        output.day = Number(parts[5]);
      }
      if (parts[6] !== undefined) {
        output.day = Number(parts[6]);
      }
    }
    if (this.TIME_REGEXP.test(input)) {
      let parts = this.TIME_REGEXP.exec(input) as RegExpExecArray;
      if (parts[1] !== undefined) {
        output.hour = Number(parts[1]);
      }
      if (parts[2] !== undefined) {
        output.minute = Number(parts[2]);
      }
      if (parts[3] !== undefined) {
        output.second = Number(parts[3]);
      }
      if (parts[4] !== undefined) {
        output.hour = Number(parts[1]);
      }
      if (parts[5] !== undefined) {
        output.minute = Number(parts[2]);
      }
      if (parts[6] !== undefined) {
        output.second = Number(parts[3]);
      }
    }
    return output;
  }
}

function pad(input: number, length: number = 2) {
  let absInput = String(Math.abs(input));
  let negative = input < 0;
  if (absInput.length >= length) {
    return (input > 9999 ? "+" : "") + String(input);
  }
  return (negative ? "-" : "") + ("000" + absInput).substr(-length);
}
