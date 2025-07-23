import { Component, ElementRef, input, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-container',
  imports: [],
  templateUrl: './code-container.html',
  styleUrl: './code-container.css'
})
export class CodeContainer {

  title = input<string | undefined>(undefined);
  icon = signal<'iawot-copy' | 'iawot-check' >('iawot-copy');

    // Referencia al elemento <code>
  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;

  copyToClipboard(): void {
    this.icon.set('iawot-check');
    const text = this.codeElement.nativeElement.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
      setTimeout(() => {
      this.icon.set('iawot-copy')
    }, 2000); // Vuelve al ícono original después de 2 segundos
      
    
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  }
}
