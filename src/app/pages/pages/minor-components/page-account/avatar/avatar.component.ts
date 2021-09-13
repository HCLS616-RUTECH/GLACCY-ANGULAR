import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {UserProfile} from '../../../../../shared/interfaces';
import {Subscription} from 'rxjs';
import {SharedService} from '../../../../../services/shared.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.less']
})
export class AvatarComponent implements OnInit, OnDestroy {

  @Input() user: UserProfile;
  fullImgPath: string;
  imgSubscription: Subscription;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.loadFullImgPath(this.user.avatar);
  }

  ngOnDestroy(): void {
    if (this.imgSubscription) {
      this.imgSubscription.unsubscribe();
    }
  }

  loadFullImgPath(imgPath: string): void {
    this.imgSubscription = this.sharedService.getFullImgPath(`avatars/${imgPath}`).subscribe( url => {
      this.fullImgPath = url;
    });
  }

}
