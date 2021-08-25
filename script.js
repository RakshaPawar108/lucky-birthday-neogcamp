const dateOfBirth = document.querySelector("#dob");
const luckyNumber = document.querySelector("#lucky-num");
const checkNumber = document.querySelector("#check-number");

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
  const luck = checkLuck(sum, luckyNum);
  console.log(luck);
}

// Event Listener
checkNumber.addEventListener("click", checkLuckyBirthday);
