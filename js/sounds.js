export default function() {
  // QUANDO O REPOSITÓRIO FICAR PUBLICO, DESCOMENTAR E RETIRAR AS DEBAIXOS
  // const buttonPressAudio = new Audio ('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/audios_button-press.wav');
  // const kitchenTimer = new Audio ('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/audios_kichen-timer.mp3');
  // const songForest = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Floresta.wav');
  // const songRain = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Chuva.wav');
  // const songCoffeeShop = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Cafeteria.wav');
  // const songFirePlace = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Lareira.wav');

  const buttonPressAudio = new Audio ('../sounds/audios_button-press.mp3');
  const kitchenTimer = new Audio ('../sounds/audios_kichen-timer.mp3');
  const forestAudio = new Audio('../sounds/Floresta.mp3');
  const rainAudio = new Audio('../sounds/Chuva.mp3');
  const coffeeAudio = new Audio('../sounds/Cafeteria.mp3');
  const fireplaceAudio = new Audio('../sounds/Lareira.mp3');

  forestAudio.loop = true
  rainAudio.loop = true
  coffeeAudio.loop = true
  fireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function resetSounds() {
    forestAudio.pause()
    rainAudio.pause()
    coffeeAudio.pause()
    fireplaceAudio.pause()
  }


  return {
    pressButton,
    timeEnd,
    resetSounds,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireplaceAudio,
  }  
}