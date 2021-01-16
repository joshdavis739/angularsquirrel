import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogApiService } from '../blog-api.service';
import { BlogArticle } from '../models/blog-article';

@Component({
  selector: 'app-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private readonly _blogArticleService: BlogApiService) { }

  public blogArticle: BlogArticle;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('articleIdentifier');
      this.blogArticle = this._blogArticleService.getBlogArticle(this.title);
    })
  }

  @Input()
  public title: string;

}
