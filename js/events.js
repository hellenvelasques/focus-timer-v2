
import { buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff, 
  buttonAddMinutes,
  buttonRemoveMinutes} from './elements.js';

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
  
  buttonSoundOn.addEventListener('click', () => {
    buttonSoundOn.classList.add('hide');
    buttonSoundOff.classList.remove('hide');
    sound.bgAudio.pause();
  });
  
  buttonSoundOff.addEventListener('click', () => {
    buttonSoundOff.classList.add('hide');
    buttonSoundOn.classList.remove('hide');
    sound.bgAudio.play();
  });

  buttonAddMinutes.addEventListener('click', () => {
    timer.addMinutes();
    sound.pressButton();
  });

  buttonRemoveMinutes.addEventListener('click', () => {
    timer.removeMinutes();
    sound.pressButton();
  });

  cardButtonForest.addEventListener('click', () => {
    cardButtonRain.checked = false
    cardButtonCoffeeShop.checked = false
    cardButtonFireplace.checked = false

    sounds.songRain.pause()
    sounds.songCoffeeShop.pause()
    sounds.songFirePlace.pause()

    if(cardButtonForest.checked == true){
      sounds.songForest.play()
      sounds.songForest.loop = true
    } else {
      sounds.songForest.pause()
    }
  })

  cardButtonRain.addEventListener('click', () => {
    cardButtonForest.checked = false
    cardButtonCoffeeShop.checked = false
    cardButtonFireplace.checked = false

    sounds.songForest.pause()
    sounds.songCoffeeShop.pause()
    sounds.songFirePlace.pause()

    if(cardButtonRain.checked == true) {
      sounds.songRain.play()
      sounds.songRain.loop = true
    } else {
      sounds.songRain.pause()
    }
  })
  
  cardButtonCoffeeShop.addEventListener('click', () => {
    cardButtonForest.checked = false
    cardButtonRain.checked = false
    cardButtonFireplace.checked = false

    sounds.songForest.pause()
    sounds.songRain.pause()
    sounds.songFirePlace.pause()

    if(cardButtonCoffeeShop.checked == true) {
      sounds.songCoffeeShop.play()
      sounds.songCoffeeShop.loop = true
    } else {
      sounds.songCoffeeShop.pause()
    }

  })

  cardButtonFireplace.addEventListener('click', () => {
    cardButtonForest.checked = false
    cardButtonRain.checked = false
    cardButtonCoffeeShop.checked = false

    sounds.songForest.pause()
    sounds.songRain.pause()
    sounds.songCoffeeShop.pause()

    if(cardButtonFireplace.checked == true) {
      sounds.songFirePlace.play()
      sounds.songFirePlace.loop = true
    } else {
      sounds.songFirePlace.pause()
    }
  })
};