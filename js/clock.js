const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clock.innerText = `${toPadStart(hours)}:${toPadStart(minutes)}:${toPadStart(
    seconds
  )}`;
}

function toPadStart(text) {
  return String(text).padStart(2, "0");
}

setInterval(getClock, 100);
