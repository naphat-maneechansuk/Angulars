import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imageurl = "https://picsum.photos/id/10/2500/1667"
  size = 100
  doubleSize(){
    return this.size * 2;
  }
}


