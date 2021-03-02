// Smart goals for mid mod:

// Identification: I did not use event listeners. Particularly on my button there is no click event listener nor is it in an form tag along with the input.
// Smart goal: Use event listeners.
// Status: Complete

// Identification: My history shows subsequent history but it does not show the first one like the gif does.
// Smart goal: Fix the glitch.
// Status: Complete

// Identification: My code only satisfies the requirements needed to pass the assessment and meet expectations.
// Smart goal: Exceed expectations by adding extra features to my dice roll app, eg. stats tracker.
// Status: In progress, stay tuned!

let sum = 0;
let count = 0;
let memory = "";

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");
  let button = document.getElementById("roll");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  button.addEventListener("click", () => {
    data();
  });
});

const data = () => {
  const input = Number(document.getElementById("diceinput").value);
  let diceObj = {
    "&#9856": 1,
    "&#9857": 2,
    "&#9858": 3,
    "&#9859": 4,
    "&#9860": 5,
    "&#9861": 6,
  };
  let p = document.getElementById("error");
  p.textContent = "";
  if (input <= 0) {
    p.textContent = "Error! Please enter a valid number.";
    count = 0;
  }
  let dicePara = document.getElementById("dice-para");
  let sumPara = document.getElementById("sum-para");
  let ul = document.getElementById("history");
  let li = document.createElement("li");
  let newArr = [];
  for (let i = 1; i <= input; i++) {
    let roll = diceRoll();
    dicePara.innerHTML += roll;
    newArr.push(roll);
  }
  for (let i = 0; i <= input; i++) {
    if (diceObj[newArr[i]]) {
      sum += diceObj[newArr[i]];
    }
  }
  if (input > 0) {
    sumPara.textContent = `Sum = ${sum}`;
  }
  if (count > 0) {
    li.textContent = memory;
    ul.appendChild(li);
  }
  memory = `${dicePara.innerHTML} = ${sum}`;
  if (input > 0) {
    count++;
  }
};
const diceRoll = () => {
  let diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
  return diceArr[Math.floor(Math.random() * diceArr.length)];
};
