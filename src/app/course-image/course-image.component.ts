import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-course-image',
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css'
})
export class CourseImageComponent implements OnDestroy {
  @Input({ required: false }) courseImg: string;

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
}
