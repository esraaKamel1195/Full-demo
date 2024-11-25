import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { PipesComponent } from './pipes/pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PostsComponent } from './posts/posts.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/auth.interceptor.service';
import { LoggingInterceptor } from './interceptors/logging.interceptor.service';
import { TemplateDrivenFormsComponent } from './tdf/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './reactive-form/reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    ServerComponent,
    ServerElementComponent,
    CourseCardComponent,
    CourseImageComponent,
    BasicHighlightDirective,
    HighlightDirective,
    AccountComponent,
    NewAccountComponent,
    MainComponent,
    EmployeeComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    PostsComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
