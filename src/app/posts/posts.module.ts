import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { MatchHeightDirective } from '../directives/match-height.directive';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PostListComponent,
    MatchHeightDirective,
    PostDetailComponent,
    PostCreateComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PostsModule { }
