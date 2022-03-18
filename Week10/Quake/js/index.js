import QuakesController from '/WDD330/Week10/Quake/QuakesController.js';
import buildNavigation from '/WDD330/Week10/Quake/routing.js';

const navElement = document.getElementById('mainNav');
buildNavigation(navElement);

// const myQuakesController = new QuakesController('#quakeList');
// myQuakesController.getQuakesByRadius();