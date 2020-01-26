// Question 1: Create an object called cat. Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".
const cat = {
    complain: function() {
        console.log("Meow!");
    }
}


// Question 2: Select the h3 using the querySelector method and assign it to a variable called heading.
const heading = document.querySelector("h3");


// Question 3: Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize = "2em";


// Question 4: Add a class to the heading variable called subheading.
heading.classList.add("subheading");


// Question 5: Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
const paragraphs = document.querySelectorAll("p");


// Question 6: Select the div by its class, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p>.
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = `<p>New paragraph</p>`;


// Question 7: Create a function that has one argument called catArray. Inside the function, loop through the catArray argument and console log the name property in each object. Call the function and pass in the cats variable.
function catFunction(catArray) {
    for(let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

catFunction(cats);


// Question 8: Using the function and cats variable from the above question, instead of logging the name property, wrap each name property in an h5 tag, add it to a variable you declare before the loop and return the variable from the function after the loop.
const newHTML = newCatFunction(cats);

function newCatFunction(newCatArray) {
    let catsHTML = "";

    for (let i = 0; i < newCatArray.length; i++) {
        catsHTML += `<h5>${newCatArray[i].name}</h5>`;
    }

    return catsHTML;
}


// Question 9: Call the function from question 8, pass it the cats variable from question 7 and set the inner HTML of the resultsContainer variable from question 6 to the return value of the function.
resultsContainer.innerHTML = newCatFunction(cats);


// Question 10: Using the function from question 8, add a p element containing the age property from each object. If the age property is missing, it should display Age unknown instead. Wrap the h5 and p in a div.
const moreHTML = newCatFunction(cats);

function newCatFunction(anotherCatArray) {
    let moreHTML = "";

    for (let i = 0; i < anotherCatArray.length; i++) {
       let catsAge = "Age Unknown";
       if (cats[i].age) {
           catsAge = cats[i].age;
       }

        moreHTML += `<div>
                        <h5>${anotherCatArray[i].name}</h5>
                        <p>${catsAge}</p>
                    </div>`;
    }

    return moreHTML;
}