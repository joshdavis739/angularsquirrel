import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-article',
  templateUrl: './design-article.component.html',
  styleUrls: ['./design-article.component.scss']
})
export class DesignArticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('articleIdentifier');
    })
  }

  @Input()
  public title: string;

}
