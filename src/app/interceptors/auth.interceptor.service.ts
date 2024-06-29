import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { PostsService } from "../posts/posts.service";
import { Injectable } from "@angular/core";

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {

  constructor(private postsService: PostsService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // req is immuatble
    console.log("Request is sending.................");

    if(this.postsService.isLoggedIn) {
      const modifiedRequest = req.clone({headers: req.headers.append("token","Bearer ffbrnjjjedgrfgrffefe")});
      return next.handle(modifiedRequest);
    } else {
      return next.handle(req);
    }
  }
}
