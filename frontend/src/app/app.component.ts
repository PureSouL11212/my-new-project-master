import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TopnavbarComponent } from './folder/topnavbar/topnavbar.component';
import { SecondnavbarComponent } from './folder/secondnavbar/secondnavbar.component';
import { BodyComponent } from './folder/body/body.component';
import { TestbodyComponent } from './folder/testbody/testbody.component';
import { LoginpageComponent } from './folder/loginpage/loginpage.component';
import { FooterComponent } from './footer/fotter.component';
import { BurgerComponent } from './folder/burger/burger.component';
import { HomeAComponent } from './navfolder/home-a/home-a.component';
import { BookingComponent } from './navfolder/booking/booking.component';
import { MainhomepageComponent } from './navfolder/mainhomepage/mainhomepage.component';
import { HttpClientModule } from '@angular/common/http';
import { PublicService } from './services/public.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Cancel1Component } from './navfolder/cancel1/cancel1.component';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [FormsModule, ReactiveFormsModule,Cancel1Component,CommonModule,RouterOutlet,BookingComponent,MainhomepageComponent,BurgerComponent,HomeAComponent,TestbodyComponent,FooterComponent ,BodyComponent,LoginpageComponent,TopnavbarComponent,HttpClientModule,SecondnavbarComponent ]
})
export class AppComponent {
  title = 'my-new-project';
  msg:any;
  constructor(private pService:PublicService){}
  ngOnInit():void{
    this.showMessage();
  }
  showMessage(){
    this.pService.getMessage().subscribe(data=>{
      this.msg=data,
        console.log(this.msg);
    });
  }
}
