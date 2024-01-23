import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http:HttpClient) { }
  postBankAccount( formData: any){
   return this.http.post(environment.apiBaseURI+'/BankAcccount', formData);


  }
}
