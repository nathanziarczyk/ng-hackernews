import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { NewsListComponent } from '../news-list/news-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() getNews = new EventEmitter();

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {}

  setClasses(soort) {
    return {
      active: soort === this.newsService.soort,
    };
  }

  changeSoort(soort) {
    this.newsService.changeSoort(soort);
    this.getNews.emit();
  }
}
