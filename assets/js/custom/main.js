document.getElementById("billMonth").style.opacity = "1";
document.getElementById("billAnnual").style.opacity = "0.4";
document.getElementById("priceSwitch").addEventListener("change", () => {
  let checked = document.getElementById("priceSwitch").checked;
  let monthPrice = document.getElementsByClassName("cost-per-month");
  let yearPrice = document.getElementsByClassName("cost-per-year");
  if (checked) {
    document.getElementById("billMonth").style.opacity = "0.4";
    document.getElementById("billAnnual").style.opacity = "1";
    for (let i = 0; i < monthPrice.length; i++) {
      for (let j = 0; j < yearPrice.length; j++) {
        monthPrice[i].style.display = "none";
        yearPrice[j].style.display = "block";
      }
    }
  } else {
    document.getElementById("billMonth").style.opacity = "1";
    document.getElementById("billAnnual").style.opacity = "0.4";
    for (let i = 0; i < monthPrice.length; i++) {
      for (let j = 0; j < yearPrice.length; j++) {
        monthPrice[i].style.display = "block";
        yearPrice[j].style.display = "none";
      }
    }
  }
});

let accordion = document.getElementsByClassName("accordion-container");
document.getElementById("billMonth").style.fontWeight = "700";

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    accordion[i].classList.toggle("active");
  });
}