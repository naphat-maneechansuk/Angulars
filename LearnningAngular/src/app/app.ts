import { Component } from '@angular/core';
import { Header } from './header/header';
import { Item } from './item/item';
import { AddForm } from './add-form/add-form';

export interface employee {
  id: number;
  name: string;
  salary: number;
}

@Component({
  selector: 'app-root',
  imports: [Header, Item, AddForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  data :employee[]=[
    {id:1, name:'pak' ,salary: 1000},
    {id:2, name:'pop' ,salary: 2000},
    {id:3, name:'poy' ,salary: 3000}
  ]
  removeDataById( id: number) {
    alert(`ลบข้อมูลพนักงานคนที่ ${id} เรียบร้อยแล้ว`);
    this.data = this.data.filter((emp)=> emp.id !== id);// filter out the employee with the given id
  }
  insertData(emp: employee) {
    this.data.push(emp); // Add the new employee to the data array
    alert(`บันทึกข้อมูลพนักงาน ${emp.name} เรียบร้อยแล้ว`);
  }
}


