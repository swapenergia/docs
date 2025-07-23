import { Component } from '@angular/core';
import { CardCode } from "../../components/cards/card-code/card-code";
import { CallToAction } from '../../components/call-to-action/call-to-action';

@Component({
  selector: 'app-mcps-page',
  imports: [CardCode, CallToAction],
  templateUrl: './mcps-page.html',
  styleUrl: './mcps-page.css'
})
export class McpsPage {

}
