import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  base_url = "https://reqres.in/api/"
  constructor(private http: HttpClient) { }

  loginApi(obj) {
    return this.http.post(this.base_url + 'login', obj)
  }

  getTableData() {
    return this.http.get(this.base_url + 'users?page=2')
  }
}
