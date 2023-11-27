animals = [ //array of data, featuring animal species, names, ages, and genders
   {
      species: "dog",
      name: "spot",
      age: 7,
      gender: "male",
   },
   {
      species: "rabbit",
      name: "hops",
      age: 2,
      gender: "male",
   },
   {
      species: "hamster",
      name: "buddy",
      age: 3,
      gender: "female",
   },
   {
      species: "cat",
      name: "maxine",
      age: 8,
      gender: "female",
   },
   {
      species: "dog",
      name: "frances",
      age: 4,
      gender: "female",
   },
   {
      species: "cat",
      name: "francis",
      age: 5,
      gender: "male",
   },
]

function capitaliseWords(str) { 
   //function that will allow capitalisation of first letter of each word
   return str.replace(/\b\w/g, (char) => char.toUpperCase())
   //exercise: step1: split the string on a space
   //step 2: loop through resulting array, run capitalise statement
   //step 3: join array back to string, return results
   //concise: string -> array -> string
}

function searchAnimals() { //main search function
   searchTerm = document.getElementById("input").value.toLowerCase() //user input is taken, with the .toLowerCase variable allowing for non-character sensitive input of data
   resultDiv = document.getElementById("result") //resultDiv will allow user results to appear by calling to the div id="result" in the main.html file, see below for further use

   resultDiv.innerHTML = "" //will remove previous results upon searching for a new result by producing an empty string

   animals.forEach((animal) => { //forEach has been used as it is most effective at sifting through each object in an array
      if (animal.name.toLowerCase().includes(searchTerm) || animal.species.toLowerCase().includes(searchTerm) || animal.gender.toLowerCase() === searchTerm.toLowerCase()) { //these if statements allow user to search for any data in a specific object, be that by name, age, gender, or species. Searching by "dog" for example will show ALL dogs in the array data
         resultItem = document.createElement("div")
         resultItem.classList.add("result")
         capitalisedAnimalName = capitaliseWords(animal.name) //calls back to the previous capitalisation function to capitalise first letter of animal name
         capitalisedAnimalGender = capitaliseWords(animal.gender) //same as above but for gender word
         capitalisedAnimalSpecies = capitaliseWords(animal.species) //same as above but for species
         resultItem.textContent = `Name: ${capitalisedAnimalName}, Age: ${animal.age}, Gender: ${capitalisedAnimalGender}, Species: ${capitalisedAnimalSpecies}` //searches through array for data from specified objects, capitalises said data, and shows it as text on the results
         resultDiv.appendChild(resultItem)
      }
   })

   if (resultDiv.childElementCount === 0) {
      resultDiv.textContent = "Not in list." //if user enters data that does not exist in the array, it will show this as a Null result
   }
}

//Old code that did work and produced results in the console, but couldn't get it to display in search box
//function search() {
//   input = document.getElementById("input").value.toLowerCase()
//   animalDetails = animals.filter((e) => {
//      return Object.values(e).some((value) => {
//         return value.toString().toLowerCase().includes(input)
//      })
//   })
//   console.log(animalDetails)
//}



//task: user search function that allows user to search for species, and will show singular or plural results - complete


//second task: write array of alphabet and show lower case results and then allow upper case next to it

//update: make it so user can search with enter rather than clicking search

//third task: update css to make result look better. hard code results into html and get style right, then apply to JS div injections. take one result from HTML and put into JS
//as a string to serve as a template