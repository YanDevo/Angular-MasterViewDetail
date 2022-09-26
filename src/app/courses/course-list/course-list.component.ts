import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Course } from 'src/app/common/models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
  @Input() courseList: Course[] = [];
  @Output() selected = new EventEmitter;
  @Output() deleted = new EventEmitter;

}
