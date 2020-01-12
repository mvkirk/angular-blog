import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl: string = 'http://localhost:8000/api/posts';

  constructor(private http: HttpClient) { }

  /**
   * Return an observable which contains all posts from the api.
   */
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.baseUrl);
  }

  /**
   * Return an observable which contains the post where id is passed in parameter.
   */
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.baseUrl}/${id}`);
  }

  /**
   * Create a new post from the api.
   */
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.baseUrl, post);
  }
}
