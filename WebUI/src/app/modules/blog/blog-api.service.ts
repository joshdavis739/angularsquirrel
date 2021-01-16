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
    return this.blogArticles.map(x => {
      const summary = {
        identifier: x.summary.identifier,
        title: x.summary.title,
        datePosted: x.summary.datePosted,
        subtitle: x.summary.subtitle,
        text: x.text.replace(/((\s*\S+){60})([\s\S]*)/, "$1")
      } as BlogArticleSummary;
      return summary;
      // x.summary
    });
  }

  getBlogArticle(articleIdentifier: string) {
    return this.blogArticles.filter(x => x.summary.identifier === articleIdentifier)[0];
  }
}
