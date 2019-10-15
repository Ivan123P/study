import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product-list/product.service';
import { Product } from '../product-list/product-list.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

// function emailValidator(control: FormControl): {[key: string]: any} {
//   const emailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
//   const value = control.value;

//   const res = emailReg.test(value);

//   if (res) {
//     return null;
//   } else {
//     return {
//       "emailValidator": { value }
//     }
//   }
// }

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})

export class AddProductComponent implements OnInit {

  public newProduct: Product = {
    name: '',
    price: 0
  };

  public loginForm: FormGroup | null = null;
  public email: FormControl | null = null;
  public password: FormControl | null = null;

  public formErrors = {
    "email": "",
    "password": ""
  };

  public validationMessages = {
    "email": {
      "required": "This field is required!",
      "pattern": "Incorrect email!"
    },
    "password": {
      "required": "This field is required!",
      "minlength": "You must input more then 6 symbols!"
    }
  };

  private subs: Subscription;

  constructor( private productService: ProductService ) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.subs = this.loginForm.valueChanges.subscribe(data => this.onValueChange(data));
    this.onValueChange();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  public onSubmit(loginForm: FormGroup): void {
    console.log(loginForm);
  }

  private onValueChange(data?: any): void {
    if (!this.loginForm) {
      return;
    }

    const form = this.loginForm;

    for(let field in this.formErrors) {
      this.formErrors[field] = "";

      const control = form.get(field);

      if (control && control.touched && control.invalid) {
        const message = this.validationMessages[field];

        for(let key in control.errors) {
          this.formErrors[field] += message[key] + " ";
        }
      }
    }
  }

  private createFormControls(): void {
    this.email = new FormControl('', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  }
  private createForm(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }
}
