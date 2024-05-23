class Dice {
  private roll: number;

  constructor() {
    this.roll = 0;
  }

  public rollDice(): number {
    this.roll = Math.floor(Math.random() * 6) + 1;
    return this.roll;
  }

  public getRoll(): number {
    return this.roll;
  }
}

// Usage
const dice = new Dice();
console.log(`You rolled a: ${dice.rollDice()}`);
