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
  AfterContentChecked,
  OnInit,
  OnChanges,
  DoCheck,
  SimpleChanges,
  OnDestroy
} from '@angular/core';
import { ICourse } from '../Interfaces/course';
import { CourseImageComponent } from '../course-image/course-image.component';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent
  implements
    OnInit,
    OnChanges,
    AfterViewInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    OnDestroy
{
  @Input({ required: true }) course: ICourse;
  @Input() noImageTpl: TemplateRef<any>;
  @Output() courseSelected = new EventEmitter<ICourse>();
  @ContentChild(CourseImageComponent) image: CourseImageComponent;
  @ContentChildren(CourseImageComponent)
  images: QueryList<CourseImageComponent>;

  ngOnInit(): void {
    // console.log('ngOnInit from course card component');
    // throw new Error('Method not implemented.');
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck from course card component');
    // throw new Error('Method not implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges from course card component', changes);
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit from course card component');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit from course card component');
    // console.log('Content image with component name', this.image);
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked function from course card component');
    // throw new Error('Method not implemented.');
  }

  onButtonClicked() {
    console.log('button clicked');
  }

  onCourseViewed() {
    // console.log(this.course);
    this.courseSelected.emit(this.course);
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
    return '';
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
}
