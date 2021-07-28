// Add event listener to submit button
document.getElementById('loan-form').addEventListener('submit', e => {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 2000);
  e.preventDefault();
});

// Hide results

// Show loader

// Calculate Results
function calculateResults() {
  // UI VARS
  const amount = document.getElementById('amount'); // Amount
  const interest = document.getElementById('interest'); // Interests
  const years = document.getElementById('years'); // Years
  const monthlyPayment = document.getElementById('monthly-payments'); // Monthly Payments
  const totalPayment = document.getElementById('total-payment');// Total Payments
  const totalInterest = document.getElementById('total-interest');// Total Interest

  const principal = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12

  // Compute monthly payments
  const x = Math.pow(1 + calculateInterest, calculatedPayments);
  const monthly = (principal * x * calculateInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';

  } else showError('Check your numbers.');
}

function showError(error) {
  // create div
  const errorDiv = document.createElement('div');

  // get elements
  const card = document.querySelector('.card');// .card
  const heading = document.querySelector('.heading')// .heading

  errorDiv.classList.add('alert', 'alert-danger'); // add class (alert alert-danger)
  // card.classList = 'alert', 'alert-danger'; // does same thing as above

  // create a text node and append to errorDiv
  errorDiv.appendChild(document.createTextNode(error));

  // insert error before heading
  card.insertBefore(errorDiv, heading);

  setTimeout(() => {
    clearError();
  }, 2000);
}

function clearError() {
  document.querySelector('.alert').remove();
  document.getElementById('loading').style.display = 'none';
}
