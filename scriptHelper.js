// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  document.getElementById('missionTarget').innerHTML =
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src='${imageUrl}'>`;
}

function validateInput(testInput) {
        if (!testInput) {
            return 'Empty';
        } else if (isNaN(testInput)) {
            return 'Not a Number';
        } else if (!isNaN(testInput)) {
            return 'Is a Number';
        }
        return '';
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot} is ready for launch`;
        if (fuelLevel < 10000){
            list.style.visibility = 'visible';
            document.getElementById('fuelStatus ').innerHTML = 'Fuel level is too low for launch!';
            document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch!';
            document.getElementById('launchStatus').style.color = "Red";
        }
        if (cargoLevel > 10000){
            list.style.visibility = 'visible';
            document.getElementById('cargoStatus').innerHTML = "Cargo mass is too heavy for launch!"
            document.getElementById('fuelStatus ').innerHTML = 'Fuel level is too low for launch!';
            document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch!';
            document.getElementById('launchStatus').style.color = "Red";
        }
        if (fuelLevel < 10000 && cargoLevle > 10000) {
            list.style.visibilty = 'visible';
            document.getElementById('cargoStatus').innerHTML = "Cargo mass is too heavy for launch!"
            document.getElementById('fuelStatus ').innerHTML = 'Fuel level is too low for launch!';
            document.getElementById('launchStatus').innerHTML = 'Shuttle is not ready for launch!';
            document.getElementById('launchStatus').style.color = "Red";
        }
        if (fuelLevel >= 10000 & cargoLevel <= 10000) {
            list.style.visibility = 'visible';
            document.getElementById('cargoStatus').innerHTML = "Cargo mass is acceptable for launch!"
            document.getElementById('fuelStatus ').innerHTML = 'Fuel level is acceptable for launch!';
            document.getElementById('launchStatus').innerHTML = 'Shuttle is ready for launch!';
            document.getElementById('launchStatus').style.color = "Green";
        }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        planetsReturned = response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let target = (Math.ceil(Math.random()*5));
    return planets[target]; 
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
