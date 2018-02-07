import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent {
@Input('likesCount') likesCount: number;
@Input('isActive') isActive: boolean;

 onClick() {
   this.likesCount += (this.isActive) ? -1 : 1;
   this.isActive = !this.isActive;
 }

}
