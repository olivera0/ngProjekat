import { Component, OnInit } from '@angular/core';
import { PostService } from './servis/post.service';
import { Router } from '@angular/router';
import { AuthService } from './servis/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  trenutnaStr: number = 1;
  searchText: string = '';
  selectedTag: string = '';
  username: string | null = '';

  selectedPost: any = null;
  tags: string[] = ['history', 'american', 'crime', 'magical', 'french'];

  constructor(
    private postService: PostService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadPosts();

    if (this.authService.isLoggedIn()) {
      this.username = this.authService.getUser();
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  loadPosts() {
    this.postService.getPosts(this.trenutnaStr, this.searchText).subscribe(data => {
      this.posts = data.posts;
    });
  }

  onPostClick(post: any) {
    this.postService.setCurrentPost(post);
    this.router.navigate(['/post', post.id]);
  }

  onPageChange(page: number) {
    this.trenutnaStr = page;
    this.loadPosts();
  }

  onSearch() {
    this.trenutnaStr = 1;
    this.loadPosts();
  }

  hasSelectedTag(post: any): boolean {
    return this.selectedTag && post.tags?.includes(this.selectedTag);
  }

  logout() {
    this.authService.logout();
  }
}