import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';
  private apiKey = 'e2700a2b89d2abb00ccd6fc7b63aa3e8'; 
  private units ="metric";
  public xclude ="current,alerts";
  public baseURL = "https://api.openweathermap.org/data/2.5/";
  public weatherData : Object = {};
  public cityweatherData : Object = {};

  constructor(private http: HttpClient) { }
  
  getCurrentWeather(queryString:string){
    return this.http.get(`${this.baseURL}weather?q=${queryString}&appid=${this.apiKey}&units=${this.units}`).pipe(
      catchError((err) => {
        console.log('Error caught')
        return throwError(err);
      }
    )) 
  }

  getCityWeather(cityname:string){
    return this.http.get(`${this.baseURL}weather?q=${cityname},{PH}&appid=${this.apiKey}`).pipe(
      catchError((err) => {
        console.log('Error caught')
        return throwError(err);
      }
    )) 
  }
//https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}
  getAllWeatherDetail(lat:number, lng:number) {
    return this.http.get(`${this.baseURL}onecall?lat=${lat}&lon=${lng}&appid=${this.apiKey}&units=${this.units}`)

  }
  //  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=9e6a4e438f1a37b0039c61281d687d40`;
  //  return this.http.get<any>(url);
  //}
}
//`${this.apiUrl}?lat=${lat}&lon=${lon}&appid=${this.apiKey}`