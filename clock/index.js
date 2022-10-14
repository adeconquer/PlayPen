const container = document.querySelector('.container');
const hours = document.querySelector('.hours');
const mins = document.querySelector('.mins');
const secs = document.querySelector('.secs');


function getTime() {
    const date = new Date();
    hours.innerText = date.getHours().toString().length === 1 ? '0' + date.getHours() : date.getHours();
    mins.innerText = date.getMinutes().toString().length === 1 ? '0' + date.getMinutes() : date.getMinutes();
    secs.innerText = date.getSeconds().toString().length === 1 ? '0' + date.getSeconds() : date.getSeconds();
}

setInterval(() => getTime(), 1000)