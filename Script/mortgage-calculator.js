document.getElementById("calc-button").addEventListener("click", calculate);

function calculate() {
  const loanMonths = calcLength();
  const netPrice = calcPrice();
  const monthlyInterest = calcInterest(netPrice);
  calcPayments(netPrice, loanMonths, monthlyInterest);
}

// calculate net price
function calcPrice() {
  var price = document.getElementById("home-price").value;
  var netPrice = price - calcDown();
  console.log("Net price is " + netPrice);
  return netPrice;
}

// calculate down payment/percent:  price * down_percent OR price / down_payment
function calcDown() {
  var downPayment = document.getElementById("down-payment").value;
  var downPercent = document.getElementById("down-percent").value;
  // var down = null;
  if (downPayment == "") {
    downDec = downPercent * 0.01;
    down = document.getElementById("home-price").value * downDec;
  } else if (downPercent == "") {
    down = downPayment;
  } else {
    down = null;
    alert("Please enter either Down Payment amount OR percent.");
  }
  return down;
}

// calculate loan length in months
function calcLength() {
  var loanLength = document.getElementById("loan-length").value;
  var loanMonths = loanLength * 12;
  console.log("Number of months is " + loanMonths);
  return loanMonths;
}

// calculate interest as a decimal:  (price - down) * interest rate
function calcInterest(netPrice) {
  var interestRate =
    Math.round(document.getElementById("interest-rate").value * 0.01 * 1e3) /
    1e3;
  console.log("Interest rate is " + interestRate);
  var interestMonthly =
    Math.round(((netPrice * interestRate) / 12) * 1e2) / 1e2;
  console.log("Monthly interest is " + interestMonthly);
  return interestMonthly;
}

// calculate property tax
function calcTax() {
  // var propertyTax = document.getElementById("property-tax").value;
  // var taxPercent = document.getElementById("tax-percent").value;
  var tax = null;
  return tax;
}

// calculate insurance payment
function calcInsurance() {
  // var insurance = document.getElementById("home-insurance").value;
  var insurancePayment = insurance / 12;
  return insurancePayment;
}

// formula:  price - down + interest + tax (opt) + insurance (opt) / length
function calcPayments(netPrice, loanMonths, monthlyInterest) {
  var monthlyPrice = netPrice / loanMonths;
  var monthlyPayments =
    Math.round((monthlyPrice + monthlyInterest) * 1e2) / 1e2;
  console.log("Monthly payment is " + monthlyPayments);
  return monthlyPayments;
}
