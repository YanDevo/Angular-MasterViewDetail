import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons = []
  selectedLesson = null;

  constructor(private lessonsData: LessonsService) {}

  ngOnInit() {
    this.courseLessons = this.lessonsData.lessons;
  }

  selectLesson(lesson){
    this.selectedLesson = lesson
  }

}
