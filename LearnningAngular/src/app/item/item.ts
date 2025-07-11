import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  id = input.required<number>();
  name = input<string>();
  salary = input<number>();
  onDelete = output<number>()
  ;
  deleteItem(){
    if(confirm(`คุณต้องการลบข้อมูลพนักงานคนที่ ${this.id()} หรือไม่?`)){
      console.log(`ลบข้อมูลพนักงานคนที่ ${this.id()}`);
      this.onDelete.emit(this.id()) //ปล่อยEvent
    }
  }
}
