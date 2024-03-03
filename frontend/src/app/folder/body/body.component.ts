import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  availableRooms = [
    { image: 'assets/image/imae2.jpeg', date: '2024-02-19', day: 'Monday' , RoomAvailable:'10' },
    { image: 'assets/image/image3.webp', date: '2024-02-20', day: 'Tuesday' },
    { image: 'assets/image/image4.jpeg', date: '2024-02-21', day: 'Wednesday' },
    { image: 'assets/image/room1.jpg', date: '2024-02-22', day: 'Thursday' },
    { image: 'assets/image/image5.webp', date: '2024-02-23', day: 'Friday' }
  ];
  proceed() {
    // Your proceed function logic here
  }
}
