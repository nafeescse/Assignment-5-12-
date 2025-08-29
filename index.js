// function for calling service

function callService(name, number) {
  let coin = document.getElementById("coin").innerText;
  let coinNumber = Number(coin);

  if (coinNumber >= 20) {
    const serviceName = document.getElementById(name).innerText;
    const serviceNumber = document.getElementById(number).innerText;
    const time = new Date().toLocaleTimeString();
    alert(`📞 Calling...
    ${serviceName} at ${serviceNumber}`);

    const callHistoryElement = document.querySelector(".history-container");
    if (!callHistoryElement)
      return console.error("No history-container found!");

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
    console.log("Appended:", newDiv);

    coinNumber -= 20;

    document.getElementById("coin").innerText = coinNumber;
  } else {
    alert(`Opps....
Please recharge your coins!!
`);
  }
}

// heart counting
let heartCount = 0;
const heart = document.getElementsByClassName("heart-button");
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function (e) {
    e.preventDefault();
    alert(`Lovely!
Added to Favorites Successfully`);
    console.log("heart Clicked");
    heartCount++;
    document.getElementById("heart").innerText = heartCount;
  });
}

// copy counting
let copyCount = 0;
const copy = document.getElementsByClassName("copy-button");
for (let i = 0; i < copy.length; i++) {
  copy[i].addEventListener("click", function () {
    copyCount++;
    document.getElementById("copy").innerText = copyCount;
  });
}

document.getElementById("all").addEventListener("click", function (e) {
  e.preventDefault();
  callService("emergency-service", "emergency-number");
});
document.getElementById("police").addEventListener("click", function (e) {
  e.preventDefault();
  callService("police-service", "police-number");
});
document.getElementById("fire").addEventListener("click", function (e) {
  e.preventDefault();
  callService("fire-service", "fire-number");
});
document.getElementById("health").addEventListener("click", function (e) {
  e.preventDefault();
  callService("ambulance-service", "ambulance-number");
});
document.getElementById("help").addEventListener("click", function (e) {
  e.preventDefault();
  callService("women-service", "women-number");
});

document.getElementById("govt").addEventListener("click", function (e) {
  e.preventDefault();
  callService("anti-service", "anti-number");
});
document.getElementById("electricity").addEventListener("click", function (e) {
  e.preventDefault();
  callService("electricity-service", "electricity-number");
});
document.getElementById("ngo").addEventListener("click", function (e) {
  e.preventDefault();
  callService("brac-service", "brac-number");
});
document.getElementById("travel").addEventListener("click", function (e) {
  e.preventDefault();
  callService("railway-service", "railway-number");
});

// Call history clear

document.getElementById("clear-history").addEventListener("click", function () {
  const historyContainer = document.querySelector(".history-container");
  // console.log(historyContainer.innerHTML);
  if (!historyContainer.innerHTML) return alert("No call history found!");
  historyContainer.innerHTML = "";
  alert("Call history cleared!");
});

// Copy to clipboard

function copyToClipboard(buttonId, targetId) {
  const btn = document.getElementById(buttonId);
  const hotLine = document.getElementById(targetId);
  btn.addEventListener("click", () => {
    navigator.clipboard
      .writeText(hotLine.textContent)
      .then(() => alert(`(${hotLine.innerText}) Copied to Clipboard `))
      .catch((err) => console.error("Failed to copy:", err));
  });
}

copyToClipboard("copyEmergencyBtn", "emergency-number");
copyToClipboard("copyPoliceBtn", "police-number");
copyToClipboard("copyFireBtn", "fire-number");
copyToClipboard("copyAmbulanceBtn", "ambulance-number");
copyToClipboard("copyWomenBtn", "women-number");
copyToClipboard("copyAntiBtn", "anti-number");
copyToClipboard("copyElectricityBtn", "electricity-number");
copyToClipboard("copyBracBtn", "brac-number");
copyToClipboard("copyRailwayBtn", "railway-number");
