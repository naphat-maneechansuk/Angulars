import { Component, signal,computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fname = signal<string>("Naphat")
  lname = signal<string>("Maneechansuk");
  exp = signal<number>(5);
  skill =signal<string[]> (["Angular", "JavaScript", "TypeScript"]);

  nameIs = signal<boolean>(true);


  change() {
    this.nameIs.update(value => {
      const newValue = !value;
      this.changeName(newValue);
      return newValue;
    });
  }

  changeName(nameIs: boolean) {
    if (nameIs) {
      this.fname.set("Naphat");
      this.lname.set("Maneechansuk");
    } else {
      this.fname.set("ณภัทร");
      this.lname.set("มณีจันสุข");
    }
  }
  increment(){
    this.exp.update(value => value + 1);
  }
  decrement(){
    this.exp.update(value => value - 1);
  }

  //computed signal
  fullName = computed(() => this.fname()+" "+this.lname());
  doubleExp = computed(() => this.exp() * 2);
}


