let countdown = 60

setInterval(reloadCountdown, 1000)

function reloadCountdown() {
  const countdownP = document.querySelector('p#countdown')
  countdownP.textContent = countdown

  countdown--
}