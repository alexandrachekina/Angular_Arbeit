import { Component, OnInit} from '@angular/core';
import { FaceSnap } from './face-snap/face-snap';
import { SnapFace } from './models/snap-face';



@Component({
  imports: [ FaceSnap ],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit{
  faceSnaps!: SnapFace[];
  
  ngOnInit(): void{
     this.faceSnaps = [new SnapFace(
      'neue snap',
      'Tolle Tag',
      new Date(),
      15,
      'https://www.zooplus.de/magazin/wp-content/uploads/2017/03/labrador-welpen.webp'
      ),
      new SnapFace(
      'Meine Katze',
      'Sie liebt es, den ganzen Tag zu schlafen.',
      new Date(),
      13,
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba'
      ),
     
      new SnapFace(
      'Meine Lieblingspizza',
      'Eine Pizza mit viel Käse und frischen Zutaten.',
      new Date(),
      20,
      'https://images.unsplash.com/photo-1574071318508-1cdbab80d002'
      )
     ]

    this.faceSnaps[1].setLocation('three Rock Mountain');

  }
}
