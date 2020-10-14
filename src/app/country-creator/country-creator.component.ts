import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-creator',
  templateUrl: './country-creator.component.html',
  styleUrls: ['./country-creator.component.scss']
})
export class CountryCreatorComponent implements OnInit {
  leaderInputName: string;
  selectedCountry: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectAmerica(): void {
    this.selectCountry('America');
  }
  selectChina(): void {
    this.selectCountry('China');
  }
  selectRussia(): void {
    this.selectCountry('Russia');
  }

  selectCountry(selectedCountry: string): void {
    // Change global variable for selected country
    this.selectedCountry = selectedCountry;

    console.log(this.selectedCountry + ' selected');
  }

  // SUBMIT COUNTRY DATA TO LOCAL STORAGE
  loadCountryDataToLocalStorage(): void {
    let startingLumber = 0;
    let startingSteel = 0;
    let startingGunpowder = 0;
    let startingFuel = 0;

    // this.leaderInputName = document.getElementById("leaderInputBox").value;
    // alert(leaderInputName)

    // Creating local storage values for now and future use
    localStorage.setItem('WWi-A1-leadername', this.leaderInputName);
    localStorage.setItem('WWi-A1-selectedcountry', this.selectedCountry);
    if (this.selectedCountry == 'America') {
      startingLumber = 100;
      startingSteel = 300;
      startingGunpowder = 200;
      startingFuel = 100;
    }
    if (this.selectedCountry == 'China') {
      startingLumber = 200;
      startingSteel = 100;
      startingGunpowder = 400;
      startingFuel = 100;
    }
    if (this.selectedCountry == 'Russia') {
      startingLumber = 300;
      startingSteel = 100;
      startingGunpowder = 100;
      startingFuel = 300;
    }

    // Refinery counts in local storage
    localStorage.setItem('WWi-A1-lumbermillcount', '0');
    localStorage.setItem('WWi-A1-steelminecount', '0');
    localStorage.setItem('WWi-A1-gunpowderplantcount', '0');
    localStorage.setItem('WWi-A1-fuelplantcount', '0');

    // Unit counts in local storage
    localStorage.setItem('WWi-A1-unitsoldiercount', '0');
    localStorage.setItem('WWi-A1-unitapccount', '0');
    localStorage.setItem('WWi-A1-unittankcount', '0');
    localStorage.setItem('WWi-A1-unitjetcount', '0');

    // Resource counts in local storage
    localStorage.setItem('WWi-A1-lumberresourcecount', startingLumber.toString());
    localStorage.setItem('WWi-A1-steelresourcecount', startingSteel.toString());
    localStorage.setItem('WWi-A1-gunpowderresourcecount', startingGunpowder.toString());
    localStorage.setItem('WWi-A1-fuelresourcecount', startingFuel.toString());

    // continue doin stuff
    // var mainApp = document.getElementById("main-app-container")
    // var creatorApp = document.getElementById("country-creator-splash")
    // creatorApp.style.display = "none";
    // mainApp.style.display = "block";

    // var industryContainer = document.getElementById("Industry-Container");
    // var trainingContainer = document.getElementById("Training-Container");
    // var operationsContainer = document.getElementById("Operations-Container");
    // var statisticsContainer = document.getElementById("Statistics-Container");
    // industryContainer.style.display = "block";
    // trainingContainer.style.display = "none";
    // operationsContainer.style.display = "none";
    // statisticsContainer.style.display = "none";
  }



}
