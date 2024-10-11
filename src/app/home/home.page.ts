import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { state } from '@angular/animations';
import { DataServiceService } from '../data-service.service';
import { NavController } from '@ionic/angular';
import { MainWeatherPage } from '../main-weather/main-weather.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [DatePipe]
})
export class HomePage implements OnInit {
  todayWeather: { time: string, temp: number }[] = [];
  //weatherData: any;
  city: any;
  currentDate: string = '';
  currentTemp: any=[];
  maxTemp: any;
  minTemp: any;

  constructor(private router: Router, private weatherService: WeatherService, private datePipe: DatePipe, private dataService: DataServiceService, private navcontroller: NavController) { }

  ngOnInit() {
    this.loadServiceWeather();
    const transformedDate = this.datePipe.transform(new Date(), 'MMMM d, y');
    this.currentDate = transformedDate !== null ? transformedDate : '';
  }

  loadWeather() {
    const lat = 13.841000; 
    const lon = 121.206146; 
    

    //this.weatherService.getAllWeatherDetail(lat, lon).subscribe(data => {
    //this.weatherData = data;
    //this.currentTemp = this.weatherData.current.temp;
    //  this.maxTemp = Math.max(...this.weatherData.hourly.map((h: any) => h.temp));
    //  this.minTemp = Math.min(...this.weatherData.hourly.map((h: any) => h.temp));
    //  this.todayWeather = this.weatherData.hourly.slice(0, 4).map((hour: any) => {
    //    return {
     //     time: this.datePipe.transform(new Date(hour.dt * 1000), 'HH:mm') as string,
    //      temp: hour.temp
        };
      //});
    //}, error => {
   //   console.error('Error fetching weather data', error);
    //});
  //}

  
public loadServiceWeather(queryString: string = "Manila"){
  if(queryString === "") {
     console.log()
  }
  else {
    console.log(queryString);
  this.weatherService.getCurrentWeather(queryString).subscribe(result => {
  this.weatherService.weatherData = result;
  let results = result as any;
  this.currentTemp = Math.round(results['main']['temp']);
  this.maxTemp = Math.round (results['main']['temp_max']);
  this.minTemp = Math.round (results['main']['temp_min']);
  //this.maxTemp = result["main"]["temp_max"];
  //this.minTemp = result["main"]["temp_min"];
   console.log("Weather Data",this.weatherService.weatherData);
  },
  (err: HttpErrorResponse) => {
  }
  );
  }
}
public get weatherData(){
  return this.weatherService.weatherData;
}
public get cityweatherData(){
  return this.weatherService.cityweatherData;
}
  goToMainApp() {
    this.setdata()
    this.router.navigate(['/main-weather',]);
  }
  setdata(){
    this.dataService.setdata(this.weatherService.weatherData)
  }
loadcityData(){
  this.loadServiceWeather(this.city)
}
  goToWelcomePage() {
    this.router.navigate(['/welcome']);
  }
}
