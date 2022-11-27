import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistanceRoleGeneratorComponent } from './resistance-role-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { ResistanceGameService } from './resistance-game.service';
import { ResistanceDataService } from './resistance-data.service';

@NgModule({
  declarations: [ResistanceRoleGeneratorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule
  ],
  exports: [
    ResistanceRoleGeneratorComponent
  ],
  providers: [
    ResistanceGameService,
    ResistanceDataService
  ]
})
export class ResistanceRoleGeneratorModule { }
