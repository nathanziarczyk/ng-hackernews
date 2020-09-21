import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  baseUrl: string = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  getNews(soort: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}${soort}stories.json`);
  }

  getStory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}item/${id}.json`);
  }
}
