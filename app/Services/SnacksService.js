import { ProxyState } from "../AppState.js";
import Snack from "../Models/Snack.js";


class SnacksService {

  purchase() {
      if(ProxyState.totalmoney>=this.price){
        console.log('purchased')
      }else{
        console.log('need more money')
      }
    }
}




export const snacksService = new SnacksService()