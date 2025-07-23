import { Component, computed } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  year = computed(() =>{
    const date = new Date();
    return date.getFullYear();
  });

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

}
