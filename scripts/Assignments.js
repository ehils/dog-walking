import { getPets, getWalkers, getCities, getWalkerCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()

export const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
        let assignmentObjectArray = []
    // Iterate the array value of walkerCities
    for (const walkerCity of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (walkerCity.walkerId === walker.id){
            // If it does, add the current object to the array of assignments
            assignmentObjectArray.push(walkerCity)
        }
    }
    // After the loop is done, return the assignments array
    return assignmentObjectArray
}

// Define a function that builds a string of city names. Needs a paramter for assignments array.
export const getCityNames = (walkerCities) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""
    // Iterate the array of assignment objects
    for (const walkerCity of walkerCities) {
        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            if (walkerCity.cityId === city.id){
                cityNames += city.name
                cityNames += " "
            } 
        }
    }

    // Add the name of the matching city to the array of city names

    // After the loop is done, return the string
    return cityNames
}

export const Assignments = () => {
        let assignmentHTML = "<ul>"
    
        for (const walker of walkers) {
            const filteredWalker = filterWalkerCitiesByWalker(walker)
            const cityName = getCityNames(filteredWalker)
            assignmentHTML += 
                `<li>
                    ${walker.name} services ${cityName}
                </li>`
        }
        assignmentHTML += "</ul>"
    return assignmentHTML
    }
// const assignments = Assignments()
// document.querySelector("#container") = assignments

// Function whose responsibility is to find the walker assigned to a pet
// const findWalker = (pet, allWalkers) => {
//     let petWalker = null

//     for (const walker of allWalkers) {
//         if (walker.id === pet.walkerId) {
//             petWalker = walker
//         }
//     }

//     return petWalker
// }

// export const Assignments = () => {
//     let assignmentHTML = "<ul>"

//     for (const currentPet of pets) {
//         const currentPetWalker = findWalker(currentPet, walkers)
//         assignmentHTML += `
//             <li>
//                 ${currentPet.name} is being walked by
//                 ${currentPetWalker.name} in ${currentPetWalker.city}
//             </li>
//         `
//     }

//     assignmentHTML += "</ul>"

//     return assignmentHTML
// }

/*  1)function that returns array for walker clicked on
    -array should contain all matching objects
    2)function takes above array
    - use cityID property to find matching city
    -return a string containing city names*/
// const filteredWalkerCities = (walker) => {
// let walkerCitiesArray = [] 
// // iterate walkers array
// // for (const walker of walkers) {
//      // need to find all cities for each walker
//     // if (walker.id === walkerCities.walkerId){
//         // iterate walker cities
//         for (const walkerCity of walkerCities) {
//         // walker ID (in walkerCities) foreign key matches in walkers 
//         if (walkerCity.cityID === walker.Id)
//             walkerCities.push(walkerCity)
//         }
//     return walkerCitiesArray
// }

// The function need the walker information, so define a parameter




    /*iterate cities array 

    if city ID foreign key matches ID PK on cities
    found city object for walker
   concatanate cities for each walker into a string */