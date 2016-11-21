class FatigueCalculator {
  triangleNumber(n) {
    return n * (n + 1) / 2;
  }

  fatigueDamage(cardsRemaining, cardsDrawn) {
    if(cardsRemaining >= 0) {
      return this.triangleNumber(cardsDrawn - cardsRemaining);
    }
    return this.triangleNumber(cardsDrawn - cardsRemaining) - this.triangleNumber(-cardsRemaining);
  }
}

module.exports = FatigueCalculator;
