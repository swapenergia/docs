import { Component } from '@angular/core';
import { CodeContainer } from '../../components/code-container/code-container';
import { CallToAction } from '../../components/call-to-action/call-to-action';
import { CardBlank } from '../../components/cards/card-blank/card-blank';
import { CardBlankSection } from '../../components/cards/card-blank/card-blank-section/card-blank-section';

@Component({
  selector: 'app-config-page',
  imports: [CodeContainer, CallToAction, CardBlank, CardBlankSection],
  templateUrl: './config-page.html',
  styleUrl: './config-page.css'
})
export class ConfigPage {

}
