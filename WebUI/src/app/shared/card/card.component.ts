import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  public title: string;
  @Input()
  public subtitle: string;
  @Input()
  public date: Date;
  @Input()
  public url: string;

  isMobile = window.innerWidth <= 600

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth <= 600
  }

}
