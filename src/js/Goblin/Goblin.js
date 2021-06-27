export default class Goblin {
  constructor() {
    this.gameField = document.querySelector('.game-field');
    this.arrayCells = Array.from(document.querySelectorAll('.cell'));
    this.currentCell = null;
    this.activeSetTimeout = null;
    this.goblinActive();
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
    this.clearCells();
    this.gameField.children[value].classList.add('active');
    this.activeSetTimeout = setTimeout(() => {
      this.movementGoblin();
    }, 2000);
  }

  stopActive() {
    clearTimeout(this.activeSetTimeout);
  }

  clearCells() {
    for (const item of this.arrayCells) {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    }
  }
}
