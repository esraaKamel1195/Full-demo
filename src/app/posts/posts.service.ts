import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost } from './post.interface';
import { Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  isLoggedIn: boolean = true;
  error$ = new Subject<string>();

  constructor(private httpClient: HttpClient) {}

  createPost(title: string, content: string) {
    const postData: IPost = { title: title, content: content };
    this.httpClient
      .post(
        'https://http-practice-with-angular-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          this.error$.next(error.message);
        },
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append("pageIndex", 1);
    searchParams = searchParams.append("pageSize", 20);

    return this.httpClient
      .get<{ [key: string]: IPost }>(
        'https://http-practice-with-angular-default-rtdb.firebaseio.com/posts.json', {
          headers: new HttpHeaders({"custom-header": "welcome from angular course"}),
          params: searchParams
        }
      )
      .pipe(
        map((responseData: { [key: string]: IPost }) => {
          console.log('Inside pipe map ', responseData);
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  onClearPosts() {
    return this.httpClient.delete(
      'https://http-practice-with-angular-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
