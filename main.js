let sum = 0;
let count = 0;

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
  if (input === 0) {
    let p = document.getElementById("error");
    p.textContent = "Error! Please enter a number.";
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
  sumPara.textContent = `Sum = ${sum}`;
  if (count > 0) {
    li.textContent = `${dicePara.innerHTML} = ${sum}`;
    ul.appendChild(li);
  }
  count++;
};
const diceRoll = () => {
  let diceArr = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
  return diceArr[Math.floor(Math.random() * diceArr.length)];
};
