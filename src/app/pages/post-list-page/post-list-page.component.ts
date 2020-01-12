import { PostService } from 'src/app/shared/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/post';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(response => {
      this.posts = response;
    })
  }

}
