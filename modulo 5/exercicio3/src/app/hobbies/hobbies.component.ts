import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  arrayHobbie: String[] = [];

  getHobbie(event: any) {
    if (event.target.value.trim())
      this.arrayHobbie.push(event.target.value)
    
    event.target.value = '';
    console.log(this.arrayHobbie)
  }

  constructor() { }

  ngOnInit(): void {

  }

}
