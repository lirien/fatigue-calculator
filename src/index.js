const $ = require('jquery');
const FatigueController = require('./fatigue-controller');

$(() => {
  window.controller = new FatigueController();
  window.controller.initialize();
});
