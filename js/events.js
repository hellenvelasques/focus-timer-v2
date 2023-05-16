
import { buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet, 
  buttonAddMinutes,
  buttonRemoveMinutes,
  cardButtonForest,
  cardButtonRain,
  cardButtonCoffeeShop,
  cardButtonFireplace
  } from './elements.js';

export default function ({controls, timer, sound}) {
  buttonPlay.addEventListener('click', () => {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });
  
  buttonPause.addEventListener('click', () => {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });
  
  buttonStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });
  
  buttonSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes();
  
    if (!newMinutes) {
      timer.reset();
      return;
    };
    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
  
  buttonAddMinutes.addEventListener('click', () => {
    timer.addMinutes();
    sound.pressButton();
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  });

  buttonRemoveMinutes.addEventListener('click', () => {
    timer.removeMinutes();
    sound.pressButton();
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  });

  cardButtonForest.addEventListener('click', () => {
    cardButtonRain.checked = false;
    cardButtonCoffeeShop.checked = false;
    cardButtonFireplace.checked = false;

    sound.songRain.pause();
    sound.songCoffeeShop.pause();
    sound.songFirePlace.pause();

    if(cardButtonForest.checked === true){
      sound.songForest.play();
      sound.songForest.loop = true;
    } else {
      sound.songForest.pause();
    };
  });

  cardButtonRain.addEventListener('click', () => {
    cardButtonForest.checked = false;
    cardButtonCoffeeShop.checked = false;
    cardButtonFireplace.checked = false;

    sound.songForest.pause();
    sound.songCoffeeShop.pause();
    sound.songFirePlace.pause();

    if(cardButtonRain.checked === true) {
      sound.songRain.play();
      sound.songRain.loop = true;
    } else {
      sound.songRain.pause();
    };
  });
  
  cardButtonCoffeeShop.addEventListener('click', () => {
    cardButtonForest.checked = false;
    cardButtonRain.checked = false;
    cardButtonFireplace.checked = false;

    sound.songForest.pause();
    sound.songRain.pause();
    sound.songFirePlace.pause();

    if(cardButtonCoffeeShop.checked === true) {
      sound.songCoffeeShop.play();
      sound.songCoffeeShop.loop = true;
    } else {
      sound.songCoffeeShop.pause();
    };

  });

  cardButtonFireplace.addEventListener('click', () => {
    cardButtonForest.checked = false;
    cardButtonRain.checked = false;
    cardButtonCoffeeShop.checked = false;

    sound.songForest.pause();
    sound.songRain.pause();
    sound.songCoffeeShop.pause();

    if(cardButtonFireplace.checked === true) {
      sound.songFirePlace.play();
      sound.songFirePlace.loop = true;
    } else {
      sound.songFirePlace.pause();
    };
  });
};