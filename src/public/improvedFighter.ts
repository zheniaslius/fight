import { Fighter } from './fighter';

export class ImprovedFighter extends Fighter {
    doubleHit(enemy: Fighter, point: number) {
        super.hit(enemy, point * 2);
      }
}