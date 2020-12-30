const generateDisplay = document.getElementById("generate-display");
const pinDisplay = document.getElementById("pin-display");

// generate random password
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", function () {
  const generatePin = Math.round(Math.random() * (9999 - 1000 + 1)) + 1000;
  //   const generateDisplayNum = parseInt(generateDisplay);
  generateDisplay.value = generatePin;
});
const buttons = document.querySelectorAll(".btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let number = buttons[i].getAttribute("data-num");
    pinDisplay.value += number;
  });
}

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function () {
    const pinWrong = document.getElementById("pin-wrong");
    const pinMatch = document.getElementById("pin-match");
    if (generateDisplay.value == pinDisplay.value){
        pinMatch.style.display = "block";
    }else{
        pinWrong.style.display = "block";
    }
    pinDisplay.value = " ";
    generateDisplay.value = " ";
});
const clearBtn = document.getElementById("btn-clear");
clearBtn.addEventListener("click",function(){
    pinDisplay.value = "";
})
const btnDelete = document.getElementById("btn-delete");
btnDelete.addEventListener("click",function(){
    pinDisplay.value = pinDisplay.value.slice(0, -1)
})