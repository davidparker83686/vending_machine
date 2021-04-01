import SnacksController from "./Controllers/SnacksController.js";
import MoneysController from "./Controllers/MoneysController.js";

class App {
  snacksController = new SnacksController();
  moneysController = new MoneysController();

}

window["app"] = new App();
