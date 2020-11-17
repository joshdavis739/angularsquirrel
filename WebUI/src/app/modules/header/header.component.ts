import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isOpen = false;
  isMobile = window.innerWidth <= 600;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth <= 600
  }
}
