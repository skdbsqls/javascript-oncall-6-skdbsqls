import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/message.js";

const InputView = {
  // 월과 시작 요일 입력
  async readMonthAndDay() {
    const monthAndDay = await Console.readLineAsync(INPUT_MESSAGE.monthAndDay);
    return monthAndDay;
  },
  // 평일 비상 근무 순번 입력
  async readWeekdayList() {
    const weekdayList = await Console.readLineAsync(INPUT_MESSAGE.weekdayList);
    return weekdayList;
  },
  // 월과 시작 요일 입력
  async readWeekendList() {
    const weekendList = await Console.readLineAsync(INPUT_MESSAGE.weekendList);
    return weekendList;
  },
};

export default InputView;
