import {
  AfterViewInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  ContentChildren,
  QueryList,
  AfterContentInit,
  TemplateRef,
} from '@angular/core';
import { ICourse } from '../Interfaces/course';
import { CourseImageComponent } from '../course-image/course-image.component';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
  @Input({ required: true }) course: ICourse;
  @Input() noImageTpl: TemplateRef<any>;
  @Output() courseSelected = new EventEmitter<ICourse>();

  @ContentChild(CourseImageComponent) image: CourseImageComponent;
  @ContentChildren(CourseImageComponent) images: QueryList<CourseImageComponent>;

  ngAfterViewInit(): void {}

  ngAfterContentInit(): void {
    console.log('Content image with component name', this.image);
    console.info('Content Images', ...this.images);
  }

  onButtonClicked() {
    console.log('button clicked');
  }

  onCourseViewed() {
    console.log(this.course);
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
    return '';
  }
}
