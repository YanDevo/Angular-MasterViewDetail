import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const BaseUrl = 'http://localhost:3000'



@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  endPoint = 'courses'
  courses: Course[] = []


  constructor (private http: HttpClient) {
  }



// ______________________________________________
// constructing the url to use in CRUD requests 
  private getUrl(){
    return `${BaseUrl}/${this.endPoint}`
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`
  }
// _____________________________________________




  //ROutes
  // get all courses
getCourses() {
  return this.http.get<any>(this.getUrl());
}

//find a course by
find(id){
  return this.http.get(this.getUrlWithId(id));
}

// create a course
create(course) {
  return this.http.post(this.getUrl(), course);
}

// update an existing course
update(course) {
  return this.http.put(this.getUrlWithId(course.id), course)
}

//delete a course
deleteCourse(id) {
  return this.http.delete(this.getUrlWithId(id))
}

}
