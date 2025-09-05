class GuessingGame {
  constructor() {
    this.fromVal = 0;
    this.toVal = 0;
    this.lastVal = 0;
    this.counter = 0;
  }

  setRange(min, max) {
    this.fromVal = min;
    this.toVal = max;
  }

  guess() {
    const amountNumbers = this.toVal - this.fromVal;
    const averageVal = this.fromVal + Math.ceil(amountNumbers / 2);

    this.counter += 1;
    this.lastVal = averageVal;

    return averageVal;
  }

  lower() {
    this.toVal = this.lastVal;
  }

  greater() {
    this.fromVal = this.lastVal;
  }
}

module.exports = GuessingGame;
