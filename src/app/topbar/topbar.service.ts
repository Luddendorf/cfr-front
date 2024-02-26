import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../cards/interfaces/post.interface';

@Injectable({ providedIn: 'root' })
export class TopbarService {
  lastId: number = 0;
  lastPost$: BehaviorSubject<Post> = new BehaviorSubject({
    userId: 0,
    id: 0,
    title: '',
    body: ''
  });

  constructor() {
    //this.lastId++;
    // this.lastPost$.next({userId: 1, id: 1, title: 'True Story About The Moon',
    //   body: 'Once upon a time on the Moon.'});
  }

  getLastPost$(): Observable<Post> {
    return this.lastPost$.asObservable();
  }

  updateLastPost$(freshPost: Post): void {
    this.lastId++;
    this.lastPost$.next({
      userId: this.lastId,
      id: this.lastId,
      title: freshPost.title,
      body: freshPost.body
    });
    // this.getLastPost$().subscribe(post => console.log(post));
  }
}
