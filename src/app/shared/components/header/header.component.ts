import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  name: string = '';
  sesionIniciada: boolean = false;
  displayBasic: boolean = false;
  displayPosition!: boolean;
  position!: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright';


  constructor(
    private router: Router,
  ) { }



  ngOnInit(): void {

  }

  isUserAuthenticated(): boolean {
    return false;
  }


  showPositionDialog(position: 'center' | 'top' | 'bottom' | 'left' | 'right' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright'): void {
    this.position = position;
    this.displayPosition = true;
}

  logOut(): void {
    this.router.navigate(['login'])
  }




}
