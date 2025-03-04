import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls:['./home.component.css'],
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  trenutnaStr: number = 1;
  searchText: string = ''; 
  selectedTag: string = ''; // Dodajemo promenljivu za odabrani tag

  selectedPost: any = null;
  tags: string[] = ["history", "american", "crime", "magical", "french"]; // Lista tagova

  constructor(private http: HttpClient) {}  

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const limit = 10;
    const skip = (this.trenutnaStr - 1) * limit;
    const url = `https://dummyjson.com/posts/search?limit=${limit}&skip=${skip}&q=${this.searchText}`;

    this.http.get<any>(url).subscribe(
      data => {
        this.posts = data.posts;
      }
    );
  }

  onPageChange(page: number) {
    this.trenutnaStr = page;
    this.getPosts();
  }

  onSearch() {
    this.trenutnaStr = 1;
    this.getPosts();
  }

  // Provera da li post sadrži selektovani tag
  hasSelectedTag(post: any): boolean {
    return this.selectedTag && post.tags?.includes(this.selectedTag);
  }
}
