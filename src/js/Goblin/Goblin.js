export default class Goblin {
  constructor() {
    this.gameField = document.querySelector('.game-field');
    this.arrayCells = Array.from(document.querySelectorAll('.cell'));
    this.currentCell = null;
    this.activeSetTimeout = null;
    this.goblin = null;

    this.drawGoblin();
    this.goblinActive();
  }

  drawGoblin() {
    this.goblin = document.createElement('div');
    this.goblin.classList.add('goblin');
  }

  goblinActive() {
    this.activeSetTimeout = setTimeout(() => {
      this.movementGoblin();
    }, 2000);
  }

  movementGoblin() {
    let value = null;
    do {
      value = Math.floor(Math.random() * this.arrayCells.length);
    } while (this.currentCell === value);

    this.currentCell = value;

    this.gameField.children[value].appendChild(this.goblin);
    this.activeSetTimeout = setTimeout(() => {
      this.movementGoblin();
    }, 2000);
  }

  stopActive() {
    clearTimeout(this.activeSetTimeout);
  }
}
