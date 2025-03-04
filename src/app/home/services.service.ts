import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface Services {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private apiUrl = 'https://dummyjson.com/posts/search';  

  constructor(private http: HttpClient) {}

  getPosts(page: number, limit: number): Observable<Services[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());

    return this.http.get<any>(this.apiUrl, { params }).pipe(
      map(response => response.posts)  // Mapirajte na niz objekata 'posts'
    );
  }
}
