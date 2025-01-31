import { Component } from '@angular/core';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { CourseModel } from './components/course-card/models/course.model';
import { COURSES } from './db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CourseCardComponent, CommonModule],
})
export class AppComponent {
  courses: CourseModel[] = [...COURSES];

  startDate = new Date();
  title = 'angular core deep dive';
  price = 9.99;
  rate = 0.67;

  onCourseSelected(course: CourseModel) {
    console.log('App component - click event buddled...', course);
  }
}
