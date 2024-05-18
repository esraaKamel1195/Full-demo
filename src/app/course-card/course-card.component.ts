import { Component, EventEmitter, Input, Output,  } from '@angular/core';
import { ICourse } from '../Interfaces/course';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input({ required: true }) course: ICourse;
  @Output() courseSelected = new EventEmitter<ICourse>();

  onButtonClicked() {
    console.log("button clicked");
  }

  onCourseViewed() {
    this.courseSelected.emit(this.course);
  }
}
