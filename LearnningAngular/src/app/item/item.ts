import { Component, input,signal} from '@angular/core';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css'
})
export class Item {
  id = input<number>();
  name = input<string>();
  salary = input<number>();

}
