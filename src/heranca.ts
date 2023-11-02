abstract class Pessoas {
    constructor(private name: string) {}

    abstract calculateSalary(): number;
}

class Sindico extends Pessoas {
    calculateSalary(): number {
        return 1 * 10;
    }
}

class Porteiro extends Pessoas {
    calculateSalary(): number {
        return 1;
    }
}