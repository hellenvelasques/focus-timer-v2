export default function() {
  // QUANDO O REPOSITÓRIO FICAR PUBLICO, DESCOMENTAR E RETIRAR AS DEBAIXOS
  // const buttonPressAudio = new Audio ('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/audios_button-press.wav');
  // const kitchenTimer = new Audio ('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/audios_kichen-timer.mp3');
  // const songForest = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Floresta.wav');
  // const songRain = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Chuva.wav');
  // const songCoffeeShop = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Cafeteria.wav');
  // const songFirePlace = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Lareira.wav');

  const buttonPressAudio = new Audio ('../sounds/audios_button-press.wav');
  const kitchenTimer = new Audio ('../sounds/audios_kichen-timer.mp3');
  const songForest = new Audio('../sounds/Floresta.wav');
  const songRain = new Audio('../sounds/Chuva.wav');
  const songCoffeeShop = new Audio('../sounds/Cafeteria.wav');
  const songFirePlace = new Audio('../sounds/Lareira.wav');

  songForest.loop = true;
  songRain.loop = true;
  songCoffeeShop.loop = true;
  songFirePlace.loop = true;

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function resetSounds() {
    songForest.pause(),
    songRain.pause(),
    songCoffeeShop.pause(),
    songFirePlace.pause()
  }

  return {
    pressButton,
    timeEnd,
    songForest,
    songRain,
    songCoffeeShop,
    songFirePlace,
  };
}