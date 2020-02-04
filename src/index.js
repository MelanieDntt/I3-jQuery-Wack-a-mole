import $ from 'jquery';
import dialog from 'jquery-ui/ui/widgets/dialog';
import { Mole } from './app/class/Mole';

setInterval(() => {
  const mole = new Mole();
  mole.seMontrer();
  if ($('.mole').length > 10) {
    alert('Game Over');
    $('.mole').remove();
  }
}, 800);
