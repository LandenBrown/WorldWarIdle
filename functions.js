// Test slack integration
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


//ONLOAD FUNCTION
function loadInitialContent(){
    var mainApp = document.getElementById("main-app-container")
    var creatorApp = document.getElementById("country-creator-splash")
    mainApp.style.display = "none";
    creatorApp.style.display = "none";

    if ("WWi-A1-leadername" in localStorage) {
        mainApp.style.display = "block";
        creatorApp.style.display = "none";
        //alert("data exists in local storage...")
        var industryContainer = document.getElementById("Industry-Container");
        var trainingContainer = document.getElementById("Training-Container");
        var operationsContainer = document.getElementById("Operations-Container");
        var statisticsContainer = document.getElementById("Statistics-Container");
        industryContainer.style.display = "block";
        trainingContainer.style.display = "none";
        operationsContainer.style.display = "none";
        statisticsContainer.style.display = "none";

    }
    else{
        creatorApp.style.display = "block";
        mainApp.style.display = "none";
        //alert("data does not exist in local storage...")
    }

}


//NAV BAR FUNCTIONS

function toggleIndustry() {
    //Change styling for selected nav item
    var industryItem = document.getElementById("Nav-Item-Industry")
    var trainingItem = document.getElementById("Nav-Item-Training")
    var operationsItem = document.getElementById("Nav-Item-Operations")
    var statisticsItem = document.getElementById("Nav-Item-Statistics")

    //Add styling to selected element and remove from others
    $(industryItem).addClass("fixed-nav-bar-item-selected");
    $(trainingItem).removeClass("fixed-nav-bar-item-selected");
    $(operationsItem).removeClass("fixed-nav-bar-item-selected");
    $(statisticsItem).removeClass("fixed-nav-bar-item-selected");

    //Display appropriate page
    var industryContainer = document.getElementById("Industry-Container");
    var trainingContainer = document.getElementById("Training-Container");
    var operationsContainer = document.getElementById("Operations-Container");
    var statisticsContainer = document.getElementById("Statistics-Container");
    if (industryContainer.style.display === "none"){
        industryContainer.style.display = "block";
        trainingContainer.style.display = "none";
        operationsContainer.style.display = "none";
        statisticsContainer.style.display = "none";
    }
};

function toggleTraining() {
    //Change styling for selected nav item
    var industryItem = document.getElementById("Nav-Item-Industry")
    var trainingItem = document.getElementById("Nav-Item-Training")
    var operationsItem = document.getElementById("Nav-Item-Operations")
    var statisticsItem = document.getElementById("Nav-Item-Statistics")

    //Add styling to selected element and remove from others
    $(trainingItem).addClass("fixed-nav-bar-item-selected");
    $(industryItem).removeClass("fixed-nav-bar-item-selected");
    $(operationsItem).removeClass("fixed-nav-bar-item-selected");
    $(statisticsItem).removeClass("fixed-nav-bar-item-selected");

    //Display appropriate page
    var industryContainer = document.getElementById("Industry-Container");
    var trainingContainer = document.getElementById("Training-Container");
    var operationsContainer = document.getElementById("Operations-Container");
    var statisticsContainer = document.getElementById("Statistics-Container");
    if (trainingContainer.style.display === "none"){
        trainingContainer.style.display = "block";
        industryContainer.style.display = "none";
        operationsContainer.style.display = "none";
        statisticsContainer.style.display = "none";
    }

}; 
function toggleOperations() {
    //Change styling for selected nav item
    var industryItem = document.getElementById("Nav-Item-Industry")
    var trainingItem = document.getElementById("Nav-Item-Training")
    var operationsItem = document.getElementById("Nav-Item-Operations")
    var statisticsItem = document.getElementById("Nav-Item-Statistics")

    //Add styling to selected element and remove from others
    $(operationsItem).addClass("fixed-nav-bar-item-selected");
    $(trainingItem).removeClass("fixed-nav-bar-item-selected");
    $(industryItem).removeClass("fixed-nav-bar-item-selected");
    $(statisticsItem).removeClass("fixed-nav-bar-item-selected");

    //Display appropriate page
    var industryContainer = document.getElementById("Industry-Container");
    var trainingContainer = document.getElementById("Training-Container");
    var operationsContainer = document.getElementById("Operations-Container");
    var statisticsContainer = document.getElementById("Statistics-Container");
    if (operationsContainer.style.display === "none"){
        operationsContainer.style.display = "block";
        trainingContainer.style.display = "none";
        industryContainer.style.display = "none";
        statisticsContainer.style.display = "none";
    }
    
}; 
function toggleStatistics() {
    //Change styling for selected nav item
    var industryItem = document.getElementById("Nav-Item-Industry")
    var trainingItem = document.getElementById("Nav-Item-Training")
    var operationsItem = document.getElementById("Nav-Item-Operations")
    var statisticsItem = document.getElementById("Nav-Item-Statistics")

    //Add styling to selected element and remove from others
    $(statisticsItem).addClass("fixed-nav-bar-item-selected");
    $(trainingItem).removeClass("fixed-nav-bar-item-selected");
    $(operationsItem).removeClass("fixed-nav-bar-item-selected");
    $(industryItem).removeClass("fixed-nav-bar-item-selected");

    //Display appropriate page
    var industryContainer = document.getElementById("Industry-Container");
    var trainingContainer = document.getElementById("Training-Container");
    var operationsContainer = document.getElementById("Operations-Container");
    var statisticsContainer = document.getElementById("Statistics-Container");
    if (statisticsContainer.style.display === "none"){
        statisticsContainer.style.display = "block";
        trainingContainer.style.display = "none";
        operationsContainer.style.display = "none";
        industryContainer.style.display = "none";
    }
}; 

