import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
 
  constructor() {}
  ngOnInit() {}

  @Input({required:true}) //required true dedigimiz icin data inputunu almaya zorladık
  data: Course;

  @Input()
  cardIndex:number;

  isImageVisible(){
    return this.data && this.data.iconUrl;
  }

  cardClasses(){
   return (this.data.category == "BEGINNER") ? {'beginner':true} : (this.data.category == "INTERMEDIATE")?{'intermediate':true}:(this.data.category == "ADVANCED")?{'advanced':true}:{};
   
  }

  cardStyles(){
    return {'text-decoration':'underline'};
  }

  // @Output()
  // courseSelected = new EventEmitter<Course>(); //event yayabilecek eventemitter tanimlandi. EventEmitterin  ISIM.  onemlidir. Eğer isim degistirmek istiyorsak Output'ta bildirmeliyiz. 

  @Output('courseSelected')
  eventEmitter = new EventEmitter<Course>(); //event yayabilecek eventemitter tanimlandi. EventEmitterin  ISIM.  onemlidir. Eğer isim degistirmek istiyorsak Output'ta bildirmeliyiz.


  onCourseViewed(){
    console.log(`${this.data.description} card component viewed `) //button ekleyip 
    this.eventEmitter.emit(this.data);//event emmitter yardimiyla butona tiklandiginda sisteme olay bildirimi yapan emit fonkisiyonu calistirildi.
  }
}
