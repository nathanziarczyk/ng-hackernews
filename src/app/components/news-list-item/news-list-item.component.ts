import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.scss'],
})
export class NewsListItemComponent implements OnInit {
  @Input() newsItem;
  commentObservables = {};

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getStory(this.newsItem).subscribe((item) => {
      this.newsItem = item;
    });
  }
}
