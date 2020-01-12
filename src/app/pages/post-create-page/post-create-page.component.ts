import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/shared/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/post';
import { Router } from '@angular/router';
import { passwordValidator } from './password-validator';

@Component({
  selector: 'app-post-create-page',
  templateUrl: './post-create-page.component.html',
  styleUrls: ['./post-create-page.component.css']
})
export class PostCreatePageComponent implements OnInit {

  postForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });

  constructor(
    private postService: PostService,
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
  }

  create() {
    this.postService.createPost(this.postForm.value).subscribe(response => {
      this.router.navigateByUrl(`/posts/${response.id}`);
    });
  }
}
