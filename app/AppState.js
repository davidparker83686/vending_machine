import Snack from "./Models/Snacks.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"


// const cheetos = new Snack('Cheetos',1,'42069');
//  const sunchips = new Snack('SunChips',1.25,'19918');
//  const funions = new Snack('Funions',.75,'08370');

class AppState extends EventEmitter {
  totalMoney=0

  snack=[new Snack('Cheetos',1,'42069'),new Snack('SunChips',1.25,'19918'),new Snack('Funions',.75,'08370')]

}







export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
