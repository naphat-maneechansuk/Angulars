import { Component ,output,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { employee } from '../app';

@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {
  fullname = signal("");
  salary = signal(15000);
  onSave =output<employee>();
  addEmployee() {
    console.log("บันทึกข้อมูลพนักงานใหม่")
    let emp:employee = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID
      name: this.fullname(),
      salary: this.salary(),
    }
    this.onSave.emit(emp); // Emit the new employee data
    this.fullname.set(""); // Clear the input field
    this.salary.set(15000); // Reset the salary to 0
  }

}
