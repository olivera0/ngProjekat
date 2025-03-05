import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://dummyjson.com/posts';
  private currentPost: any = null;

  constructor(private http: HttpClient) {}

  // Metoda za uzimanje listu postova
  getPosts(page: number, searchText: string): Observable<any> {
    const limit = 10;
    const skip = (page - 1) * limit;
    return this.http.get<any>(`${this.apiUrl}/search?limit=${limit}&skip=${skip}&q=${searchText}`);
  }

  // Metoda za čuvanje trenutnog posta
  setCurrentPost(post: any) {
    this.currentPost = post;
  }

  // Metoda za uzimanje trenutnog posta
  getCurrentPost() {
    return this.currentPost;
  }

  // Metoda za uzimanje postova po ID-u
  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
