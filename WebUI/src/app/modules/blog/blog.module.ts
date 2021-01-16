import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogApiService } from './blog-api.service';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children:
    [
    ]
  },
  {
    path: 'blog/:articleIdentifier',
    component: BlogArticleComponent
  }
];

@NgModule({
  declarations: [BlogComponent, BlogArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MarkdownModule.forChild()
  ],
  providers: [BlogApiService]
})
export class BlogModule { }
