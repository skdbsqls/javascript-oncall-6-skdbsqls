import ListValidate from "../util/validation/ListValidate.js";

class List {
  constructor(input) {
    this.#validate(input);
    this.list = input;
  }

  // 예외 처리
  #validate(input) {
    ListValidate(input);
  }

  getList() {
    return this.list.split(",");
  }
}

export default List;
