let intervalId;
let intervalId2;

function startScroll() {
  intervalId = setInterval(function () {david_cage.scrollLeft += 3}, 10);
}

function stopScroll() {
  clearInterval(intervalId);
}

const david_cage = document.querySelector('#david_cage');