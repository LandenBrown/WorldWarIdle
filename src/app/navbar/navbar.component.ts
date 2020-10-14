import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mode: string;

  constructor(
    // private location: Location,
    private router: Router
  ) {
    this.mode = 'industry';
  }

  ngOnInit(): void {
    this.router.events.subscribe((rv: RouterEvent) => {
      if (rv instanceof NavigationEnd) {
        this.mode = rv.url.substr(1);
      }
      //console.log('router event, mode is ' + this.mode);
    });
  }

}
