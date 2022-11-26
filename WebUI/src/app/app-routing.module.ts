import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { ResistanceRoleGeneratorComponent } from './modules/resistance-role-generator/resistance-role-generator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'resistance-role-generator', component: ResistanceRoleGeneratorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
