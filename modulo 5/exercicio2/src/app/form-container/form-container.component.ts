import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  formContainer: any;
  data: Date = new Date();
  items: String[] = ["item1", "item2", "item3"];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formContainer = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

}
