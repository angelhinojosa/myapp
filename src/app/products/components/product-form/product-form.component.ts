import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;

  // Todo lo que necesitamos obtener de forma instantane debe ir en el constructor.
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  // Todo lo que no sea instantaneo se mete en el ngOnInit
  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      image: [''],
      price: [10000, [Validators.required]],
      text: ['', [Validators.required, Validators.minLength(100)]]
    });

    // this.form
    // .valueChanges
    // .subscribe(data => {
    //   console.log(data);
    // });
  }

  createProduct() {
    if (this.form.valid){
      console.log(this.form.value);
    }
  }

  get titleField() {
    return this.form.get('title');
  }

}
