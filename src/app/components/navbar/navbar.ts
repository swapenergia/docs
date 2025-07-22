import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [ RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isMenuActive = signal<boolean>(false);

  toggleMobileMenu(){
    this.isMenuActive.update( value => !value);
  }

}
