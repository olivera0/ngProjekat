import { Component, OnInit } from '@angular/core';
import { PostService } from './servis/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  trenutnaStr: number = 1;
  searchText: string = '';
  selectedTag: string = ''; // Dodajemo promenljivu za odabrani tag

  selectedPost: any = null;
  tags: string[] = ["history", "american", "crime", "magical", "french"]; // Lista tagova

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts(this.trenutnaStr, this.searchText).subscribe(
      data => {
        this.posts = data.posts;
      }
    );
  }

  onPostClick(post: any) {
    this.postService.setCurrentPost(post); // Čuva objavu u servisu
    this.router.navigate(['/post', post.id]); // Navigacija ka detaljima
  }

  onPageChange(page: number) {
    this.trenutnaStr = page;
    this.loadPosts();
  }

  onSearch() {
    this.trenutnaStr = 1;
    this.loadPosts();
  }

  // Provera da li post sadrži selektovani tag
  hasSelectedTag(post: any): boolean {
    return this.selectedTag && post.tags?.includes(this.selectedTag);
  }
}
