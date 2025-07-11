import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name ="Naphat"
  showMessege(){
    alert("Hello " + this.name + "!");
  }
}


