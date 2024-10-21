import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  productForm! : any
  constructor(
    private productSV : ProductService,
    private formbuilder : FormBuilder,
    private router : Router
  ) { }
  ngOnInit () : void { 
      this.productForm =  this.formbuilder.group({
      name : ['', [Validators.required , Validators.minLength(6)]],
      price : ['', [Validators.required , Validators.min(0)]],
      image  : [''],
      description : [''],
      quanlity : ['']
    })
  }
  addProduct () : void { 
    if(this.productForm.invalid) return alert('Vui long nhap day du thong tin');
    this.productSV.addProducts(this.productForm.value).subscribe((data) => { 
      alert('Them thanh cong');
      this.router.navigateByUrl('/products');
    })
  }
}
