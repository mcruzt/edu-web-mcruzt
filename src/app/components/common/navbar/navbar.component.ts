import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  tabs: any[];
  tabActivedIndx = -1;

  constructor(public authService: AuthService, private router: Router) {
    this.tabs = [
     {
        label: 'Personajes',
        link: './character',
        index: 0
      },
      {
        label: 'Episodios',
        link: './episode',
        index: 1
      }, {
        label: 'Lugares',
        link: './location',
        index: 2
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.tabActivedIndx = this.tabs.indexOf(this.tabs.find(tab => tab.link === '.' + this.router.url));
    });
  }
  logout(): void{
    this.authService.doLogout();
    this.router.navigate(['/login']);
  }

}
