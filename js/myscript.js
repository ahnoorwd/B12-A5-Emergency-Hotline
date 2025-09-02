

// allheart set value and increase the result also 

const allheart = document.getElementsByClassName("heart");

for (let heart of allheart) {
  heart.addEventListener("click", () => {
    const heartcount = document.getElementById('heartCounter');
    let current = parseInt(heartcount.innerText) || 0; // get current value
    current++; // increment
    heartcount.innerText = current; // update display
  });
}


// Get coin holder span
const coinHolder = document.getElementById("coin-holder");

// Get all call buttons
const callButtons = document.querySelectorAll(".call-btn");

// Get call history container
const historyContainer = document.querySelector(".space-y-3");

// Add click event to each call button
callButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let currentCoins = parseInt(coinHolder.textContent);

    if (currentCoins < 20) {
      alert("Not enough coins!");
      return;
    }

    // Deduct 20 coins
    currentCoins -= 20;
    coinHolder.textContent = currentCoins;

    // Get card info
    const card = btn.closest(".bg-white"); // parent card
    const title = card.querySelector(".title").textContent;
    const code = card.querySelector(".code").textContent;

    // Show alert with details
      alert(`📞 Calling : ${title}\nCode: ${code}\nRemaining Coins: ${currentCoins}`);
 

    // Add to history
    const now = new Date();
    const dateTime = now.toLocaleString();

    const historyItem = document.createElement("div");
    historyItem.className = "flex justify-between items-center  bg-white shadow rounded-lg p-3";

    historyItem.innerHTML = `
      <div>
        <p class="font-semibold text-sm">${title} </p>
        <p>code : ${code} </p>
        <p class="text-xs text-gray-500">Called on ${dateTime}</p>
      </div>
      <span class="text-xs text-gray-400">-20 coins</span>
    `;

    historyContainer.prepend(historyItem); // add at top
  });
});

// clear the history from here 

const clearBtn = document.getElementById("all-clear");

clearBtn.addEventListener("click", () => {
  historyContainer.innerHTML = ""; // remove all history items
});
