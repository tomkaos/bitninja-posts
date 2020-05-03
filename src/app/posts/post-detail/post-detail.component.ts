import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { Post, Comment, PostsService } from '../../services/posts.service';

interface PostDetail extends Post {
  comments: Array<Comment>;
}

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  public post: PostDetail;
  public loading = true;

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const postId = this.route.snapshot.paramMap.get('id');
    let tempPost = null;
    this.postsService.getPost(postId).subscribe((post: Post) => {
      tempPost = post;
      this.postsService.getComments(postId).subscribe((comments: Array<Comment>) => {
        tempPost.comments = comments;
        this.post = tempPost;
        this.loading = false;
      });
    });
  }

}
