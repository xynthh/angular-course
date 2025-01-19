import { Component } from '@angular/core';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { COURSES } from './db-data';
import { CourseModel } from './components/course-card/models/course.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CourseCardComponent,
  ],
})
export class AppComponent {
  coreCourse: CourseModel = COURSES[0];
  rxjsCourse: CourseModel = COURSES[1];
  ngrxCourse: CourseModel = COURSES[2];

  onCourseSelected(course: CourseModel) {
    console.log('App component - click event buddled...', course);
  }
}
