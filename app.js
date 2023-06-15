document.addEventListener("DOMContentLoaded", function () {
  const date = "2023-06-20 14:22:00 ";
 


  document.getElementById("date").innerHTML = date;

  const inputs = document.querySelectorAll("input");

  const timer = () => {
    const endDate = new Date(date);
    const startDate = new Date();
    const diff = (endDate - startDate) / 1000;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    inputs[1].value = Math.floor((diff / 3600) % 24); // Hours
    inputs[2].value = Math.floor((diff / 60) % 60); // Minutes

    inputs[3].value = Math.floor(diff % 60);
  }

  timer();

  setInterval(timer, 1000);
});