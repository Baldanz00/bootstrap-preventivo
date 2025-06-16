document.getElementById("dati").addEventListener("submit", function (e) {
  e.preventDefault();
console.log("ciao")
  const jobType = document.getElementById("jobType").value;
  const promoCode = document.getElementById("promoCode").value.trim().toUpperCase();
  const validCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
  const hours = 10;
  let rate = 0;

  switch (jobType) {
    case "backend":
      rate = 20.5;
      break;
    case "frontend":
      rate = 15.3;
      break;
    case "analysis":
      rate = 33.6;
      break;
    default:
      rate = 0;
  }

  let price = rate * hours;
  let discount = 0;
  let message = "";

  if (promoCode && validCodes.includes(promoCode)) {
    discount = price * 0.25;
    price -= discount;
    message = "Sconto del 25% applicato!";
  } else if (promoCode && !validCodes.includes(promoCode)) {
    message = "Codice promozionale non valido. Nessuno sconto applicato.";
  }

  document.getElementById("finalPrice").innerText = "€ " + price.toFixed(2);
  document.getElementById("promoMessage").innerText = message;
});