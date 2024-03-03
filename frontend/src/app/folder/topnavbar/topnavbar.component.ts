import { Component } from '@angular/core';
import { SecondnavbarComponent } from '../secondnavbar/secondnavbar.component';
import { BodyComponent } from '../body/body.component';
import { FooterComponent } from "../../footer/fotter.component";
import { BurgerComponent } from "../burger/burger.component";
import { MainhomepageComponent } from '../../navfolder/mainhomepage/mainhomepage.component';
import { AuthService } from '../../services/auth.service';
@Component({
    selector: 'app-topnavbar',
    standalone: true,
    templateUrl: './topnavbar.component.html',
    styleUrl: './topnavbar.component.css',
    imports: [SecondnavbarComponent,MainhomepageComponent, BodyComponent, FooterComponent, BurgerComponent]
})
export class TopnavbarComponent {
    constructor(private authService:AuthService){}
    logout():void{
        this.authService.logout();
    }
}
