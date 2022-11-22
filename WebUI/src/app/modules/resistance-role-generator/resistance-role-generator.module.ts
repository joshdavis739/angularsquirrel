import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResistanceRoleGeneratorComponent } from './resistance-role-generator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResistanceRoleGeneratorComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ResistanceRoleGeneratorComponent
  ]
})
export class ResistanceRoleGeneratorModule { }
