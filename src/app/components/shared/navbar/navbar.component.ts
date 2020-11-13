import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private _router: Router) {}

  searchHero(term: string, event: any): void {
    event.preventDefault();
    this._router.navigate(['/search', term]);
  }
}
