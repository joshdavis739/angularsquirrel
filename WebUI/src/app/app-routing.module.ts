import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { AboutMeComponent } from './modules/about-me/about-me.component';
import { BlogComponent } from './modules/blog/blog.component';
import { DesignComponent } from './modules/design/design.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'design', component: DesignComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
