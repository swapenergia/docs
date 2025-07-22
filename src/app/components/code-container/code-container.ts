import { Component, ElementRef, input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-code-container',
  imports: [],
  templateUrl: './code-container.html',
  styleUrl: './code-container.css'
})
export class CodeContainer {

  title = input<string | undefined>(undefined);

    // Referencia al elemento <code>
  @ViewChild('codeElement') codeElement!: ElementRef<HTMLElement>;

  copyToClipboard(): void {
    const text = this.codeElement.nativeElement.innerText.trim();
    navigator.clipboard.writeText(text).then(() => {
      console.log('Texto copiado al portapapeles:', text);
      // opcional: mostrar una notificación visual
    }).catch(err => {
      console.error('Error al copiar al portapapeles:', err);
    });
  }
}
