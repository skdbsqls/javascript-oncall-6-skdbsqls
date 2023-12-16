import { ERROR_MESSAGE } from "../../constants/message.js";

// 월과 시작 요일 입력 예외 처리
const ListValidate = (input) => {
  InputCheck.checkInput(input);
};

const ListCheck = {
  // 근무자의 닉네임이 중복되는 경우
  checkInput(input) {
    if (!input) {
      throw new Error(ERROR_MESSAGE.invalid);
    }
  },
  // 근무자의 닉네임이 최대 5글자가 아닌 경우
  // 근무자의 수가 최소 5명 ~ 최대 35명이 아닌 경우
};

export default ListValidate;
