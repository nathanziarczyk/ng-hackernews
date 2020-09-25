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
  loading: boolean = false;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.comments.forEach((commentId) => {
      this.commentObservables.push(this.newsService.getComment(commentId));
    });
  }

  showComments() {
    this.resolveObservables();
  }

  hideComments() {
    this.commentsToShow = undefined;
  }

  resolveObservables() {
    this.loading = true;
    forkJoin(this.commentObservables).subscribe((res) => {
      const comments = Object.values(res);
      this.commentsToShow = comments;
      this.loading = false;
    });
  }
}
