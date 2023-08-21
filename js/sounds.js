export default function() {
  const buttonPressAudio = new Audio ('https://raw.githubusercontent.com/hellenvelasques/focus-timer-v2/main/sounds/audios_button-press.mp3');
  const kitchenTimer = new Audio ('https://raw.githubusercontent.com/hellenvelasques/focus-timer-v2/main/sounds/audios_kichen-timer.mp3');
  const forestAudio = new Audio('https://raw.githubusercontent.com/hellenvelasques/focus-timer-v2/main/sounds/Floresta.mp3');
  const rainAudio = new Audio('https://raw.githubusercontent.com/hellenvelasques/focus-timer-v2/main/sounds/Chuva.mp3');
  const coffeeAudio = new Audio('https://raw.githubusercontent.com/hellenvelasques/focus-timer-v2/main/sounds/Cafeteria.mp3');
  const fireplaceAudio = new Audio('https://raw.githubusercontent.com/hellenvelasques/focus-timer-v2/main/sounds/Lareira.mp3');
  
  //local
  // const buttonPressAudio = new Audio ('../sounds/audios_button-press.mp3');
  // const kitchenTimer = new Audio ('../sounds/audios_kichen-timer.mp3');
  // const forestAudio = new Audio('../sounds/Floresta.mp3');
  // const rainAudio = new Audio('../sounds/Chuva.mp3 ');
  // const coffeeAudio = new Audio('../sounds/Cafeteria.mp3 ');
  // const fireplaceAudio = new Audio('../sounds/Lareira.mp3');

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