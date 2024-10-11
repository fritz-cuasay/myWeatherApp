import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.page.html',
  styleUrls: ['./main-weather.page.scss'],
})
export class MainWeatherPage implements OnInit {
  weeklyWeather = [
    { day: 'Mon', temp: 19, icon: 'assets/icon/raining.png', condition: 'Rainy' },
    { day: 'Tue', temp: 18, icon: 'assets/icon/raining.png', condition: 'Rainy' },
    { day: 'Wed', temp: 18, icon: 'assets/icon/raining.png', condition: 'Rainy' },
    { day: 'Thu', temp: 19, icon: 'assets/icon/raining.png', condition: 'Rainy' },
    { day: 'Fri', temp: 20, icon: 'assets/icon/raining.png', condition: 'Rainy' },
    { day: 'Sat', temp: 21, icon: 'assets/icon/raining.png', condition: 'Rainy' },
    { day: 'Sun', temp: 22, icon: 'assets/icon/raining.png', condition: 'Rainy' }
  ];

  airQuality = '3 - Low Health Risk';
  sunrise = '5:28 AM';
  uvIndex = '4 - Moderate';
  data:any;

  currentForecastIndex = 0;
  forecastViewSize = 3;


  constructor(private router: Router, private dataService: DataServiceService) { }

  // ngOnInit() { this.route.paramMap.subscribe(params => {const data = params.get('weatherData') 
  //   console.log(JSON.stringify(data))
  // }) }
  ngOnInit() {
      const data = this.dataService.getdata();
      console.log(data)
  }

  get WeatherData() {
    return this.data = this.dataService.getdata();;
  }

  getCurrentForecast() {
    return this.weeklyWeather.slice(this.currentForecastIndex, this.currentForecastIndex + this.forecastViewSize);
  }

  previousForecast() {
    if (this.currentForecastIndex > 0) {
      this.currentForecastIndex -= this.forecastViewSize;
    }
  }

  nextForecast() {
    if (this.currentForecastIndex + this.forecastViewSize < this.weeklyWeather.length) {
      this.currentForecastIndex += this.forecastViewSize;
    }
  }

  goToHomePage() {
    this.router.navigate(['/home']);
  }

  goToWelcomePage() {
    this.router.navigate(['/welcome']);
  }
  goToSeeMore() {
    this.router.navigate(['/see-more']);
  } 
}


