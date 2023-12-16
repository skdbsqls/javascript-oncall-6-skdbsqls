class Assign {
  constructor(calendar, weekdayList, weekendList) {
    this.calendar = calendar;
    this.weekdayList = weekdayList;
    this.weekendList = weekendList;
  }

  // 업무 배정하기
  assignWork() {
    this.assignWeekday();
    this.assignWeekend();
    this.closeContinuous();
    return this.calendar;
  }

  // 평일 업무 배정하기
  assignWeekday() {
    for (let i = 0, j = 0; i < this.calendar.length; i++) {
      const weekday = ["월", "화", "수", "목", "금"];

      if (weekday.includes(this.calendar[i].date)) {
        if (j >= this.weekdayList.length) {
          j = 0;
        }
        this.calendar[i].name = this.weekdayList[j];
        j++;
      }
    }
  }

  // 휴일 업무 배정하기
  assignWeekend() {
    for (let i = 0, j = 0; i < this.calendar.length; i++) {
      if (
        this.calendar[i].date === "토" ||
        this.calendar[i].date === "일" ||
        this.calendar[i].holiday === "(휴일)"
      ) {
        if (j >= this.weekendList.length) {
          j = 0;
        }
        this.calendar[i].name = this.weekendList[j];
        j++;
      }
    }
  }

  // 연속 2일 근무 막기
  closeContinuous() {
    let check = true;

    while (check) {
      check = false;
      for (let i = 0; i < this.calendar.length - 2; i++) {
        if (this.calendar[i].name === this.calendar[i + 1].name) {
          const temp = this.calendar[i + 1].name;
          this.calendar[i + 1].name = this.calendar[i + 2].name;
          this.calendar[i + 2].name = temp;
          check = true;
        }
      }
    }
  }
}

export default Assign;
