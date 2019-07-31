import '../style/main.css';

import { GameManager } from './game_manager';
import { KeyboardInputManager } from './keyboard_input_manager';
import { HTMLActuator } from './html_actuator';
import { LocalStorageManager } from './local_storage_manager';

var ready = function(){
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);
}

document.addEventListener("DOMContentLoaded", ready);