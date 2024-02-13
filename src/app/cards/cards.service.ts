import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';

import { environment } from '../../environments/environment';
import { Post } from './interfaces/post.interface';
import { Card } from './interfaces/card.interface';

@Injectable()
export class CardsService {
  public postsHostUrl: string;
  constructor(private http: HttpClient) {
    this.postsHostUrl = environment.jsonPlaceHolderUrl;
  }

  public getAllPosts$(): Observable<Card[]> {
    return this.http.get<Post[]>(this.postsHostUrl + '/posts').pipe(
      map(posts => {
        return posts.map(post => { return {
          id: post.id.toString(),
          title: post.title,
          postBody: post.body,
          authorName: post.userId.toString(),
          date: Date.now()
        }; });
      })
      // catchError(error => {console.log('Error while fetching p'
      //   + 'osts from jsonPlaceHolder!'); return null;})
    );
  }
}
