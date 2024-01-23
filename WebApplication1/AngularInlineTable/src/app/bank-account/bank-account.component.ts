import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BankAccountService } from '../shared/bank-account.service';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styles: [
  ]
})
export class BankAccountComponent implements OnInit {
  bankAccountForms : FormArray = this.fb.array([]);
  bankList=[]; 
   fg:any;
   constructor(private fb : FormBuilder, public bankService: BankService,
     public service:BankAccountService ){}
   ngOnInit(){
     this.bankService.getBankList().subscribe(res => this.bankList = res as []);
     
     this.fg = new FormGroup({
       myControl: new FormControl()});
 this.addBankAccountForm()
   }
   addBankAccountForm( ){
 
     this.bankAccountForms.push(this.fb.group({
       
     bankAccountID: [0],
     accountNumber : ['',Validators.required],
     accountHolder : ['',Validators.required],
     bankID : [0,Validators.min(1)],
     IFSC : ['',Validators.required] 
   })); 
       
     
   }
   recordSubmit(fg:FormGroup){
    this.service.postBankAccount(fg.value).subscribe( 
      (res:any) =>{
        
      }
    )
     
     
 
   }
 
 }
   
 
 
 

