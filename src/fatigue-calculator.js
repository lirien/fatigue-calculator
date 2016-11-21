class FatigueCalculator {
  triangleNumber(n) {
    return n * (n + 1) / 2;
  }

  fatigueDamage(cardsRemaining, cardsDrawn) {
    let overdraw = cardsDrawn - cardsRemaining;
    if (overdraw <= 0) {
      return 0;
    }

    if(cardsRemaining >= 0) {
      return this.triangleNumber(overdraw);
    }
    return this.triangleNumber(overdraw) - this.triangleNumber(-cardsRemaining);
  }
}

module.exports = FatigueCalculator;