//---------------------END OF NAV BAR FUNCTIONS ---------------------------

 

//---------------------COUNTRY SELECTOR BUTTONS----------------------------
//Create the global storage variables for future use
var leaderInputName;
var selectedCountry;


function toggleAmericaSelected() {
    //Change global variable for selected country
    selectedCountry = "America"
    //Change styling for selected nav item
    var americaItem = document.getElementById("americaSelector")
    var chinaItem = document.getElementById("chinaSelector")
    var russiaItem = document.getElementById("russiaSelector")

    //Add styling to selected element and remove from others
    $(americaItem).addClass("country-selector-col-selected");
    $(chinaItem).removeClass("country-selector-col-selected");
    $(russiaItem).removeClass("country-selector-col-selected");

    //Display appropriate page
    var americaContainer = document.getElementById("america-selected-container");
    var chinaContainer = document.getElementById("china-selected-container");
    var russiaContainer = document.getElementById("russia-selected-container");
    if (americaContainer.style.display === "none"){
        americaContainer.style.display = "block";
        chinaContainer.style.display = "none";
        russiaContainer.style.display = "none";
    }
    //alert(selectedCountry);
    return selectedCountry;
};

function toggleChinaSelected() {
    //Change global variable for selected country
    selectedCountry = "China"
    //Change styling for selected nav item
    var americaItem = document.getElementById("americaSelector")
    var chinaItem = document.getElementById("chinaSelector")
    var russiaItem = document.getElementById("russiaSelector")

    //Add styling to selected element and remove from others
    $(chinaItem).addClass("country-selector-col-selected");
    $(americaItem).removeClass("country-selector-col-selected");
    $(russiaItem).removeClass("country-selector-col-selected");

    //Display appropriate page
    var americaContainer = document.getElementById("america-selected-container");
    var chinaContainer = document.getElementById("china-selected-container");
    var russiaContainer = document.getElementById("russia-selected-container");
    if (chinaContainer.style.display === "none"){
        chinaContainer.style.display = "block";
        americaContainer.style.display = "none";
        russiaContainer.style.display = "none";
    }
    //alert(selectedCountry);
    return selectedCountry;
};

