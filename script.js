function updateSIP() {
  let monthly = parseFloat(document.getElementById("monthly").value);
  let rate = parseFloat(document.getElementById("rate").value);
  let years = parseFloat(document.getElementById("years").value);

  document.getElementById("monthlyVal").innerText = "₹" + monthly.toLocaleString('en-IN');
  document.getElementById("rateVal").innerText = rate + "%";
  document.getElementById("yearsVal").innerText = years + " Yrs";

  let months = years * 12;
  let monthlyRate = rate / 12 / 100;

  let totalValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
  let investedAmount = monthly * months;
  let estReturns = totalValue - investedAmount;

  document.getElementById("investedOut").innerText = "₹" + Math.round(investedAmount).toLocaleString('en-IN');
  document.getElementById("returnsOut").innerText = "₹" + Math.round(estReturns).toLocaleString('en-IN');
  document.getElementById("totalOut").innerText = "₹" + Math.round(totalValue).toLocaleString('en-IN');
}
