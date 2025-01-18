import {Component} from '@angular/core';
import {CourseCardComponent} from './components/course-card/course-card.component';
import {COURSES} from './db-data';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CourseCardComponent
  ]
})
export class AppComponent {
  coreCourse = COURSES[0];
  rxjsCourse = COURSES[1];
  ngrxCourse = COURSES[2];
}
