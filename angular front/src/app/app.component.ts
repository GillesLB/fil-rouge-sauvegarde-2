import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  template: '<app-navigation></app-navigation>'
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild('sidenav') private sidenav: MatSidenav;

  ngOnInit() {
    this.sidenav.open();
  }
}
