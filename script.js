const countDownDate = new Date("Jan 1, 2024 01:00:00").getTime();

// document.getElementById("countdown").innerHTML = countDownDate;

const countDownTrigger = () => {

  const now = new Date().getTime();

  const distances = countDownDate - now;

  const days = Math. floor(distances / (1000 *60 * 60 * 24));

  document.getElementById("countdown").innerHTML = days;
};

countDownTrigger();