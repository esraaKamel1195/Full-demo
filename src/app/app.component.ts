import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { COURSES } from './Data/db-data';
import { ICourse } from './Interfaces/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    DoCheck,
    AfterViewChecked,
    OnDestroy
{
  title = 'Full Demo';
  courses: Array<ICourse> = COURSES;
  @ViewChild('container') container: ElementRef;
  @ViewChild(CourseCardComponent, { read: ElementRef })
  card: CourseCardComponent;
  @ViewChildren(CourseCardComponent)
  coursesViewed: QueryList<CourseCardComponent>;

  coreCourse: ICourse = COURSES[0];
  rxjsCourse: ICourse = COURSES[1];
  ngrxCourse: ICourse = COURSES[2];

  serverElements: Array<{ type: string, name: string, content: string }> = [
    { type: 'server', name: 'Server Test', content: 'This Is Test' },
    { type: 'bluePrint', name: 'Server Test', content: 'This Is Test' },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('from ngOnInit function');
  }

  onServerAdded(serverData: { name: string; content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content,
    });
  }

  onBluePrintAdded(serverData: { name: string; content: string }) {
    console.log('From onBluePrintAdded', serverData);
    this.serverElements.push({
      type: 'bluePrint',
      name: serverData.name,
      content: serverData.content,
    });

    console.log('From onBluePrintAdded after Add Server Elements', this.serverElements);
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed !!";
  }

  ngAfterViewInit(): void {
    console.log('from ngAfterViewInit function');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('from ngOnChange function', changes);
    // throw new Error('Method not implemented.');
  }

  ngAfterViewChecked(): void {
    console.log('from ngAfterViewChecked function');
    // throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    console.log('from ngDoCheck function');
    // throw new Error('Method not implemented.');
  }

  onCourseSelected(course: ICourse) {
    console.log(course);
  }

  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
}
