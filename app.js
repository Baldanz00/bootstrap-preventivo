document.getElementById(tipo-lavoro).addEventListener("submit", function (e) {
  e.preventDefault();

   const jobType = document.getElementById("jobType").value;
  const promoCode = document.getElementById("promoCode").value.trim().toUpperCase();
  const validCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
  const hours = 10;
  let rate = 0;

  // Imposta il rate in base al tipo di lavoro
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

  // Controllo validità del codice con un ciclo for
  let isCodeValid = false;
  for (let i = 0; i < validCodes.length; i++) {
    if (promoCode === validCodes[i]) {
      isCodeValid = true;
      break;
    }
  }

  // Calcola sconto se valido
  if (promoCode && isCodeValid) {
    discount = price * 0.25;
    price -= discount;
    message = "Sconto del 25% applicato!";
  } else if (promoCode && !isCodeValid) {
    message = "Codice promozionale non valido. Nessuno sconto applicato.";
  }

  // Stampa il prezzo e il messaggio
  document.getElementById("finalPrice").innerText = "€ " + price.toFixed(2);
  document.getElementById("promoMessage").innerText = message;
});