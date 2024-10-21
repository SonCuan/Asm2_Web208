import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../../interface/product';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product! : IProduct[]
  constructor (private productsSV : ProductService){}
  ngOnInit () : void { 
    this.productsSV.getProducts().subscribe(data => this.product = data);
  }
  deleteProduct(id : number) : void { 
    if(confirm('Ban co muon xoa khong?')){
      this.productsSV.deleteProducts(id).subscribe(() => { 
        alert('Xoa thanh cong');
        this.product = this.product.filter(item => item.id !== id)
      })
    }
  }
}
