const search = document.querySelector("#search"),
    submit = document.querySelector("#submit"),
    random = document.querySelector("#random"),
    mealsEl = document.querySelector("#meals"),
    resultHeading = document.querySelector("#result-heading"),
    single_mealEl = document.querySelector("#single-meal");

// Serach meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    // clear single meal
    single_mealEl.innerHTML = "";

    // Get tsearch term
    const term = search.value;

    // check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;
                if (data.meals == null) {
                    resultHeading.innerHTML = '<p>There are no search results. Try again!</p>'
                } else {
                    mealsEl.innerHTML = data.meals.map(meal => `
                    <div class="meal">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
                        <div class="meal-info" data-mealID="${meal.idMeal}">
                            <h3>${meal.strMeal}</h3>
                        </div>
                    </div>`)
                        .join('')
                }
            });
        // clear searh text
        search.value = '';
    } else {
        alert('Please enter a search term');
    }
}

// Fetch meal by ID

function getMealByID(mealID) {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0];
            console.log(meal);
            addMealToDOM(meal);
        })
}

// add meal to DOM
function addMealToDOM(meal) {
    const ingredients = [];

    for (let i = 1; i < 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
        }else {
            break;
        }
     }
     console.log(ingredients.length)
     single_mealEl.innerHTML = `
        <div class="single-meal">
            <h1>${meal.strMeal}</h1>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}"/>
            <div class="single-meal-info">
                ${meal.strCategory ? `<p>${meal.strCategory}<p>` : ''}
                ${meal.strArea ? `<p>${meal.strArea}<p>` : ''}
            </div>
            <div class="main">
                <p>${meal.strInstructions}<p>
                <h2>Ingredients</h2>
                <ul>${ingredients.map(ing => `<li>${ing}<li/>` ).join('')}
                </ul>
            </div>

         </div>   

     `
}

// Event listeners
submit.addEventListener("submit", searchMeal)

mealsEl.addEventListener('click', e => {
    // console.log(e)
    const mealInfo = e.composedPath().find(item => {
            if (item.classList) {
                return item.classList.contains('meal-info')
            } else {
                return false
            };
        })
        // console.log(mealInfo)
    if (mealInfo) {
        const mealID = mealInfo.getAttribute('data-mealid');
        getMealByID(mealID)
    }

})