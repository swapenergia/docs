import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-call-to-action',
  imports: [RouterLink],
  templateUrl: './call-to-action.html',
  styleUrl: './call-to-action.css'
})
export class CallToAction {
  callToActionTitle = input.required<string>();

  buttonText = input<string>('button');
  buttonRoute = input.required<string>();

}
