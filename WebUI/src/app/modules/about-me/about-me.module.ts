import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExternalLinkComponent } from './external-link/external-link.component';

@NgModule({
  declarations: [AboutMeComponent, ExternalLinkComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class AboutMeModule { }
