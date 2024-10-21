import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  productForm! : any
  constructor (
    private authSV  : AuthService,
    private formbuilder : FormBuilder, 
    private router : Router
  ) { 

  }
  ngOnInit () : void { 
    this.productForm = this.formbuilder.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  addProduct () : void { 
    if(this.productForm.invalid) return alert('Vui long nhap day du thong tin');
    this.authSV.signin(this.productForm.value).subscribe((data) => { 
      alert('Dang nhap thanh cong');
      localStorage.setItem('user' , JSON.stringify(data))
      this.router.navigateByUrl('/products')
    })
  }
}
