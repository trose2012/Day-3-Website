function updateTime() {

  const currentTime = new Date();

  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  document.getElementById('time-display').textContent = `The current time is ${formattedTime}`;
}

updateTime();

setInterval(updateTime, 1000);