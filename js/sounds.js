export default function Sounds() {

  bgAudio.loop

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio,
    songForest,
    songRain,
    songCoffeeShop,
    songFirePlace,
  };
}