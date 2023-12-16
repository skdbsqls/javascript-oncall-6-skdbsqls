import List from "../Model/List.js";
import Assign from "../Model/Assign.js";
import Calendar from "../Model/Calendar.js";
import InputView from "../View/InputView.js";
import OutputView from "../View/OutputView.js";
import MonthAndDay from "../Model/MonthAndDay.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  #month;
  #day;
  #weekdayList;
  #weekendList;
  #assign;

  async play() {
    await this.requestMonthAndDay();
    await this.requestList();
    this.getAssign();
  }

  // 월과 시작 요일 입력
  async requestMonthAndDay() {
    try {
      const input = await InputView.readMonthAndDay();
      this.#month = new MonthAndDay(input).getMonth();
      this.#day = new MonthAndDay(input).getDay();
    } catch (error) {
      Console.print(error.message);
      return this.requestMonthAndDay();
    }
  }

  // 평일 & 휴일 비상 근무 순서 입력
  async requestList() {
    await this.requestWeekdayList();
    await this.requestWeekendList();
  }

  async requestWeekdayList() {
    try {
      const weekday = await InputView.readWeekdayList();
      this.#weekdayList = new List(weekday).getList();
    } catch (error) {
      Console.print(error.message);
      return this.requestList();
    }
  }
  async requestWeekendList() {
    try {
      const weekend = await InputView.readWeekendList();
      this.#weekendList = new List(weekend).getList();
    } catch (error) {
      Console.print(error.message);
      return this.requestList();
    }
  }

  // 비상 근무일 배정
  getAssign() {
    const calendar = new Calendar(this.#month, this.#day).getCalendar();

    this.#assign = new Assign(
      calendar,
      this.#weekdayList,
      this.#weekendList
    ).assignWork();
  }
}

export default Controller;
