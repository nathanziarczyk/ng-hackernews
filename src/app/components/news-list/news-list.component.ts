import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  news: number[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews('new').subscribe((n) => {
      this.news = n;
    });
  }
}
