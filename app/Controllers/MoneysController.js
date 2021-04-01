import { ProxyState } from "../AppState.js";
import { moneysService } from "../Services/MoneysService.js";


//Private
function _draw(){
  document.getElementById('moneyTotal').innerHTML = ProxyState.totalMoney
}





export default class MoneysController {

  addMoney() {
    MoneysService.addMoney()
  }

}
