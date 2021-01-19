import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MarkdownModule.forChild()
  ],
  exports: [CardComponent]
})
export class SharedModule { }
