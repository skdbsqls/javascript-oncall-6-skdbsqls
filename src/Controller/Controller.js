import InputView from "../View/InputView.js";
import MonthAndDay from "../Model/MonthAndDay.js";
import { Console } from "@woowacourse/mission-utils";

class Controller {
  #month;
  #day;

  async play() {
    await this.requestMonthAndDay();
    // await this.requestList();
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
  //   async requestList() {
  //     try {
  //       const input = await InputView.readWeekdayList();
  //       const input2 = await InputView.readWeekendList();
  //       //   this.#name = new Input(input).getName();
  //     } catch (error) {
  //       Console.print(error.message);
  //       return this.requestList();
  //     }
  //   }
}

export default Controller;
