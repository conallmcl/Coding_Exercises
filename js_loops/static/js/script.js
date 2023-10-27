return_element = document.querySelector(".result")

fruits = ["apple","banana","grape","strawberry","kiwi","blueberry","raspberry","strawberry","banana","coconut","apple","banana","grape","strawberry","kiwi","blueberry","raspberry","strawberry","banana","coconut","apple","banana","grape","strawberry","kiwi","blueberry","raspberry","strawberry","banana","coconut"];

function search() {
    var input = document.getElementById("input").value,
    fruitNumber = 0
    fruits.forEach(fruit => {
        if (fruit = "apple"){
            fruitNumber++
        return_element.innerText = fruitNumber
    }
})
console.log(fruitNumber)
};



//var input = document.getElementById("input").value,
//    res = fruits.find(v => v== input);
//    console.log(res ? res : "Not in list")
//runSearch()
// add a user search function and button which will allow user to search through array for any specific fruit. Page itself needs to show result of total number of specified fruit