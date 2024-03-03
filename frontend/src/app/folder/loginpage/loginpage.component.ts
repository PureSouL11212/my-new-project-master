import { Component,OnInit} from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { FormControl,FormGroup, FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [ProfileComponent,FormsModule,ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent implements OnInit {
  myform!:FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService){}
  ngOnInit(): void{
    this.myform=new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }
  get f(){
    return this.myform.controls;
  }
  onSubmit(){
    this.authService.login(this.f['username'].value, this.f['password'].value)
      .pipe(first())
      .subscribe(data => {
        console.log(data);
      });
  }
}