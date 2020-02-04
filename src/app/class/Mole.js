import $ from 'jquery';
import { getRand } from '../helpers/random';

export class Mole {
  constructor() {
    this.createElement();
  }

  createElement() {
    this.moleElement = $('<img src="/assets/images/mole.png">');
    this.moleElement.one('click', function () {
      $(this).remove();
    });
    this.moleElement.addClass('mole');
  }

  seMontrer() {
    const windowWidth = $(window).width() - 160;
    const windowHeight = $(window).height() - 160;
    this.moleElement.css({ left: `${getRand(windowWidth)}px`, top: `${getRand(windowHeight)}px` });
    this.moleElement.appendTo('body');
  }
}