function toggleRussiaSelected() {
    //Change global variable for selected country
    selectedCountry = "Russia"
    //Change styling for selected nav item
    var americaItem = document.getElementById("americaSelector")
    var chinaItem = document.getElementById("chinaSelector")
    var russiaItem = document.getElementById("russiaSelector")

    //Add styling to selected element and remove from others
    $(russiaItem).addClass("country-selector-col-selected");
    $(chinaItem).removeClass("country-selector-col-selected");
    $(americaItem).removeClass("country-selector-col-selected");

    //Display appropriate page
    var americaContainer = document.getElementById("america-selected-container");
    var chinaContainer = document.getElementById("china-selected-container");
    var russiaContainer = document.getElementById("russia-selected-container");
    if (russiaContainer.style.display === "none"){
        russiaContainer.style.display = "block";
        chinaContainer.style.display = "none";
        americaContainer.style.display = "none";
    }
    //alert(selectedCountry);
    return selectedCountry;
};

// SUBMIT COUNTRY DATA TO LOCAL STORAGE
        
function loadCountryDataToLocalStorage(){
    var startingLumber = 0
    var startingSteel = 0
    var startingGunpowder = 0
    var startingFuel = 0
    leaderInputName = document.getElementById("leaderInputBox").value;
    //alert(leaderInputName)
    // Creating local storage values for now and future use
    localStorage.setItem("WWi-A1-leadername", leaderInputName);
    localStorage.setItem("WWi-A1-selectedcountry", selectedCountry);
    if (selectedCountry == "America"){
        startingLumber = 100;
        startingSteel = 300;
        startingGunpowder = 200;
        startingFuel = 100;
    }
    if (selectedCountry == "China"){
        startingLumber = 200;
        startingSteel = 100;
        startingGunpowder = 400;
        startingFuel = 100;
    }
    if (selectedCountry == "Russia"){
        startingLumber = 300;
        startingSteel = 100;
        startingGunpowder = 100;
        startingFuel = 300;
    }
    //Refinery counts in local storage
    localStorage.setItem("WWi-A1-lumbermillcount", 0)
    localStorage.setItem("WWi-A1-steelminecount", 0)
    localStorage.setItem("WWi-A1-gunpowderplantcount", 0)
    localStorage.setItem("WWi-A1-fuelplantcount", 0)
    //Unit counts in local storage
    localStorage.setItem("WWi-A1-unitsoldiercount", 0)
    localStorage.setItem("WWi-A1-unitapccount", 0)
    localStorage.setItem("WWi-A1-unittankcount", 0)
    localStorage.setItem("WWi-A1-unitjetcount", 0)
    //Resource counts in local storage
    localStorage.setItem("WWi-A1-lumberresourcecount", startingLumber)
    localStorage.setItem("WWi-A1-steelresourcecount", startingSteel)
    localStorage.setItem("WWi-A1-gunpowderresourcecount", startingGunpowder)
    localStorage.setItem("WWi-A1-fuelresourcecount", startingFuel)
    //continue doin stuff
    var mainApp = document.getElementById("main-app-container")
    var creatorApp = document.getElementById("country-creator-splash")
    creatorApp.style.display = "none";
    mainApp.style.display = "block";
    var industryContainer = document.getElementById("Industry-Container");
    var trainingContainer = document.getElementById("Training-Container");
    var operationsContainer = document.getElementById("Operations-Container");
    var statisticsContainer = document.getElementById("Statistics-Container");
    industryContainer.style.display = "block";
    trainingContainer.style.display = "none";
    operationsContainer.style.display = "none";
    statisticsContainer.style.display = "none";
}



//INCREMENTING INDUSTRY VALUES
function onClick_createIndustryObject(x){
    var currentResourceCount = localStorage.getItem(x);
    currentResourceCount = parseInt(currentResourceCount);
    currentResourceCount += 1;
    localStorage.setItem(x, currentResourceCount);
}

//INCREMENT UNIT VALUES
function onClick_createUnitObject(x){
    var currentUnitCount = localStorage.getItem(x);
    currentUnitCount = parseInt(currentUnitCount);
    currentUnitCount += 1;
    localStorage.setItem(x, currentUnitCount);
}




//Wait for page to load before attempting to interact with any elements
$(document).ready(loadInitialContent);
