import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseModel } from './models/course.model';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course!: CourseModel;

  @Input({
    required: true,
  })
  index!: number;

  @Output()
  courseEmitter = new EventEmitter<CourseModel>();

  onCourseViewed() {
    console.log('Course viewed: ', this.course.description);
    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return {
      beginner: this.course.category == 'BEGINNER',
      advanced: this.course.category == 'ADVANCED',
    };
  }
}
