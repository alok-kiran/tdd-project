import assert from "assert";

class Dollar {
  constructor(amount) {
    this.amount = amount;
  }
  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

let fiver = new Dollar(5);
let tenner = fiver.times(2);
console.log(tenner);
console.log(assert.equal(tenner.amount, 10));
