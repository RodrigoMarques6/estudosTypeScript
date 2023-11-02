const title: string = '';

function test(): string {
    return '';
}

class Pessoa {
    constructor(private _name: string, private _lastName: string, private _age?: number) {}

    set name(value: string) {

        if (value.length === 1) {
            throw new Error('Nome inválido precisa ser maior do que 1 caractere!');
        }

        this._name = value;
    }

    set lastName(value: string) {

        if (value.length === 1) {
            throw new Error('Sobrenome inválido precisa ser maior do que 1 caractere!');
        }

        this._lastName = value;
    }

    get fullName(): string {
        return `${this._name} ${this._lastName}`;
    }
}

const pessoa = new Pessoa('Rodrigo', 'Marques');

// console.log(pessoa.fullName);

class Animal {
    constructor(private _name: string, private _action: string) {}

    set name(value: string) {

        if (value.length === 1) {
            throw new Error('Nome inválido precisa ser maior do que 1 caractere!');
        }

        this._name = value;
    }

    set action(value: string) {

        if (value.length === 1) {
            throw new Error('Sobrenome inválido precisa ser maior do que 1 caractere!');
        }

        this._action = value;
    }

    get executeAction(): string {
        return `${this._name} fazendo ${this._action}`;
    }
}

const pato = new Animal('Pato', 'quack quack');
const gato = new Animal('Gato', 'miau');
const cachorro = new Animal('Cachorro', 'au au');

console.log({
    pato: pato.executeAction,
    gato: gato.executeAction,
    cachorro: cachorro.executeAction
});