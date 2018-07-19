import { ImprovedFighter } from "./improvedFighter";
import { Fighter } from "./fighter";

async function fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...points: number[]) {
    let fighters = [fighter, improvedFighter];
  
    for (let point of points) {
      let dead: boolean = false;
      fighter.hit(improvedFighter, point);
      improvedFighter.doubleHit(fighter, point);
  
      for (let fighter of fighters)
        if (fighter.health <= 0) {
          await fighter.knockout();
          console.log(`${fighter.name} is knockouted!`);
          dead = true;
          break;
        }
        
      if (dead) break;
    }
    
    // Declare winner
    let winner = (fighter.health < 0) ? improvedFighter as ImprovedFighter: fighter as Fighter;
    console.log(`${winner.name} is the best today`)
    
    // If draw
    if (fighter.health > 0 && improvedFighter.health > 0)
      console.log('Sadly, no winner');
  }
  
  export default fight;
  