import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from './Data/db-data';
import { ICourse } from './Interfaces/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'Full Demo';
  courses: Array<ICourse> = COURSES;
  @ViewChild('container') container: ElementRef;
  @ViewChild(CourseCardComponent, { read: ElementRef }) card: CourseCardComponent;
  @ViewChildren(CourseCardComponent) coursesViewed: QueryList<CourseCardComponent>;
  
  // coreCourse: ICourse = COURSES[0];
  // rxjsCourse: ICourse = COURSES[1];
  // ngrxCourse: ICourse = COURSES[2];

  // serverElements: Array<{ type: string; name: string; content: string }> = [{type: 'string', name: 'string', content: 'string'}];

  // onServerAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: "server",
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  // onBluePrintAdded(serverData: { serverName: string; serverContent: string }) {
  //   this.serverElements.push({
  //     type: "bluePrint",
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log('Card on after view init', this.card);
    console.log('Container on constractor', this.container);
  }

  onCourseSelected(course: ICourse) {
    console.log(course);
  }
}
