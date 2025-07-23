import { Component } from '@angular/core';
import { CodeContainer } from "../../components/code-container/code-container";
import { RouterLink } from '@angular/router';
import { CardBlank } from "../../components/cards/card-blank/card-blank";
import { CardBlankSection } from "../../components/cards/card-blank/card-blank-section/card-blank-section";
import { CallToAction } from "../../components/call-to-action/call-to-action";

@Component({
  selector: 'app-install-page',
  imports: [CodeContainer, CardBlank, CardBlankSection, CallToAction],
  templateUrl: './install-page.html',
  styleUrl: './install-page.css'
})
export class InstallPage {

}
