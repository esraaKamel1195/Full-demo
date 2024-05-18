import { Component } from '@angular/core';
import { COURSES } from './Data/db-data';
import { ICourse } from './Interfaces/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Full Demo';
  courses: Array<ICourse> = COURSES;
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
  onCourseSelected(course: ICourse) {
    console.log(course);
  }

  getRandomDescription () {
     
  }
}
