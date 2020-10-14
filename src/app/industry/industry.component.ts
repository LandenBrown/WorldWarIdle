import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // INCREMENTING INDUSTRY VALUES
  public onClick_createIndustryObject(x): void {
    let currentResourceCount = +localStorage.getItem(x);
    currentResourceCount += 1;
    localStorage.setItem(x, currentResourceCount.toString());
  }

  // GET CURRENT VALUES FOR CARD
  getCurrentAmount(x, y): void {
    const storageamount = localStorage.getItem(x);
    document.getElementById(y).innerHTML = 'Current Amount: ' + storageamount;
  }


}
