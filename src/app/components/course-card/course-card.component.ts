import { Component, Input, OnInit } from '@angular/core';
import { CourseModel } from './models/course.model';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
})
export class CourseCardComponent implements OnInit {
  @Input() course!: CourseModel;

  constructor() {
    console.log('Course card component created');
  }

  ngOnInit(): void {
    console.log('Course card component initialized');
  }

  onCourseViewed() {
    console.log('Course viewed: ', this.course.description);
  }
}
