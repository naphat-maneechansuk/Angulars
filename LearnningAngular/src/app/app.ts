import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass,NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   userName ="admin";
   isLogin = true;
   toggle(){
      this.isLogin = !this.isLogin;
   }
//
   userPermission = "admin";
//
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


