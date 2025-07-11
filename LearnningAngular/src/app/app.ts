import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe ,LowerCasePipe,CurrencyPipe ,DatePipe} from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [FormsModule , UpperCasePipe, LowerCasePipe, CurrencyPipe , DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   data =[
      {name: "John", age: 30, city: "New York" ,salary: 50000 ,startDate: new Date(2020, 0, 1)},
      {name: "Jane", age: 25, city: "Los Angeles" , salary: 60000 , startDate: new Date(2021, 5, 15)},
      {name: "Mike", age: 35, city: "Chicago" , salary: 70000 , startDate: new Date(2019, 3, 10)},
      {name: "Alice", age: 28, city: "San Francisco" , salary: 80000 , startDate: new Date(2022, 7, 20)},
      {name: "Bob", age: 22, city: "Miami" , salary: 55000 , startDate: new Date(2023, 2, 5)},
   ]
   clearData(){
      this.data = [];
   }

    //pipe
}


