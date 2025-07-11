import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Naphat"
  age=21
  yearBE = new Date().getFullYear() + 543;
  address= "Buurapha, Thailand"
  showAddress(){
    return "i'm from " + this.address;
  }
}


