import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';

import { MyValidators } from '@utils/validators';
import { Observable } from 'rxjs';

import { ProductService } from './../../../website/products/services/product.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  form: FormGroup;

  uploadPercent$: Observable<number>;
  categories: any[] = [];

  // Todo lo que necesitamos obtener de forma instantane debe ir en el constructor.
  constructor(
    private formBuilder: FormBuilder,
    private fireStorage: AngularFireStorage,
    private productsService: ProductService
  ) {
    this.buildForm();
  }

  // Todo lo que no sea instantaneo se mete en el ngOnInit
  ngOnInit(): void {
    this.productsService.getCategories()
    .subscribe(categories => {
      this.categories = categories;
    });
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, MyValidators.isNicolas]],
      image: [''],
      price: [10000, [Validators.required]],
      text: ['', [Validators.required, Validators.minLength(100)]],
      category_id: ['', [Validators.required]]
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

  uploadFile(event){
    const file = event.target.files[0];
    const filePath = `imagenes/${file.name}`;
    const fileRef = this.fireStorage.ref(filePath);
    const task = this.fireStorage.upload(filePath, file);
    
    this.uploadPercent$ = task.percentageChanges();
  }

}
