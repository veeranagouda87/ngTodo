import { Component,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  customerData = [];
  constructor(
    //private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {

    this.items = this.getItems();

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  getItems(){
    return [{name:'soap',price:100},{name:'shampoo',price:120}]
  }



  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.customerData.push(customerData);
    this.items = [];
    this.checkoutForm.reset();
  }

}
