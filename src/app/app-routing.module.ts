import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';

const routes: Routes = APP_ROUTES;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
