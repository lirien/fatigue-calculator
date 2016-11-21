const $ = require('jquery');
const noUiSlider = require('no-ui-slider');
const FatigueCalculator = require('./fatigue-calculator');

class FatigueController {
  constructor() {
    this.calculator = new FatigueCalculator();
  }

  initialize() {
    this.userSlider = this.createSlider('.user .slider');
    this.opponentSlider = this.createSlider('.opponent .slider');
    this.cardsSlider = this.createSlider('.cards .slider', { min: 0, max: 16 });

    this.userSlider.noUiSlider.on('update', this.onUpdate.bind(this));
    this.opponentSlider.noUiSlider.on('update', this.onUpdate.bind(this));
    this.cardsSlider.noUiSlider.on('update', this.onUpdate.bind(this));
  }

  onUpdate() {
    this.readInputValues();
    this.updateSliderCounts();
    this.updateDamage();
  }

  createSlider(selector, { min, max } = { min: -10, max: 10 }) {
    let slider = $(selector)[0];

    noUiSlider.create(slider, {
      start: 0,
      orientation: 'vertical',
      range: {
        'min': min,
        'max': max
      },
      tooltips: true,
      pips: {
        mode: 'steps',
        stepped: true,
        density: 5
      },
      step: 1
    });

    return slider;
  }

  readInputValues() {
    this.userCards = Number.parseInt(this.userSlider.noUiSlider.get());
    this.opponentCards = Number.parseInt(this.opponentSlider.noUiSlider.get());
    this.cardsDrawn = Number.parseInt(this.cardsSlider.noUiSlider.get());
  }

  updateSliderCounts() {
    $('.user .count').text(this.userCards);
    $('.opponent .count').text(this.opponentCards);
    $('.cards .count').text(this.cardsDrawn);
  }

  updateDamage() {
    let userDamage = this.calculator.fatigueDamage(
      this.userCards, this.cardsDrawn
    );
    let opponentDamage = this.calculator.fatigueDamage(
      this.opponentCards, this.cardsDrawn + 1
    );

    $('.results .user').text(userDamage);
    $('.results .opponent').text(opponentDamage);
  }
}

module.exports = FatigueController;
