import { PostCreatePageComponent } from './pages/post-create-page/post-create-page.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: PostListPageComponent
  },
  {
    path: "posts/create",
    component: PostCreatePageComponent
  },
  {
    path: "posts/:id",
    component: PostDetailsPageComponent
  },
];