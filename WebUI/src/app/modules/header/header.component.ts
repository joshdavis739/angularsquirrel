import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild('links')
  private links: ElementRef;

  @ViewChild('burger')
  private burger: ElementRef;

  @HostListener('document:click', ['$event'])
  private onClick(event) {
    if (!this.links.nativeElement.contains(event.target) && !(this.burger && this.burger.nativeElement.contains(event.target))) {
      this.isOpen = false;
    }
  }
}
