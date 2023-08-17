const numPad = document.querySelectorAll("span");
const btn = document.querySelector("#str");
const checkBtn = document.querySelector("#check");
const result = document.querySelector("#result");

btn.addEventListener("click", shuffle);

let arr1 = [];
let count = 0;

// 시작하기 버튼 클릭 시 동작되는 함수
function shuffle() {
  arr1 = [];
  for (var x = 0; x < 3; x++) {
    let rn = Math.floor(Math.random() * 9) + 1;
    arr1.push(rn);
    console.log(arr1);
  }
  let set = new Set(arr1);
  let uniqueArr = [...set];
  if (uniqueArr.length !== 3) {
    uniqueArr = [];
    return shuffle();
  }
  checkBtn.setAttribute("style", "display:block");
  alert("숫자가 생성되었습니다!");
}

// 버튼을 클릭하면 눌린 숫자를 배열에 집어넣어서 결과확인 버튼을 눌렀을 때 길이, 인덱스 값, value 값이 일치한지 비교

var answ = [];
function padNumber(number) {
  result.innerHTML += number;
  answ.push(number);
}

function checkArr() {
  let str = 0;
  let ball = 0;
  let out = 0;
  count++;
  for (var i = 0; i < 3; i++) {
    if (answ[i] === arr1[i]) {
      str++;
    } else if (arr1.includes(answ[i])) {
      ball++;
    } else {
      out++;
    }
  }
  if (str === 3) {
    btn.innerText = "다시하기";
    alert("축하드립니다 " + count + "번만에 맞히셨습니다!");
    window.location.reload();
  } else {
    alert(str + "스트라이크 " + ball + "볼 " + out + "아웃!");
  }
}

function reset() {
  result.innerHTML = "";
  answ = [];
}

function min() {
  answ.pop();
  result.innerHTML = answ.join("");
}
