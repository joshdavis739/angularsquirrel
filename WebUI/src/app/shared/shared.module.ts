import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleSectionComponent } from './collapsible-section/collapsible-section.component';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CollapsibleSectionComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CollapsibleSectionComponent, CardComponent]
})
export class SharedModule { }
