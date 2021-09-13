import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../../services/product.service';
import {Observable} from 'rxjs';
import {IcecreamCard} from '../../../../../shared/interfaces';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.less']
})
export class MarketComponent implements OnInit {

  productCards$: Observable<IcecreamCard[]>;

  constructor(private productServise: ProductService) { }

  ngOnInit(): void {
    this.productCards$ = this.productServise.getProducts();
  }

}
