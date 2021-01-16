import { Injectable } from '@angular/core';
import { blogArticles } from './data/blog-article-data'
import { BlogArticleSummary } from './models/blog-article-summary';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {

  constructor() { }

  private blogArticles = blogArticles;

  getBlogArticleSummaries(): BlogArticleSummary[] {
    return this.blogArticles.map(x => x.summary);
  }

  getBlogArticle(articleIdentifier: string) {
    return this.blogArticles.filter(x => x.summary.identifier === articleIdentifier)[0];
  }
}
