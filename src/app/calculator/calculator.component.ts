import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: string;
  num2: string;
  result: number;
  value1:number;

  regex = /^\d*[.]?\d*$/;
  //  var phoneRE = /^-?\d*[.]?\d*$/; 
  //   if (phoneNo.match(phoneRE)) {
  //     return true; 
  //   } else {
  //     alert( "The phone number entered is invalid!" );
  //     return false;
  //   }
  constructor() {

  }

  ngOnInit() {

  }

  // sum() {
  //   if (this.num1.match(this.regex) && this.num2.match(this.regex))
  //     this.result = parseInt(this.num1) + parseInt(this.num2);
  // }

  // sub() {
  //   if (this.num1.match(this.regex) && this.num2.match(this.regex))
  //     this.result = parseInt(this.num1) - parseInt(this.num2);
  // }

  // multi() {
  //   if (this.num1.match(this.regex) && this.num2.match(this.regex))
  //     this.result = parseInt(this.num1) * parseInt(this.num2);
  // }
  // div() {
  //   if (this.num1.match(this.regex) && this.num2.match(this.regex))
  //     this.result = parseInt(this.num1) / parseInt(this.num2);
  // }
 
  stateChange(id:any){
     let selectedIndex :number = id.target["selectedIndex"];
     this.value1=selectedIndex;
     console.log(this.value1);
    
  }
  final(){
    if(this.value1===1 && this.num1.match(this.regex) && this.num2.match(this.regex)){
      this.result = parseInt(this.num1) + parseInt(this.num2);
    }
    if(this.value1===2 && this.num1.match(this.regex) && this.num2.match(this.regex)){
      this.result = parseInt(this.num1) - parseInt(this.num2);
    }
    if(this.value1===3 && this.num1.match(this.regex) && this.num2.match(this.regex)){
      this.result = parseInt(this.num1) * parseInt(this.num2);
    }
    if(this.value1===4 && this.num1.match(this.regex) && this.num2.match(this.regex)){
      this.result = parseInt(this.num1) / parseInt(this.num2);
    }
  }
  

}
