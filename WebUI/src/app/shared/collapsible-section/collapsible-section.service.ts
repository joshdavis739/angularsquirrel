import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollapsibleSectionService {

  constructor() { }

  public isOpen: boolean = false;

  public toggle(): void {
    this.isOpen = !this.isOpen;
  }

}