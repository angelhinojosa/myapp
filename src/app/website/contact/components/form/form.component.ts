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
    // FormControl recibe 3 parámetros, 1-> valor inicial, 2-> array de validaciones sincronas y
    // 3-> array de validaciones asincronas (conexión a fuente de datos externa).
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
