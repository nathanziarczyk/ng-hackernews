import { Component, HostListener, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent implements OnInit {
  news: number[];
  newsToShow: number[];
  count: number = 10;
  loading: boolean = false;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getNews();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.loading = true;
      this.count += 10;
      this.getNews();
    }
  }

  getNews(emitted: boolean = false): void {
    if (emitted) this.count = 10;
    this.newsService.getNews().subscribe((n) => {
      this.news = n;
      this.showNews();
      this.loading = false;
    });
  }

  showNews(): void {
    this.newsToShow = this.news.slice(0, this.count);
  }
}
