import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, map } from 'rxjs';
import { IPost } from './post.interface';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent implements OnInit, OnDestroy {
  loadedPosts: IPost[] = [];
  isLoaded: boolean = false;
  error = null;

  errorSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.errorSubscription = this.postsService.error$.subscribe(errorMessage$ => {
      this.error = errorMessage$;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    // send http request
    console.log(postData);
    this.postsService.createPost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isLoaded = true;
    this.postsService.fetchPosts().subscribe({
      next: (posts) => {
        this.loadedPosts = posts;
        this.isLoaded = false;
      },
      error: (error) => {
        console.log(error);
        this.error = error.message;
        this.isLoaded = false;
      },
    });
  }

  onClearPosts() {
    this.postsService.onClearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
