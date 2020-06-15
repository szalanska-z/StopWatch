const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const historyBtn = document.querySelector(".history");
const stopWatch = document.querySelector(".stop-watch");
const time = document.querySelector(".time");
const timeList = document.querySelector(".time-list");
const infoBtn = document.querySelector(".info .fa-question");
const modalShadow = document.querySelector(".modal-shadow");
const closeModalBtn = document.querySelector(".close");
const colorBtn = document.querySelector(".fa-paint-brush");
const colorPanel = document.querySelector(".colors");
const colorOne = document.querySelector(".one");
const colorTwo = document.querySelector(".two");
const colorThree = document.querySelector(".three");
const colorFour = document.querySelector(".four");
let root = document.documentElement;

let countTime;
let minutes = 0;
let seconds = 0;
let timeArray = [];

const handleStart = () => {
  clearInterval(countTime);
  countTime = setInterval(() => {
    if (seconds < 9) {
      seconds++;
      stopWatch.textContent = `${minutes}:0${seconds}`;
    } else if (seconds >= 9 && seconds < 59) {
      seconds++;
      stopWatch.textContent = `${minutes}:${seconds}`;
    } else {
      minutes++;
      seconds = 0;
      stopWatch.textContent = `${minutes}:00`;
    }
  }, 1000);
};

const handlePause = () => {
  clearInterval(countTime);
};

const handleStop = () => {
  time.innerHTML = `Ostatni czas: ${stopWatch.textContent}`;
  if (stopWatch.textContent !== "0:00") {
    time.style.visibility = "visible";
    timeArray.push(stopWatch.textContent);
    console.log(timeArray);
  }
  clearStuff();
};

const handleReset = () => {
  clearStuff();
  time.style.visibility = "hidden";
  timeArray = [];
};

const clearStuff = () => {
  clearInterval(countTime);
  stopWatch.textContent = "0:00";
  timeList.textContent = "";
  seconds = 0;
  minutes = 0;
};

const showHistory = () => {
  timeList.textContent = "";
  let number = 1;
  timeArray.forEach((element) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `Pomiar nr ${number}: <span>${element}</span>`;
    timeList.appendChild(liElement);
    number++;
  });
};

const showModal = () => {
  if (!(modalShadow.style.display === "block")) {
    modalShadow.style.display = "block";
  } else {
    modalShadow.style.display = "none";
  }
  modalShadow.classList.toggle(".modal-animation");
};

startBtn.addEventListener("click", handleStart);
pauseBtn.addEventListener("click", handlePause);
stopBtn.addEventListener("click", handleStop);
resetBtn.addEventListener("click", handleReset);
historyBtn.addEventListener("click", showHistory);
infoBtn.addEventListener("click", showModal);
closeModalBtn.addEventListener("click", showModal);
window.addEventListener("click", (e) => {
  e.target === modalShadow ? showModal() : false;
});
colorBtn.addEventListener("click", () => {
  colorPanel.classList.toggle("show-colors");
});

colorOne.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(95, 158, 160)");
  root.style.setProperty("--hover-color", "rgb(72, 121, 122)");
});

colorTwo.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(240, 240, 117)");
  root.style.setProperty("--hover-color", "rgb(182, 182, 88)");
});

colorThree.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(255, 127, 80)");
  root.style.setProperty("--hover-color", "rgb(207, 101, 62)");
});

colorFour.addEventListener("click", () => {
  root.style.setProperty("--first-color", "rgb(202, 77, 98)");
  root.style.setProperty("--hover-color", "rgb(167, 59, 77)");
});
