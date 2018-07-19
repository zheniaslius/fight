import { Fighter } from "./fighter";
import { ImprovedFighter } from "./improvedFighter";
import fight from "./fight";

export default class Main {
    constructor() {
        const Conor = new Fighter("Conor", 500, 5);
        const John = new ImprovedFighter("John", 490, 6);
        fight(Conor, John, 10, 20, 30)
    }
}

const start = new Main();
