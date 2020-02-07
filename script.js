const balance = document.getElementById('balance');
const money_plus = document.getElementById('money_plus');
const money_minus = document.getElementById('money_minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
  { id: 1, text :'Flower', amount: -20 },
  { id: 2, text :'Salary', amount: 300 },
  { id: 3, text :'Dinner', amount: -10 },
  { id: 4, text :'Car', amount: 150 }
]

let transactions = dummyTransactions

// Add transaction to DOMlist
function addTransactionDOM(transaction) {
  const sign = transaction.amount < 0 ? '-' : '+';

  const item = document.createElement('li');

  // Add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

// <li class="minus">Cash <span class="divider"></span><span>-400</span><button class="delete-btn">x</button></li>

  item.innerHTML = `
    ${transaction.text} <span class="divider"></span><span>${sign}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button></li>
  `;

  list.appendChild(item);
}

// Update the balance, income and expenses
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  console.log(amounts);
}


function init() {
  list.innerHTML = '';

  transactions.forEach(addTransactionDOM);
  updateValues();
}

init();
