import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WorldWarAngular';
  mode = 'industry';

  //Create the global storage variables for future use
  leaderInputName: string;
  selectedCountry: string;
  startingLumber: string;
  startingSteel: string;
  startingGunpowder: string;
  startingFuel: string;


  /**
   *
   */
  constructor() {
  }

  showMode(nextMode: string): void {
    this.mode = nextMode;
    console.log('mode set to ' + this.mode);
  }

  //---------------------COUNTRY SELECTOR BUTTONS----------------------------


  // Populate current amounts in html
  public popCurrentAmmounts(): void {
    // Populate Current Amounts for refineries in industry tab
    this.getCurrentAmount('WWi-A1-lumbermillcount', 'lumberMillCurrentCount');
    this.getCurrentAmount('WWi-A1-steelminecount', 'steelMineCurrentCount');
    this.getCurrentAmount('WWi-A1-gunpowderplantcount', 'gunpowderPlantCurrentCount');
    this.getCurrentAmount('WWi-A1-fuelplantcount', 'fuelPlantCurrentCount');

    // Populate Current Ammounts for units in training tab
    this.getCurrentAmount('WWi-A1-unitsolidercount', 'unitsoldierCurrentCount');
    this.getCurrentAmount('WWi-A1-unitapccount', 'unitapcCurrentCount');
    this.getCurrentAmount('WWi-A1-unittankcount', 'unittankCurrentCount');
    this.getCurrentAmount('WWi-A1-unitjetcount', 'unitjetCurrentCount');
  }

  // INCREMENTING INDUSTRY VALUES
  public onClick_createIndustryObject(x): void {
    let currentResourceCount = +localStorage.getItem(x);
    currentResourceCount += 1;
    localStorage.setItem(x, currentResourceCount.toString());
  }

  // INCREMENT UNIT VALUES
  public onClick_createUnitObject(x): void {
    let currentUnitCount = +localStorage.getItem(x);
    currentUnitCount += 1;
    localStorage.setItem(x, currentUnitCount.toString());
  }

  // GET CURRENT VALUES FOR CARD
  getCurrentAmount(x, y): void {
    const storageamount = localStorage.getItem(x);
    document.getElementById(y).innerHTML = 'Current Amount: ' + storageamount;
  }


}
