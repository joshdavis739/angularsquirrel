import { Component, OnInit, Input } from '@angular/core';
import { CollapsibleSectionService } from './collapsible-section.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-collapsible-section',
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss'],
  providers: [CollapsibleSectionService],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        // height: '200px',
        // opacity: 1,
        // backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '0px',
        'padding-bottom': '0',
        'padding-top': '0',
        // opacity: 0.5,
        // backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('0.5s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.5s ease-in-out')
      ]),
    ]),
  ],
})
export class CollapsibleSectionComponent implements OnInit {

  constructor(private readonly _collapsibleSectionService: CollapsibleSectionService) { }

  @Input() public title: string;

  ngOnInit() {
  }

  public toggle(): void {
    this._collapsibleSectionService.toggle();
  }

  public get isOpen(): boolean {
    return this._collapsibleSectionService.isOpen;
  }

}
