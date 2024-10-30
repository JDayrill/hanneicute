const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");
let hoverCount = 0;
const hoverLimit = 5;
let stopInteractions = false;
noBtn.addEventListener("mouseover", () => {
  if (stopInteractions) return;
  hoverCount++;
  if (hoverCount >= hoverLimit) {
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    questionContainer.style.display = "none";
    const noText = document.createElement("div");
    noText.textContent = "You can't say no";
    noText.style.position = "fixed";
    noText.style.top = "50%";
    noText.style.left = "50%";
    noText.style.transform = "translate(-50%, -50%)";
    noText.style.fontSize = "3em";
    noText.style.fontWeight = "bold";
    noText.style.textAlign = "center";
    if (!document.body.contains(noText)) {
      document.body.appendChild(noText);
    }

    setTimeout(() => {
      location.reload();
    }, 3000);
  } else {
    const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
    const newY = Math.floor(Math.random() * questionContainer.offsetHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
  }
});

yesBtn.addEventListener("click", () => {
  stopInteractions = true;
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    gifResult.play();
  }, 3000);
});
