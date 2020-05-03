import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router"

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;
  loading = false;

  constructor(
    private router: Router,
    private postService: PostsService
  ) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  showErrors(control) {
    const { dirty, touched, errors } = this.postForm.controls[control];
    return dirty && touched && errors;
  }

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    this.loading = true;
    const {title, body} = this.postForm.controls;
    this.postService.createPost(title.value, body.value).subscribe(response => {
      console.log('Response from post creation: ', response);
      this.postForm.reset('');
      this.loading = false;
      this.router.navigate(['/']);
    });
  }
}
