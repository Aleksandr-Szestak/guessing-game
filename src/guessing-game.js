class GuessingGame {

    constructor() {
        this.fromVal = 0;
        this.toVal   = 0;
        this.lastVal = 0;
        this.counter = 0;
    }

    setRange(min, max) {
        this.fromVal = min;
        this.toVal = max;
    }

    guess() {
        let amountNumbers = this.toVal - this.fromVal;
        let averageVal = this.fromVal + Math.ceil(amountNumbers / 2);

        this.counter++;
        this.lastVal = averageVal;
        //console.log(this.counter, averageVal);

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
