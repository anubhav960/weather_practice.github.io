import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { CurrentWeather } from './current-weather';
import { Observable } from 'rxjs/Rx'; 
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  current:CurrentWeather = new CurrentWeather('New York','80',
  'http://www.utbult-borneby.se/wp-content/uploads/2015/06/sol.png', 'sunny', '96','72')
  constructor(private http:Http) { }

  weatherNow(){
    return this.current;
  }

  localWeather(lat:string, lon:string): Observable <any> {
    return 
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?appid=f4cce11f292d52153a5ce637a3a4435a&lat=${lat}&lon=${lon}&units=imperial`).map((response:Response) => response.json())
      }
}

