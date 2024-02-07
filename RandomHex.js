let showColor = document.querySelector(".color-view");

let startBtn = document.querySelector("#startBtn");

let stopBtn = document.querySelector("#stopBtn");

let hexShow = document.querySelector('#hex_here');

let timeStartInt;

// Generate Hexcode color
function hexColorGenerator() {
  const hexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Show Cases
startBtn.addEventListener("click", function (e) {
   timeStartInt = setInterval(
    () => {
      const recievedColor = hexColorGenerator();
      showColor.style.backgroundColor = recievedColor;
      hexShow.innerHTML= `${recievedColor}`
      console.log('Hex color generator is start')
    },
    1000,
    ""
  );
});


stopBtn.addEventListener('click', function(){
    console.log('Hex color generator is stoped')
    clearInterval(timeStartInt);
})
