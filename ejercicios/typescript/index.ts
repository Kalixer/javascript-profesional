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
console.log(`Mi color vaforito es el ${colorFavorito}`)

// Any
let comodin: any = "joker";
comodin = { type: "Wildcard"}

// Object
let person: object = { name:"Luis" };

// Tuple
let x: [string, number] = ["hello", 10]
let y: [string, number] = ["hi", 20]
console.log(x)
console.log(y)
