import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {
  @Input() selectedCourse: Course;
  @Input() originalTitle;
  @Output() saved = new EventEmitter;
  @Output() cleared = new EventEmitter;

}
