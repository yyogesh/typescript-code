abstract class StreetFighter {
    constructor() { }

    move() { }
    fight() {
        console.log(`${this.name} attack with ${this.getSpecialAttack()}`)
    }

    abstract getSpecialAttack(): string;

    abstract get name(): string;
}

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return "Handoken"
    }

    get name(): string {
        return 'Ryu';
    }
}

const ryu = new Ryu();
ryu.fight();
