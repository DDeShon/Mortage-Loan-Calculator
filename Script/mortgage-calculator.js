// calculate loan length in months
function calcLength() {
  var loanLength = document.getElementById("loan-length").value;
  console.log(loanLength);
  var loanMonths = loanLength / 12;
  return loanMonths;
}

// calculate interest as a decimal:  (price - down) * interest rate
function calcInterest() {
  var interestRate = document.getElementById("interest-rate").value * 0.01;
  var interestMonthly = price * interestRate;
  return interestMonthly;
}

// calculate down payment/percent:  price * down_percent OR price / down_payment
function calcDown() {
  // var downPayment = document.getElementById("down-payment").value;
  // var downPercent = document.getElementById("down-percent").value;
  var down = null;
  return down;
}

// calculate net price
function calcPrice() {
  var price = document.getElementById("home-price").value;
  var netPrice = price - down;
  return netPrice;
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
