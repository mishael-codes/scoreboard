const playersArray = localStorage.getItem("players")
  ? JSON.parse(localStorage.getItem("players"))
  : [];

console.log(playersArray);

let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const player = document.querySelector("#player");
  createPlayer(player);
});

function displayPlayers() {
  let players = "";
  for (let i = 0; i < playersArray.length; i++) {
    players += `  <div class="player"></div>
                  <div class="input-controller d-flex mt-4">
                    <p class="me-5">${playersArray[i]}</p>
                    <p class="playerPoints"></p>
                    <button class="fa-solid fa-plus fa-2x increment rounded-3"></button>
                  </div>`;
  }
  document.querySelector(".player-list").innerHTML = players;
  activateIncrementCounter();
}

function createPlayer(player) {
  playersArray.push(player.value);
  localStorage.setItem("players", JSON.stringify(playersArray));
  location.reload();
}

function displayDate() {
  let date = new Date();
  date = date.toString().split(" ");
  document.querySelector(
    "#date"
  ).textContent = `${date[1]} ${date[2]}, ${date[3]}`;
}

window.onload = function () {
  displayDate();
  displayPlayers();
};

// to clear the local storage
let clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

function activateIncrementCounter() {
  let incrementBtn = document.querySelectorAll(".increment");
  let playerPoints = document.querySelectorAll(".playerPoints");
  incrementBtn.forEach((ib, i) => {
    let point = 0;
    ib.addEventListener("click", () => {
      playerPoints[i].textContent = point += 5;
    });
  });
}
