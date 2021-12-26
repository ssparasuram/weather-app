import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_key : string ='39fb3f5db1352f13b98a58bede8a9c6f';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {

  }

  getWeather(location: string) {
    return this.http.get('http://api.weatherstack.com/current?access_key='+api_key+'&query='+location)
  }
}
