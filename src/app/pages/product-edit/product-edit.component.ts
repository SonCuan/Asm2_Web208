import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  productForm! : any
  constructor(
    private productSV : ProductService,
    private formbuilder : FormBuilder,
    private router : Router, 
    private route : ActivatedRoute
  ) { 
    const id  = this.route.snapshot.params['id'];
    this.productSV.getProductsById(id).subscribe(data => this.productForm.patchValue(data))
  }
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
    const id = +this.route.snapshot.params['id']
    this.productSV.updateProducts({...this.productForm.value , id}).subscribe((data) => { 
      alert('Sua thanh cong');
      this.router.navigateByUrl('/products');
    })
  }
}
