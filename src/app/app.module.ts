import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from 'environments/environment';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { Router } from 'app/app.routing';

import { AuthGuard } from 'app/_guards/auth.guard';

import { LoginModalComponent } from './login-modal/login-modal.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';

import { ArticleComponent } from './article/article.component';

import { ResponseInterceptor } from 'app/_interceptors/response.interceptor';
import { AuthInterceptor } from 'app/_interceptors/auth.interceptor';

import { MaterialModule } from 'app/material.module';
import { ArticlePortalModule } from 'app/article-portal/article-portal.module';
import { PipeModule } from 'app/_pipes/pipe.module';
import { ArticlesModule } from './articles/articles.module';
import { DirectiveModule } from './_directives/directive.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        LoginModalComponent,
        RegisterModalComponent,
        ArticleComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        Router,
        MaterialModule,
        ArticlePortalModule,
        ArticlesModule,
        PipeModule,
        ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
        DirectiveModule
    ],
    providers: [
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ResponseInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    entryComponents: [
        LoginModalComponent,
        RegisterModalComponent,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
