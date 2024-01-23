import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http:HttpClient) { }
  getBankList(){
  return this.http.get(environment.apiBaseURI + '/Bank');
  
}
}


