// function for calling service
function callService(name, number) {
  let coin = document.getElementById("coin").innerText;
  let coinNumber = Number(coin);

  if (coinNumber >= 20) {
    const serviceName = document.getElementById(name).innerText;
    const serviceNumber = document.getElementById(number).innerText;
    const time = new Date().toLocaleTimeString();
    Swal.fire(`Calling ${serviceName} at ${serviceNumber}`);

    const callHistoryElement = document.querySelector(".history-container");
    if (!callHistoryElement)
      return console.error("No .history-container found!");

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="history-card bg-[#F2F2F2] mb-3 p-2 flex justify-between items-center rounded-md">
             <div class="flex flex-col">
               <p class="text-sm font-semibold">${serviceName}</p>
               <p class="text-sm text-[#5C5C5C]">${serviceNumber}</p>
             </div>
             <div>
               <p  class="text-sm">${time}</p>
             </d
           </div>
    `;
    callHistoryElement.appendChild(newDiv);
    console.log("Appended new history:", newDiv);

    coinNumber -= 20;

    document.getElementById("coin").innerText = coinNumber;
  } else {
    // alert("Sorry....Not enough coins");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Not enough coins!",
    });
  }
}

// heart counting
let heartCount = 0;
const heart = document.getElementsByClassName("heart-button");
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    console.log("heart Clicked");
    // document.getElementById("heart-icon").style.fill = "red";
    heartCount++;
    document.getElementById("heart").innerText = heartCount;
  });
}

document.getElementById("all").addEventListener("click", function () {
  callService("emergency-service", "emergency-number");
});
document.getElementById("police").addEventListener("click", function () {
  callService("police-service", "police-number");
});
document.getElementById("fire").addEventListener("click", function () {
  callService("fire-service", "fire-number");
});
document.getElementById("health").addEventListener("click", function () {
  callService("ambulance-service", "ambulance-number");
});
document.getElementById("help").addEventListener("click", function () {
  callService("women-service", "women-number");
});

document.getElementById("govt").addEventListener("click", function () {
  callService("anti-service", "anti-number");
});
document.getElementById("electricity").addEventListener("click", function () {
  callService("electricity-service", "electricity-number");
});
document.getElementById("ngo").addEventListener("click", function () {
  callService("brac-service", "brac-number");
});
document.getElementById("travel").addEventListener("click", function () {
  callService("railway-service", "railway-number");
});
