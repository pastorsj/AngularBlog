import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { MaterialModule, MdGridListModule, MdDialogModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import {Router} from './app.routing';
import { EditorComponent } from './editor/editor.component';
import { UserArticlesComponent } from './user-articles/user-articles.component';
import { CreateArticleModalComponent } from './create-article-modal/create-article-modal.component';

import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { EditorService } from './_services/editor.service';
import { ArticleService } from './_services/article.service';
import { AuthorService } from './_services/author.service';

import { BaseRequestOptions } from '@angular/http';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    EditorComponent,
    UserArticlesComponent,
    CreateArticleModalComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule,
    Router,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    MdGridListModule,
    MdDialogModule
  ],
  entryComponents: [
    CreateArticleModalComponent
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    EditorService,
    ArticleService,
    AuthorService,
    BaseRequestOptions
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
