import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_BASE_URL } from '../config/constants';

export interface Post {
 userId: number;
 id: number;
 title: string;
 body: string;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getPosts() {
    const url = API_BASE_URL + '/posts';
    return this.http.get<Array<Post>>(url);
  }

  public getPost(postId: string | number) {
    const url = API_BASE_URL + '/posts/' + postId;
    return this.http.get<Post>(url);
  }

  public getComments(postId: string | number) {
    const url = API_BASE_URL + '/posts/' + postId + '/comments';
    return this.http.get<Array<Comment>>(url);
  }

  public createPost(title: string, body: string) {
    const url = API_BASE_URL + '/posts';
    return this.http.post(url, {
      title,
      body,
      userId: 1,
    });
  }
}
