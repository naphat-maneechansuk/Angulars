import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   data =[
      {name: "John", age: 30, city: "New York"},
      {name: "Jane", age: 25, city: "Los Angeles"},
      {name: "Mike", age: 35, city: "Chicago"}
   ]
   clearData(){
      this.data = [];
   }
   //
    isActive = false;
    toggleActive() {
        this.isActive = !this.isActive;
    }
    //pipe
}


