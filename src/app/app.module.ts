import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListPageComponent } from './pages/post-list-page/post-list-page.component';
import { PostDetailsPageComponent } from './pages/post-details-page/post-details-page.component';
import { PostCreatePageComponent } from './pages/post-create-page/post-create-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListPageComponent,
    PostDetailsPageComponent,
    PostCreatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
