import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl: string = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  getNews(soort: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${soort}stories.json`);
  }
}
