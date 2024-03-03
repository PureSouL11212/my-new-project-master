import { Component } from '@angular/core';
import { BodyComponent } from '../../folder/body/body.component';
import { BurgerComponent } from '../../folder/burger/burger.component';
import { FooterComponent } from '../../footer/fotter.component';
import { TopnavbarComponent } from '../../folder/topnavbar/topnavbar.component';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [BodyComponent,BurgerComponent,FooterComponent,TopnavbarComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  constructor(private authService:AuthService){}
    logout():void{
        this.authService.logout();
    }
}
