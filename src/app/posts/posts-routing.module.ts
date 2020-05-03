import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'posts/create',
    component: PostCreateComponent,
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
