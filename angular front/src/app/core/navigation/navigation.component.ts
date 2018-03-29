import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { User } from '../model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: User;

  @ViewChild('sidenav') private sidenav: MatSidenav;
  constructor() { }

  ngOnInit() {
    this.sidenav.open();
  }

}
