import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule , NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  productForm! : any
  constructor (
    private authSV  : AuthService,
    private formbuilder : FormBuilder, 
    private router : Router
  ) { 

  }
  ngOnInit () : void { 
    this.productForm = this.formbuilder.group({
      username : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  addProduct () : void { 
    if(this.productForm.invalid) return alert('Vui long nhap day du thong tin');
    this.authSV.signup(this.productForm.value).subscribe((data) => { 
      alert('Dang ky thanh cong');
      this.router.navigateByUrl('/signin')
    })
  }
}
