import MonthAndDayValidate from "../util/validation/MonthAndDayValidate.js";

class MonthAndDay {
  constructor(input) {
    this.#validate(input);
    this.monthAndDay = input;
  }

  // 예외 처리
  #validate(input) {
    MonthAndDayValidate(input);
  }

  getMonth() {
    const [month, day] = this.monthAndDay.split(",");
    return month;
  }

  getDay() {
    const [month, day] = this.monthAndDay.split(",");
    return day;
  }
}

export default MonthAndDay;
