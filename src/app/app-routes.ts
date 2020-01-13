import { AuthGuard } from './auth.guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
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
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "posts/create",
    component: PostCreatePageComponent,
    canActivate: [AuthGuard] // You have to be connected to create a new post
  },
  {
    path: "posts/:id",
    component: PostDetailsPageComponent,
  },
];