// html에 있는 내용 받아오기 - getElementById("~"); Id가 ~인 것
const inputtag = document.getElementById("input");
const wordsdiv = document.getElementById("words");
const warningd = document.getElementById("warning");
const lifecntd = document.getElementById("lifecnt");
const formbttn = document.getElementById("formBtn");

let wordlist = ["성균관대학교"]; // 중복 단어 체크 리스트

let life = 3;

let lastInput = wordlist[0]; // 마지막에 입력한 단어 (초기설정)

formbttn.onclick = (event) => {

    warningd.textContent = "";

    event.preventDefault(); // 자동으로 새로고침되는 것 방지

    // 1. 사용자가 입력한 값 읽어서 변수(userInput)에 넣기
    const userInput = inputtag.value;

    // 2. if-else 문으로 끝말잇기 구현하기 - 전 단어의 마지막 글자로 시작하는지 & 중복 단어인지 확인
    if () {
        
    } else {
        
    }

    // 3. input 태그 값 공백으로 만들기 & 입력 후에도 자동으로 커서가 위치하게 하기
    inputtag.value = "";
    inputtag.focus;

    // 4. 남은 목숨 표시하기
    lifecntd.textContent = "💖".repeat(life) + "💔".repeat(3-life);
    if (!life) alert("목숨이 남아있지 않습니다. \n 새로고침을 눌러주세요. ");
    // 이 경고메세지는 life가 0일 때 떠야 한다. 코딩에서 1은 True, 0은 False!
    // 그러므로 life = 0이면 !life = 1. if (True) 이면 alert 실행!
}