import { Injectable } from '@angular/core';

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

}
