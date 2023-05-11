import Controls from './controls.js';
import Timer from './timer.js';
import Sounds from './sounds.js';  
import Events from './events.js';  
import { buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  displayMinutes,
  displaySeconds,
  buttonAddMinutes,
  buttonRemoveMinutes,
} from './elements.js';


const controls = Controls({
  buttonPlay, 
  buttonPause, 
  buttonSet, 
  buttonStop,
});

const timer = Timer({
  displayMinutes, 
  displaySeconds,
  resetControls: controls.reset,
  buttonAddMinutes,
  buttonRemoveMinutes
 });

const sound = Sounds();

Events({ controls, timer, sound });