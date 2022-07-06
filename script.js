"use strict";

let sum = 0;
let totalParagraph = document.querySelector(".sum");
const cola = document.querySelector(".cola");
const peanuts = document.querySelector(".peanuts");
const chocolate = document.querySelector(".chocolate");
const gummies = document.querySelector(".gummies");

const coinsContainer = document.querySelector(".coins-container");
const coinsForm = document.querySelector("form");

const lightbulb = document.querySelector(".lightbulb");
const turnOn = document.querySelector(".on");
const turnOff = document.querySelector(".off");
const toggleLight = document.querySelector(".toggle");
const powerOutage = document.querySelector(".end");

// Number 1
cola.addEventListener("click", () => {
  sum += 2;
  totalParagraph.textContent = `total: $${sum}.00`;
});

peanuts.addEventListener("click", () => {
  sum += 3;
  totalParagraph.textContent = `total: $${sum}.00`;
});

chocolate.addEventListener("click", () => {
  sum += 4;
  totalParagraph.textContent = `total: $${sum}.00`;
});

gummies.addEventListener("click", () => {
  sum += 6;
  totalParagraph.textContent = `total: $${sum}.00`;
});

// Number 2
coinsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const number = document.querySelector("#number").value;
  const coinType = document.querySelector("#coinType").value;

  for (let i = 0; i < number; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", coinType);
    newCoin.textContent = coinType;
    coinsContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});

// Number 3

turnOn.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "yellow";
});

turnOff.addEventListener("click", () => {
  lightbulb.style.backgroundColor = "darkgrey";
});

toggleLight.addEventListener("click", () => {
  const backgroundColor = lightbulb.style.backgroundColor;
  if (backgroundColor === "darkgrey") {
    lightbulb.style.backgroundColor = "yellow";
  } else {
    lightbulb.style.backgroundColor = "darkgrey";
  }
});

// lightbulb.addEventListener("click", () => {
// lightbulb.remove()};

// Mitch's Code

// let sum = 0;
// const totalParagraph = document.querySelector(".total");
// const cola = document.querySelector(".cola");
// const peanuts = document.querySelector(".peanuts");
// const chocolate = document.querySelector(".chocolate");
// const gummies = document.querySelector(".gummies");
// const changeForm = document.querySelector(".change-form");
// const coinContainer = document.querySelector(".coin-container");

// cola.addEventListener("click", () => {
//   sum += 2;
//   totalParagraph.textContent = `Total: $${sum}.00`;
// });

// peanuts.addEventListener("click", () => {
//   sum += 3;
//   totalParagraph.textContent = `Total: $${sum}.00`;
// });
// chocolate.addEventListener("click", () => {
//   sum += 4;
//   totalParagraph.textContent = `Total: $${sum}.00`;
// });
// gummies.addEventListener("click", () => {
//   sum += 6;
//   totalParagraph.textContent = `Total: $${sum}.00`;
// });

// changeForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const amount = document.querySelector("#amount").value;
//   const type = document.querySelector("#type").value;
//   for (let i = 0; i < amount; i++) {
//     const newCoin = document.createElement("li");
//     newCoin.classList.add("coin", type);
//     newCoin.textContent = type;
//     coinContainer.append(newCoin);
//     newCoin.addEventListener("click", () => {
//       newCoin.remove();
//     });
//   }
// });
