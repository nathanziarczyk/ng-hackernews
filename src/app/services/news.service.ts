import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsListComponent } from '../components/news-list/news-list.component';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  soort: string = 'new';
  baseUrl: string = 'https://hacker-news.firebaseio.com/v0/';

  constructor(private http: HttpClient) {}

  getComment(commentId) {
    return this.http.get(`${this.baseUrl}item/${commentId}.json`);
  }

  getNews(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}${this.soort}stories.json`);
  }

  getStory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}item/${id}.json`);
  }

  changeSoort(soort) {
    this.soort = soort;
  }
}
