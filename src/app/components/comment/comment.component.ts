import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input() comments;
  commentObservables = [];
  commentsToShow: any[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.comments.forEach((commentId) => {
      this.commentObservables.push(this.newsService.getComment(commentId));
    });
    this.resolveObservables();
  }

  resolveObservables() {
    const resolveThis = this.commentObservables.slice(0, 1);
    this.commentObservables = this.commentObservables.slice(1);
    forkJoin(resolveThis).subscribe((res) => {
      const comments = Object.values(res);
      this.commentsToShow = comments;
    });
  }
}
