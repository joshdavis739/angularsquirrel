import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignComponent } from './design.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DesignArticleComponent } from './design-article/design-article.component';

const routes: Routes = [
  {
    path: '',
    component: DesignComponent,
    children:
    [
    ]
  },
  {
    path: 'design/:articleIdentifier',
    component: DesignArticleComponent
  }
];

@NgModule({
  declarations: [DesignComponent, DesignArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
})

export class DesignModule {

}
