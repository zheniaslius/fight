interface IFighter {
  name: string;
  health: number;
  setDamage(damage: number);
  hit(enemy: Fighter, point: number);
}

export class Fighter implements IFighter {
  name: string;
  health: number;
  private power: number;

  constructor(name = "fighter", health = 100, power: number) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  setDamage(damage = 0) {
    if (damage < 0)
      throw 'Damage must be > 0';

    this.health -= damage;
    console.log(`${this.name}'s health is ${this.health}`);
  }

  hit(enemy, point) {
    let damage = point * this.power;
    enemy.setDamage(damage);
  }

  knockout() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log('Time is over now. gg wp');
        resolve();
      }, 500);
    });
  }
}
