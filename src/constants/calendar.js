const CALENDAR = Object.freeze({
  1: Array.from({ length: 31 }, (_, index) => index + 1),
  2: Array.from({ length: 28 }, (_, index) => index + 1),
  3: Array.from({ length: 31 }, (_, index) => index + 1),
  4: Array.from({ length: 30 }, (_, index) => index + 1),
  5: Array.from({ length: 31 }, (_, index) => index + 1),
  6: Array.from({ length: 30 }, (_, index) => index + 1),
  7: Array.from({ length: 31 }, (_, index) => index + 1),
  8: Array.from({ length: 31 }, (_, index) => index + 1),
  9: Array.from({ length: 30 }, (_, index) => index + 1),
  10: Array.from({ length: 31 }, (_, index) => index + 1),
  11: Array.from({ length: 30 }, (_, index) => index + 1),
  12: Array.from({ length: 31 }, (_, index) => index + 1),
});

const MONTH = Object.freeze([
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
]);

const DAY = Object.freeze(["월", "화", "수", "목", "금", "토", "일"]);

const HOLIDAY = Object.freeze({
  1: [1],
  3: [1],
  5: [5],
  6: [6],
  8: [15],
  10: [3, 9],
  12: [25],
});
export { CALENDAR, MONTH, DAY, HOLIDAY };
