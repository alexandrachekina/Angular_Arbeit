import { Component, OnInit, Input } from '@angular/core';
import { SnapFace } from '../models/snap-face';

@Component({
  imports: [],
  selector: 'app-face-snap',
  styleUrl: './face-snap.scss',
  templateUrl: './face-snap.html',
})
export class FaceSnap  implements OnInit {
@Input() faceSnap!: SnapFace;

 
  snapButtonText! :String;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    
    
    
  }

  onSnap(): void {
  if (this.userHasSnapped) {
    this.faceSnap.snaps--;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  } else {
    this.faceSnap.snaps++;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
}
