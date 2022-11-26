import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogArticleComponent } from './blog-article/blog-article.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogApiService } from './blog-api.service';

@NgModule({
  declarations: [BlogComponent, BlogArticleComponent],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild()
  ],
  providers: [BlogApiService]
})
export class BlogModule { }
