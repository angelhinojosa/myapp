import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { hostViewClassName } from '@angular/compiler';

import { debounceTime } from 'rxjs/operators';

import { MyValidators } from '@utils/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  emailField: FormControl;
  nameField: FormControl;

  constructor() {
    const validations = [Validators.minLength(10), Validators.required];
    this.emailField = new FormControl('', validations);
    this.emailField.valueChanges
    .pipe(
      debounceTime(350),
    )
    .subscribe(value => {
      console.log(this.emailField.valid, value);
    });

    this.nameField = new FormControl('', [
      Validators.required,
      MyValidators.isNicolas
    ]);
  }

  ngOnInit(): void {

  }

  getValue(){
    console.log(this.nameField.value);
  }

}
