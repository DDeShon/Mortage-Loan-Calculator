document.getElementById("calc-button").addEventListener("click", calculate);

function calculate() {
  // calcLength();
  calcPrice();
  // calcDown();
}

// calculate net price
function calcPrice() {
  var price = document.getElementById("home-price").value;
  var netPrice = price - calcDown();
  console.log(netPrice);
  return netPrice;
}

// calculate down payment/percent:  price * down_percent OR price / down_payment
function calcDown() {
  var downPayment = document.getElementById("down-payment").value;
  var downPercent = document.getElementById("down-percent").value;
  // console.log(downPayment, downPercent);
  var down = null;
  if (downPayment == "") {
    down = downPercent * 0.01;
    // console.log(down);
    // return down;
  } else if (downPercent == "") {
    down = downPayment;
    // console.log(down);
    // return down;
  } else {
    down = null;
  }
  // console.log(down);
  return down;
}

// calculate loan length in months
function calcLength() {
  var loanLength = document.getElementById("loan-length").value;
  var loanMonths = loanLength * 12;
  console.log(loanMonths);
  // return loanMonths;
}

// calculate interest as a decimal:  (price - down) * interest rate
function calcInterest() {
  var interestRate = document.getElementById("interest-rate").value * 0.01;
  var interestMonthly = price * interestRate;
  console.log(interestMonthly);
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
function calcPayments() {
  var monthlyPayments = netPrice / loanMonths;

  return monthlyPayments;
}
