function gasType() {
  const selectedGasType = document
    .getElementById("gastype")
    .value.toLowerCase();
  const gasLiter = parseFloat(document.getElementById("gasliter").value);
  const membershipType = document
    .getElementById("membershiptype")
    .value.toLowerCase();

  const gasPrices = {
    "regular unleaded": 2.75,
    premium: 3.1,
    diesel: 2.9,
  };

  let discount = 0;
  if (membershipType === "premium") {
    discount = 0.2;
  } else if (membershipType === "red") {
    if (selectedGasType === "regular unleaded") {
      discount = 0.15;
    } else {
      discount = 0.12;
    }
  } else if (membershipType === "blue") {
    if (selectedGasType === "regular unleaded") {
      discount = 0.15;
    } else {
      discount = 0.1;
    }
  }

  const gasPrice = gasPrices[selectedGasType] || 0;
  const totalAmount = gasPrice * gasLiter * (1 - discount);

  const resultElement = document.getElementById("paidresult");

  if (totalAmount > 0) {
    resultElement.innerHTML = `Amount to be paid: $${totalAmount.toFixed(2)}`;
  } else {
    resultElement.innerHTML = "Please enter valid information.";
  }
}
