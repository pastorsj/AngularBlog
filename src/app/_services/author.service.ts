import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../_services/authentication.service';
import { Article } from '../_models/Article';
import { Author } from '../_models/Author';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthorService {

  private authorUrl = environment.URL + '/user/';
  private articlesUrl = environment.URL + '/articles/';

  constructor(
    private http: Http,
    private auth: AuthenticationService
  ) { }

  getAuthor(username: string = this.getAuthorUsername()): Observable<Author> {
    const headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.auth.token);

    const options = new RequestOptions({ headers });

    return this.http.get(this.authorUrl + username, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  getArticlesByAuthor(): Observable<Array<Article>> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + this.auth.token);

    const author = JSON.parse(localStorage.getItem('currentUser')).username;

    const options = new RequestOptions({ headers });

    return this.http.get(this.articlesUrl + author, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  public getAuthorUsername(): string {
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
