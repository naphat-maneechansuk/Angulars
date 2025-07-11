import { Component ,signal} from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-form',
  imports: [FormsModule],
  templateUrl: './add-form.html',
  styleUrl: './add-form.css'
})
export class AddForm {
  fullname = signal("");
  salary = signal(0);


}
