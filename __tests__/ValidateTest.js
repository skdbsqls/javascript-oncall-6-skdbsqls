import MonthAndDayValidate from "../src/util/validation/MonthAndDayValidate.js";
import ListValidate from "../src/util/validation/ListValidate.js";
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

describe("비상 근무 순서 입력 값 예외 테스트", () => {
  test("근무자의 닉네임이 중복되는 경우 예외가 발생한다.", () => {
    const input = "허브,쥬니,말랑,허브,라온";

    expect(() => ListValidate(input)).toThrow(ERROR_MESSAGE.invalid);
  });
  test("근무자의 수가 최소 5명, 최대 35명이 아닌 경우 예외가 발생한다.", () => {
    const input = "허브,쥬니,말랑";

    expect(() => ListValidate(input)).toThrow(ERROR_MESSAGE.invalid);
  });
  test.each(["허브,쥬니,말랑,준", "우아한테크코스,쥬니,말랑,준"])(
    "근무자의 닉네임이 최소 0글자, 최대 5글자가 아닌 경우 예외가 발생한다.",
    (input) => expect(() => ListValidate(input)).toThrow(ERROR_MESSAGE.invalid)
  );
});
