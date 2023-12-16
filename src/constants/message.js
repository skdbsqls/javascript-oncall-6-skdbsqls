const INPUT_MESSAGE = Object.freeze({
  monthAndDay: "비상 근무를 배정할 월과 시작 요일을 입력하세요> ",
  weekdayList: "평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ",
  weekendList: "휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ",
});

const OUTPUT_MESSAGE = Object.freeze({});

const ERROR_MESSAGE = Object.freeze({
  invalid: "[ERROR] 유효하지 않은 입력 값입니다. 다시 입력해 주세요.",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
