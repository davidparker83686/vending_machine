import { ProxyState } from "../AppState.js";
import Snack from "../Models/Snacks.js";


class SnacksService {
  addValue() {
    ProxyState.totalMoney+= .25
    console.log(ProxyState.totalMoney)
  }
  purchase() {
      if(ProxyState.totalmoney>=this.price){
        console.log('purchased')
      }else{
        console.log('need more money')
      }
    }
}




export const snacksService = new SnacksService()