import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card-blank-section',
  imports: [],
  templateUrl: './card-blank-section.html',
  styleUrl: './card-blank-section.css'
})
export class CardBlankSection {

  listText = input<string>('1');
  listTextColor = input<string>('text-purple-400');
  listTextBg = input<string>('bg-purple-500/20');
  cardSectionTitle = input<string>('');
}
