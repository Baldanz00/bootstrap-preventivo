  const form = document.getElementById("preventivo-form"); 
  const priceOutput = document.getElementById("final-price");
//orari
  const hourlyRates = {
    backend: 20.5,
    frontend: 15.3,
    analysis: 33.6
  };
//verifia codici promozionali
  const promoCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const tipoLavoro = document.getElementById("tipo-lavoro").value;
    const promoCode = document.getElementById("promo-code").value.trim().toUpperCase();
    const ore = 10;
    if (!tipoLavoro) return;
    let prezzo = hourlyRates[tipoLavoro] * ore;
    if (promoCode !== "") {
      if (promoCodes.includes(promoCode)) {
        prezzo *= 0.75; // Sconto 25%
      } else {
        alert("Codice promozionale non valido.");
      }
    }
    priceOutput.textContent = "€ " + prezzo.toFixed(2).replace(".", ",");
  });