const events = [{
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 240000,
    date: "06/01/2017"
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 250000,
    date: "06/01/2018"
  },
  {
    event: "ComicCon",
    city: "New York",
    state: "New York",
    attendance: 257000,
    date: "06/01/2019"
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 130000,
    date: "06/01/2017"
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 140000,
    date: "06/01/2018"
  },
  {
    event: "ComicCon",
    city: "San Diego",
    state: "California",
    attendance: 150000,
    date: "06/01/2019"
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 40000,
    date: "06/01/2017"
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 45000,
    date: "06/01/2018"
  },
  {
    event: "HeroesCon",
    city: "Charlotte",
    state: "North Carolina",
    attendance: 50000,
    date: "06/01/2019"
  },
];

buildDropDown();
//main entry poin into our app
//load the data from the events constant or local storage
function buildDropDown(){
    //grab the dropdown we want to add city names to
    let eventDD = document.getElementById("eventDropDown");
    eventDD.innerHTML = "";

    //pull the events from data we have
    let currentEvents = events;


    //distinct set of city names
    //let distinctCities = [... new Set(currentEvents.map((event)=>event.city))];
    let distinctCities = getDistinctCities(currentEvents);

    for(let index = 0;index < distinctCities.length; index++){
        let menuItem = `<li><a class="dropdown-item">${distinctCities[index]}</a></li>`;
        eventDD.innerHTML += menuItem;
    }
}

function getDistinctCities(currentEvents){

    let distinctCities = [];

    for(let index=0;index < currentEvents.length; index++){
        let eventObj = currentEvents[index];
        let city = eventObj.city;
        let foundCity = distinctCities.find((dc)=> dc == city);
        //search the array for the current name
        //if not found add it to the array
        if(foundCity == undefined){
            distinctCities.push(eventObj.city);
        }


    }

    return distinctCities;
} 