import { Component } from '@angular/core';
import { CodeContainer } from "../../components/code-container/code-container";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-install-page',
  imports: [CodeContainer, RouterLink],
  templateUrl: './install-page.html',
  styleUrl: './install-page.css'
})
export class InstallPage {

}
