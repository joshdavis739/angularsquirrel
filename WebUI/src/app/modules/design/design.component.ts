import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isMobile = window.innerWidth <= 600

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth <= 600
  }

}
