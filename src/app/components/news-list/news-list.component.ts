import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent implements OnInit {
  @Input() news: number[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    console.log(this.news);
  }
}
