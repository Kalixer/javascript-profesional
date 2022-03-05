// Boolean
let muted: boolean = true;
muted = false;
// muted = "callado"
// no funcionara, TypeScrip te asiste al decir que es de tipo booleano

// Number
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let resultado = numerador / denominador;

// String
let nombre: string = 'Alejandro';
let saludo = `Mi nombre es ${nombre}`

// Arrays
let people: string[] | number[] = [];
people = ["Isabel", "Nicole", "Raul",];
// people.push("9000")

let peopleAndNumbers: Array< string | number> = []

// Enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
// console.log(`Mi color favorito es el ${colorFavorito}`)

// Any
let comodin: any = "joker";
comodin = { type: "Wildcard"}

// Object
let person: object = { name:"Luis" };

// Tuple
let x: [string, number] = ["hello", 10]
let y: [string, number] = ["hi", 20]
// console.log(x)
// console.log(y)

/*
let arreglo: number[] = []
function lista() {
    for(let i=0; i<50; i++){
        arreglo.push(i * 10)
    }
    arreglo.forEach(a => console.log(a))
}
lista()
*/

// Funciones
function add(a:number, b:number): number {
    return a + b;
}

const sum = add(4, 6)

function createAdder(a:number): (number) => number {
    return function(b:number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6)

function fullName(fisrtName: string, lastName: string = 'Smith'): string {
    return `${fisrtName} ${lastName}`
}

const alejandro = fullName('Alejandro')
// console.log(alejandro)


// Interfaces
enum Colores {
    Rojo = "Rojo",
    Verde = "Verde",
}

interface Rectangulo {
    ancho: number
    alto: number
    color?: Colores;
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Colores.Rojo,
}

function area(r: Rectangulo) {
    return r.alto * r.ancho
}

const areaRect = area(rect);
// console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`
}
console.log(rect.toString())