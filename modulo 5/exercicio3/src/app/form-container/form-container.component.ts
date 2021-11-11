import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.css']
})
export class FormContainerComponent implements OnInit {

  formContainer: any;
  checked: boolean = false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formContainer = this.fb.group({
      name: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  checkValue(event: any) {
    this.checked = event.currentTarget.checked;
  }

}
