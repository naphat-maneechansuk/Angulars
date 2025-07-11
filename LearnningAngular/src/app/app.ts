import { Component } from '@angular/core';
import { Header } from './header/header';
import { Item } from './item/item';

@Component({
  selector: 'app-root',
  imports: [Header, Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data =[
    {id:1, name:'pak' ,salary: 1000},
    {id:2, name:'pop' ,salary: 2000},
    {id:3, name:'poy' ,salary: 3000}
  ]
  removeDataById( id: number) {
    alert(`ลบข้อมูลพนักงานคนที่ ${id} เรียบร้อยแล้ว`);
    this.data = this.data.filter((emp)=> emp.id !== id);// filter out the employee with the given id

  }

}


