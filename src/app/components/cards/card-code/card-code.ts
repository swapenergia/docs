import { Component, input } from '@angular/core';
import { CodeContainer } from '../../code-container/code-container';

@Component({
  selector: 'app-card-code',
  imports: [CodeContainer],
  templateUrl: './card-code.html',
  styleUrl: './card-code.css'
})
export class CardCode {

  gradientBg = input<string>('from-purple-500/10 to-pink-500/10');
  borderBg = input<string>('border-purple-500/20');
  icon = input<string>('iawot-avatar');
  iconColor = input<string>('text-purple-400');
  iconBg = input<string>('bg-purple-500/20');
  title = input<string>('');
  description = input<string>('');
  codeContainerTitle = input<string | undefined>(undefined); 
}
