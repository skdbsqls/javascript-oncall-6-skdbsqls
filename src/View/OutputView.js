import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/message.js";

const OutputView = {
  //  업무 배정 결과 출력
  printAssign(month, assign) {
    Console.print(OUTPUT_MESSAGE.assign(month, assign));
  },
  // 공백 출력
  printBlank() {
    Console.print("");
  },
};

export default OutputView;
