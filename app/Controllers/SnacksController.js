import { ProxyState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";


//Private
function _draw(){
  document.getElementById('moneyTotal').innerHTML = ProxyState.totalMoney
}





export default class SnacksController {

  purchase() {
    snacksService.purchase()
  }

}
