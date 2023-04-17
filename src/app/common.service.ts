import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  
  host = 'localhost';
  jwt_port = 9093;
  admin_port = 9090;
  user_port = 9090;
  api_port = 9090;
  jwt_server = 'http://' + this.host + ':' + this.jwt_port;
  admin_server = 'http://' + this.host + ':' + this.admin_port;
  user_server = 'http://' + this.host + ':' + this.user_port;
  api_server = 'http://' + this.host + ':' + this.api_port;

  constructor(private httpClient: HttpClient) {}

  setReqOptions() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer '+ localStorage.getItem('jwt_token'));
    const reqOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return reqOptions;
  }

  setJwtReqOptions() {
    let headers = new HttpHeaders();
    const reqOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    return reqOptions;
  }

  // user autoixationb and authentication apis

  private jwt_register_url = `${this.jwt_server}/api/jwt/reg`;
  jwt_register(payload: any) {
    return this.httpClient.post<any>(this.jwt_register_url, payload,(this.setJwtReqOptions()));
  }

  private auth_url = `${this.jwt_server}/api/jwt/auth`;
  auth(payload: any) {
    return this.httpClient.post<any>(this.auth_url, payload,(this.setJwtReqOptions()));
  }

  // admin apis

  // cars crud apis
  private add_car_url = `${this.api_server}/api/Weather/addWeather`;
  add_car(payload: any) {
    return this.httpClient.post<any>(this.add_car_url, payload,(this.setReqOptions()));
  }

  private update_car_url = `${this.api_server}/api/Weather/UpdateWeatherDetailsByLocation/{id}`;
  update_car(payload: any) {
    return this.httpClient.put<any>(this.update_car_url, payload,(this.setReqOptions()));
  }

  private delete_car_url = `${this.api_server}/api/Weather/addWeather`;
  delete_car(userId: any) {
    return this.httpClient.delete<any>(`${this.delete_car_url}/${userId}`,(this.setReqOptions()));
  }

  private get_all_user_cars_url = `${this.api_server}/api/Weather/GetAllWeathers`;
  get_all_user_cars() {
    return this.httpClient.get<any>(this.get_all_user_cars_url,(this.setReqOptions()));
  }

}
