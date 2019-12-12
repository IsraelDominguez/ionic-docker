import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private postDataService: DataService) { }

  // When page is loaded, suscribe to make the ajax call, but always we are suscribe, better use Pipe "| async"
  ngOnInit() {
    this.posts = this.postDataService.getPostsData();
      // .subscribe((postsData: any[]) => {
      //   this.posts = postsData;
      // });
  }

}
