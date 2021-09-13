import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SharedService} from '../../../../../services/shared.service';
import {IcecreamCard} from '../../../../../shared/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit, OnDestroy {

  @Input() card: IcecreamCard;
  fullImgPath: string;
  imgSubscription: Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loadFullImgPath(this.card.imgPath);
  }

  ngOnDestroy(): void {
    if (this.imgSubscription) {
      this.imgSubscription.unsubscribe();
    }
  }

  loadFullImgPath(imgPath: string): void {
    this.imgSubscription = this.sharedService.getFullImgPath(imgPath).subscribe( url => {
      this.fullImgPath = url;
    });
  }

}
