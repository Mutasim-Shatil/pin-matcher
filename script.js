// generate random password
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  const generatePin = Math.round(Math.random() * (9999 - 1000 + 1)) + 1000;
  const generateDisplay = document.getElementById("generate-display");
//   const generateDisplayNum = parseInt(generateDisplay);
  generateDisplay.value = generatePin;
});
const buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        let number = buttons[i].getAttribute("data-num");
        const pinDisplay = document.getElementById("pin-display");
        pinDisplay.value += number;
    })
}