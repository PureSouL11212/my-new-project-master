import { Component } from '@angular/core';
import { TopnavbarComponent } from '../topnavbar/topnavbar.component';
@Component({
  selector: 'app-secondnavbar',
  standalone: true,
  imports: [TopnavbarComponent],
  templateUrl: './secondnavbar.component.html',
  styleUrl: './secondnavbar.component.css'
})
export class SecondnavbarComponent {
  isResponsive: boolean = false;

  toggleMenu() {
    this.isResponsive = !this.isResponsive;
  }}
