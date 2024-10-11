import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.page.html',
  styleUrls: ['./see-more.page.scss'],
})
export class SeeMorePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMainWeatherPage() {
    this.router.navigate(['/main-weather']);
  }
}
