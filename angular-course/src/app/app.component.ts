import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date(2000, 1, 1);

  title = "her seyi kucuk de yazsam bas harfleri buyuk baslatir";
  number =1141.234411;
  rate = 0.68;

  courseSelected(course: Course) {
    console.log(`Course Card is clicked`, course);
  } //customevent tetiklendiginde calisacak method

  onCourseSelected() {
    console.log(`Course Card is clicked`);
  }
}
