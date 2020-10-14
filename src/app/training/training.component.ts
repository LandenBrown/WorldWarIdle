import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
