import { MONTH, DAY } from "../../constants/calendar.js";
import { ERROR_MESSAGE } from "../../constants/message.js";

// 월과 시작 요일 입력 예외 처리
const MonthAndDayValidate = (input) => {
  const [month, day] = input.split(",");

  MonthAndDayCheck.checkMonth(month);
  MonthAndDayCheck.checkDay(day);
};

const MonthAndDayCheck = {
  // 월 입력 값이 1 ~ 12이 아닌 경우
  checkMonth(month) {
    if (!MONTH.includes(month)) {
      throw new Error(ERROR_MESSAGE.invalid);
    }
  },
  // 요일 입력 값이 월 ~ 일이 아닌 경우
  checkDay(day) {
    if (!DAY.includes(day)) {
      throw new Error(ERROR_MESSAGE.invalid);
    }
  },
};

export default MonthAndDayValidate;
