import { PostService } from 'src/app/shared/post.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Post } from 'src/app/shared/post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent implements OnInit {

  post: Observable<Post>;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const postId = params.get('id');
      this.post = this.postService.getPostById(parseInt(postId));
    })
  }
}
