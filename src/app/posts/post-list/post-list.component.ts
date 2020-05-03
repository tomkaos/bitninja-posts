import { Component, OnInit } from '@angular/core';

import { PostsService, Post } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public posts: Array<Post> = [];
  public loading = true;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts: Array<Post>) => {
      this.posts = posts;
      this.loading = false;
    });
  }

}
