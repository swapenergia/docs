import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-text',
  imports: [],
  templateUrl: './card-text.html',
  styleUrl: './card-text.css'
})
export class CardText {
  
  bg_gradiant = input<string>('from-purple-500 to-pink-500');
  title = input<string>('title example');
  description = input<string>('dedscription example');
}
