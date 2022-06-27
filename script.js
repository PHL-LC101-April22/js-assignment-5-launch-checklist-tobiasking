// Write your JavaScript code here!
window.addEventListener("load", function() {

let list = document.getElementById("faultyItems");
list.style.visibility = "hidden"
let form = document.querySelector ("form");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let pilotInput = document.querySelector("input[name=pilotName]");
            let pilot = pilotInput.value;

            let copilotInput = document.querySelector("input[name=copilotName]");
            let copilot = copilotInput.value;

            let fuelInput = document.querySelector("input[name=fuelLevel]");
            let fuelLevel = Number(fuelInput.value);

            let cargoInput = document.querySelector("input[name=cargoMass]");
            let cargoLevel = Number(cargoInput.value);

            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        })

    let planetList;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        planetList = result;
        console.log(planetList);
    }).then(function (){
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        console.log(planetList);
        let planet = pickPlanet(planetList);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
    })
    
 }); 