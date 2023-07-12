export default function() {
  const buttonPressAudio = new Audio ('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/audios_button-press.wav');
  const kitchenTimer = new Audio ('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/audios_kichen-timer.mp3');
  const songForest = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Floresta.wav');
  const songRain = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Chuva.wav');
  const songCoffeeShop = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Cafeteria.wav');
  const songFirePlace = new Audio('https://github.com/hellenvelasques/focus-timer-v2/blob/main/sounds/Lareira.wav');

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