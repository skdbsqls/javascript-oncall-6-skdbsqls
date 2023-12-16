// import ListValidate from "../src/util/validation/ListValidate.js";
import MonthAndDayValidate from "../src/util/validation/MonthAndDayValidate.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

describe("월과 시작 요일 입력 값 예외 테스트", () => {
  test.each([["0"], ["1월"], ["13"], ["March"]])(
    "유효하지 않은 월 입력 값인 경우 예외가 발생한다.",
    (input) =>
      expect(() => MonthAndDayValidate(input)).toThrow(ERROR_MESSAGE.invalid)
  );
  test.each([["Mon"], ["화요일"]])(
    "유효하지 않은 시작 요일 입력 값인 경우 예외가 발생한다.",
    (input) =>
      expect(() => MonthAndDayValidate(input)).toThrow(ERROR_MESSAGE.invalid)
  );
});
