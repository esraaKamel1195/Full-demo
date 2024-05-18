import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './header/header.component';
import { ServerComponent } from './server/server.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CoreComponent,
    HeaderComponent,
    ServerComponent,
    ServerElementComponent,
    CourseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
