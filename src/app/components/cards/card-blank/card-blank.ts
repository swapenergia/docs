import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-blank',
  imports: [],
  templateUrl: './card-blank.html',
  styleUrl: './card-blank.css'
})
export class CardBlank {

  cardBg = input<string>('bg-white/5');
  cardBorderColor = input<string>('border-white/10');
  icon = input<string>('iawot-steps');
  iconColor = input<string>('text-white');
  iconBgGradient = input<string>('from-blue-500 to-indigo-500');
  cardTitle = input<string>('');
  labelText = input<string | undefined>(undefined);

}
