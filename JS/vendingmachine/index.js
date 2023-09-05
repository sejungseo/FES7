// 모듈단위로 쪼개진 자바스크립트 파일을 한 군데 모아놓은 곳 *모듈(자바스크립트를 쪼개놓은 것)

import ColaGenerator from "./js/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
await colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();