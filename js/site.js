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

    let menuItem = `<li><a class="dropdown-item" onclick="getEvents(this)" data-city="All">All</a></li>`;
    eventDD.innerHTML += menuItem;

    for(let index = 0;index < distinctCities.length; index++){
        let menuItem = `<li><a class="dropdown-item" onclick="getEvents(this)" data-city="${distinctCities[index]}">${distinctCities[index]}</a></li>`;
        eventDD.innerHTML += menuItem;
    }

    displayStats(currentEvents);
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

//display the stats for the selected city
function displayStats(events){
    let total= 0;
    let average = 0;
    let most = 0;
    let least = events[0].attendance;
    let currentAttendance = 0;

    //display the total attendance
    for(let index = 0; index < events.length; index++){
        currentAttendance = events[index].attendance
        total += currentAttendance;
        average = total / events.length
        if (currentAttendance > most){
            most = currentAttendance;
        }
        if(currentAttendance < least){
            least = currentAttendance
        }
    }


    document.getElementById("total").innerHTML = total.toLocaleString();
    document.getElementById("average").innerHTML = Math.round(average).toLocaleString();
    document.getElementById("most").innerHTML = most.toLocaleString();
    document.getElementById("least").innerHTML = least.toLocaleString();

}

//get events for a given city
function getEvents(element){
    let city = element.getAttribute("data-city");
    let filteredEvents = events;

    if(city == 'All'){
        filteredEvents == events;
    } else { filteredEvents = events.filter(function (item){
        if (item.city == city){
            return item;
        }
        })
    }

    displayStats(filteredEvents);
}
