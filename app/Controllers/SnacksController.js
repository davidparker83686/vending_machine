import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


//Private
function _draw(){
  document.getElementById('moneyTotal').innerHTML = ProxyState.totalMoney
}





export default class SnacksController {
  // constructor() 
  // {
  //   ProxyState.on("snacks", _draw);
  //   _draw()
  // }
  addValue() {
    snacksService.addValue()
  }

}
