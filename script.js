const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-num");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");

// Functions
function calcSum(dob) {
  dob = dob.replaceAll("-", "");
  let sum = 0;

  for (let i = 0; i < dob.length; i++) {
    sum += Number(dob.charAt(i));
  }

  return sum;
}

function checkLuck(sum, luckyNum) {
  const res = sum % luckyNum;
  if (res === 0) {
    return "Your Birthday is Luckyyyy!🤩";
  } else {
    return "Your Birthday not Lucky😭";
  }
}

// Event Handler
function checkLuckyBirthday() {
  const dob = dateOfBirth.value;
  const luckyNum = luckyNumber.value;
  const sum = calcSum(dob);
  if (dob && luckyNum) {
    const luck = checkLuck(sum, luckyNum);
    outputBox.innerText = luck;
  } else {
    outputBox.innerText = "Please enter both the fields 😡";
  }
}

// Event Listener
checkNumber.addEventListener("click", checkLuckyBirthday);
