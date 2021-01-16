import { Component, HostListener, OnInit } from '@angular/core';
import { BlogApiService } from './blog-api.service';
import { BlogArticleSummary } from './models/blog-article-summary';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private readonly _blogArticleService: BlogApiService) { }

  public blogArticleSummaries: BlogArticleSummary[] = [];

  ngOnInit() {
    this.blogArticleSummaries = this._blogArticleService.getBlogArticleSummaries();
  }

  isMobile = window.innerWidth <= 600

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isMobile = event.target.innerWidth <= 600
  }
}
