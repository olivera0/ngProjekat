import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../servis/post.service';

@Component({
  selector: 'app-post-details',  // Dodajemo selector koji se koristi za ovu komponentu
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: any = null;

  constructor(private route: ActivatedRoute, private postService: PostService) {}

  ngOnInit() {
    const postId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadPost(postId);
  }

  loadPost(id: number) {
    const cachedPost = this.postService.getCurrentPost();
    if (cachedPost && cachedPost.id === id) {
      this.post = cachedPost;
    } else {
      this.postService.getPostById(id).subscribe(data => {
        this.post = data;
      });
    }
  }
}
