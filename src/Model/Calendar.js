import { CALENDAR, DAY, HOLIDAY } from "../constants/calendar.js";

class Calendar {
  #calendar;
  constructor(month, day) {
    this.month = month;
    this.day = day;
    this.#calendar = [];
  }

  // 해당되는 월의 배열 가져오기
  getMonth() {
    return CALENDAR[this.month];
  }

  // 법정 공휴일 유무 판단하기
  addHoliday() {
    if (HOLIDAY[this.month]) {
      HOLIDAY[this.month].forEach((day) => {
        this.#calendar[day - 1].holiday += "(휴일)";
      });
    }
  }

  // 시작 요일을 가지고 달력 만들기
  getCalendar() {
    const startDayIndex = DAY.indexOf(this.day);

    this.#calendar = [];
    const month = this.getMonth();

    for (let i = 0; i < month.length; i++) {
      const index = (startDayIndex + i) % DAY.length;
      this.#calendar.push({ day: month[i], date: DAY[index], holiday: "" });
    }
    this.addHoliday();
    return this.#calendar;
  }
}

export default Calendar;
