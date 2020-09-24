import { Component, Input, OnInit } from '@angular/core';
import { formatDistance, fromUnixTime } from 'date-fns';
@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment;
  collapsed: boolean = true;
  dateDiff: string;
  constructor() {}

  ngOnInit(): void {
    const date = fromUnixTime(this.comment.time);
    this.dateDiff = formatDistance(date, new Date()) + ' ago';
  }

  setClasses(text) {
    if (text && text.length > 130) {
      return {
        'comment-text': true,
        collapsed: this.collapsed,
      };
    }
    return {
      'comment-text': true,
      collapsed: false,
    };
  }

  handleReadMore() {
    this.collapsed = !this.collapsed;
  }
}
