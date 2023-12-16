import { ERROR_MESSAGE } from "../../constants/message.js";

// 월과 시작 요일 입력 예외 처리
const ListValidate = (input) => {
  const inputArr = input.split(",");

  ListCheck.checkDuplicate(inputArr);
  ListCheck.checkRange(inputArr);
  ListCheck.checkLength(inputArr);
};

const ListCheck = {
  // 근무자의 닉네임이 중복되는 경우
  checkDuplicate(inputArr) {
    const set = [...new Set(inputArr)];

    if (inputArr.length !== set.length) {
      throw new Error(ERROR_MESSAGE.invalid);
    }
  },
  // 근무자의 수가 최소 5명 ~ 최대 35명이 아닌 경우
  checkRange(inputArr) {
    if (inputArr.length < 5 || inputArr.length > 35) {
      throw new Error(ERROR_MESSAGE.invalid);
    }
  },
  // 근무자의 닉네임이 최소 0글자 ~ 최대 5글자가 아닌 경우
  checkLength(inputArr) {
    inputArr.forEach((name) => {
      if (name.length < 1 || name.length > 5) {
        throw new Error(ERROR_MESSAGE.invalid);
      }
    });
  },
};

export default ListValidate;
