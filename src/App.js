import Controller from "./Controller/Controller.js";

class App {
  async run() {
    this.controller = new Controller();
    await this.controller.play();
  }
}

export default App;
