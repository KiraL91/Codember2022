
const pass1: number = 55678; // es correcto lo cumple todo
const pass2: number = 12555; // es correcto, lo cumple todo
const pass3: number = 55555; // es correcto, lo cumple todo
const pass4: number = 12345; // es incorrecto, no tiene el 5 repetido.
const pass5: number = 57775; // es incorrecto, los números no van de forma creciente

let passwords: number[] = []

const testPassword = function (password: number): void {
    if (isValid(password)) {
        passwords.push(password);
    }
}

const isValid = function (password: number): boolean {
    const numbers = numberToCharArray(password);
    if (numbers.filter(n => n == '5').length < 2) return false;

    for (let i = 0; i < numbers.length - 1; i++) {
        const left = Number(numbers[i]);
        const right = Number(numbers[i + 1]);

        if (right < left) {
            return false;
        }
    }

    return true;
}

const numberToCharArray = function (value: number): string[] {
    const aux: string = String(value);
    const numbers: string[] = [];
    for (let i = 0; i < aux.length; i++) {
        numbers.push(aux[i]);
    }
    return numbers;
}

const run = function (): string {
    for (let i = 11098; i <= 98123; i++) {
        testPassword(i);
    }
    return `${passwords.length}-${passwords[55]}`
}


console.log(run())
