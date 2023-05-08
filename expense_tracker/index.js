const balance = document.querySelector('#balance')
const money_plus = document.querySelector('#money-plus')
const money_minus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const text = document.querySelector('#text')
const amount = document.querySelector('#amount')

// const dummyTransactions = [
//     { id: 1, text: 'Flower', amount: -20 },
//     { id: 2, text: 'Salary', amount: 300 },
//     { id: 3, text: 'Book', amount: -10 },
//     { id: 4, text: 'Camera', amount: 150 }
// ]

const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// add transcation
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('please and a text and amount')
    } else {
        const transaction = {
            id: generateID(),
            text: text.value,
            amount: +amount.value
        }
        console.log(transaction)

        transactions.push(transaction)
        addTransactionDOM(transaction)
        updateValues()
        updateLocalStorage()

        text.value = ''
        amount.value = ''
    }
}

// Generate random id
function generateID() {
    return Math.floor(Math.random() * 100000000)
}

// Add transactions to DOM list
function addTransactionDOM(transaction) {
    //Get sign
    const sign = transaction.amount < 0 ? '-' : '+'

    const item = document.createElement('li')

    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus')

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}<button class="delete-btn" onclick=removeTransaction(${transaction.id})>x</button></span>
    `
    list.appendChild(item)
}

// update the balance, income and expense
function updateValues() {
    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const income = amounts.length > 0 ? amounts
        .filter((amount) => amount > 0)
        .reduce((acc, amount) => acc += amount).toFixed(2) : 0.00

    const expense = amounts.length > 0 ? (amounts
            .filter((amount) => amount < 0)
            .reduce((acc, amount) => (acc += amount), 0).toFixed(2) *
            -1) : 0.00
        // console.log(expense)
    balance.innerText = `${total}`
    money_plus.innerText = `${income}`
    money_minus.innerText = `${expense}`
}


// remove transaction by id
function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id)
    updateLocalStorage()
    init()
}

// update local storage transaction
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions))
}

//init app
function init() {
    list.innerHTML = ''
    transactions.forEach(addTransactionDOM)
    updateValues()
}

init();

form.addEventListener('submit', addTransaction)