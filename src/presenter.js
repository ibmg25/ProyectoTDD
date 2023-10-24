import Catalogo from "./catalogo.js";
import Kata from "./kata.js";

// const first = document.querySelector("#primer-numero");
// const second = document.querySelector("#segundo-numero");
// const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const firstNumber = Number.parseInt(first.value);
//   const secondNumber = Number.parseInt(second.value);

//   div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
// });

const catalogo = new Catalogo();
const kata1 = new Kata();
const kata2 = new Kata();
catalogo.insertarKata(kata1);
catalogo.insertarKata(kata2);

div.innerHTML = catalogo.printLista();
