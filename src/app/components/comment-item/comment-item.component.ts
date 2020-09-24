import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.scss'],
})
export class CommentItemComponent implements OnInit {
  @Input() comment;
  collapsed: boolean = true;
  constructor() {}

  ngOnInit(): void {}

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
