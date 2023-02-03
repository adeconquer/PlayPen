'use strict'

const addUser = document.querySelector('#add-user');
const double = document.querySelector('#double');
const showMillionaires = document.querySelector('#show-millionaires');
const sort = document.querySelector('#sort');
const calculateWealth = document.querySelector('#calculate-wealth');
const main = document.querySelector('#main');

let data = [];

// Fetch random user and add monney
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const [user] = data.results
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    }
    addData(newUser)
}


// Add new obj to data array
function addData(obj) {
    data.push(obj);
    updateDOM();
}

// double money
function doubleMoney() {
    data = data.map(user => {
        return {...user, money: user.money * 2 }
    })

    updateDOM()
}

// double sort richest
function sortByRichest() {
    data.sort((a, b) => b.money - a.money)

    updateDOM()
}

// show only millionaires
function showOnlymillionaires() {

    data = data.filter(item => item.money > 1000000);
    updateDOM()
}

// calculate wealth
function calculateTheWealth() {
    const wealth = data.reduce((acc, item) => (acc += item.money), 0);
    console.log(wealth)
    const el = document.createElement('div');
    el.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
        wealth
      )}</strong></h3>`;
    main.appendChild(el);
}

// Update the DOM
function updateDOM(providedData = data) {
    // Clear main div
    main.innerHTML = `<h2><strong>Person</strong> Wealth</h2>`
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
};

// Format number as money
function formatMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)11111111111111/g, '$&,');
};

// Event Listerners
addUser.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
sort.addEventListener('click', sortByRichest);
showMillionaires.addEventListener('click', showOnlymillionaires);
calculateWealth.addEventListener('click', calculateTheWealth);