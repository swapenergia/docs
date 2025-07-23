import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { CallToAction } from '../../components/call-to-action/call-to-action';
import { CardText } from '../../components/cards/card-text/card-text';

@Component({
  selector: 'app-home-page',
  imports: [Hero, CallToAction, CardText],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

}
