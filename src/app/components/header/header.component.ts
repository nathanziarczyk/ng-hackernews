import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews('new').subscribe(console.log);
  }
}
