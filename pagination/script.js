const items = ["Harry", "Ross",
        "Bruce", "Cook",
        "Carolyn", "Morgan",
        "Albert", "Walker",
        "Randy", "Reed",
        "Larry", "Barnes",
        "Lois", "Wilson",
        "Jesse", "Campbell",
        "Ernest", "Rogers",
        "Theresa", "Patterson",
        "Henry", "Simmons",
        "Michelle", "Perry",
        "Frank", "Butler",
        "Shirley"
    ]
    // console.log(items)

let currentPage = 1;

// Get the total number of items in the list
const totalItems = items.length;
// console.log(totalItems)

// Set the number of items to display per page
const itemsPerPage = 5;

// Calculate the total number of pages needed
const totalPages = Math.ceil(totalItems / itemsPerPage);
// console.log(totalPages)

// Create list items container
let itemList = document.createElement('ul');

// Create the pagination controls
const paginationContainer = document.createElement('div');
paginationContainer.className = 'pagination';

// Create left arrow
const leftArrow = document.createElement('button')
leftArrow.innerText = '<<'
paginationContainer.appendChild(leftArrow)

for (let i = 0; i < totalPages; i++) {
    // Create a button for each page
    const pageButton = document.createElement('button');
    pageButton.innerText = i + 1;

    // Set the active page
    if (currentPage === i) {
        pageButton.className = 'active';
    }

    // Add the button to the pagination container

    paginationContainer.appendChild(pageButton);
}

// Create left arrow
const rightArrow = document.createElement('button')
rightArrow.innerText = '>>'
paginationContainer.appendChild(rightArrow)

function leftArrowFunc(e) {
    // console.log('arrows');
    if (e.target.innerText === '<<' && currentPage !== 1) {
        // console.log('left arrow')
        currentPage -= 1;
        displayItems(currentPage)
    }
}

function rightArrowFunc(e) {
    // console.log('arrows');
    if (e.target.innerText === '>>' && currentPage !== totalPages) {
        // console.log('right arrow')
        currentPage += 1;
        displayItems(currentPage)
    }
}

// Add an event listener to the button to handle clicks
paginationContainer.addEventListener('click', e => {
    // console.log(e)
    if (e.target.tagName = 'BUTTON' && !Number.isNaN(+e.target.innerText)) {
        console.log('number')
        currentPage = parseInt(e.target.innerText);
        displayItems(currentPage);
    } else {
        if (e.target.innerText === '<<') leftArrowFunc(e);
        if (e.target.innerText === '>>') rightArrowFunc(e);
    }

});

// Add the list Items to the page
document.body.appendChild(itemList);

// Add the pagination controls to the page
document.body.appendChild(paginationContainer);

// Function to display the items for a given page
function displayItems(page) {
    // Calculate the start and end index for the items to display on the page
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Use the slice() method to get the items for the current page
    const pageItems = items.slice(startIndex, endIndex);

    // Clear the existing items from the list
    itemList.innerHTML = '';

    // Loop through the items for the current page and add them to the list
    for (const item of pageItems) {
        // Create the list item
        const listItem = document.createElement('li');
        listItem.innerText = item;

        // Add the item to the list
        itemList.appendChild(listItem);
    }
}

// 

displayItems(currentPage)