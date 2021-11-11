import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // name: any = '';
  father: any = '';
  // lastName: any = '';

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(): void {
    // this.name = new FormControl('');
    // this.father = new FormGroup({
    //   name: new FormControl(''),
    //   lastName: new FormControl(''),
    // });

    this.father = this.fb.group({
      name: ['', Validators.required],  // validators.required -> campo obrigatório.
      lastName: [''],
    });
  }

  showUsProperties() {
    console.log(this.father.value)
  }

  // alterNameValue() {
  //   console.log(this.father.value)
  // }
  
}
