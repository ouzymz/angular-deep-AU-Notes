import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  courses = COURSES;

  // @ViewChild(CourseCardComponent)
  @ViewChild("cardRef1")
  card1: CourseCardComponent;

  @ViewChild("cardRef2")
  card2: CourseCardComponent;

  @ViewChild("container")
  container: ElementRef;

  startDate = new Date(2000, 1, 1);

  title = "her seyi kucuk de yazsam bas harfleri buyuk baslatir";
  number = 1141.234411;
  rate = 0.68;

  // courseSelected(course: Course) {
  //   console.log(`Course Card is clicked`, course);
  // } //customevent tetiklendiginde calisacak method
  courseSelected(course: Course) {
    

    console.log("Container Div:", this.card1,"card1 data: ", this.card1.data);
    console.log("Container Div:", this.card2); //ulastigimiz html elemetini yazdirdik.
    console.log("Container Div:" , this.container);
  }

  onCourseSelected() {
    console.log(`Course Card is clicked`);
  }
}
