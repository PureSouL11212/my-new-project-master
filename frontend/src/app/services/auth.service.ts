import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api_url='http://localhost:8000/';
  constructor(private router:Router,private http:HttpClient) { }
  isAuthenticated(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    // If currentUser exists in local storage, return true, else return false
    return currentUser !== null;
  }
  login(username: string, password:string){
    return this.http.post<any>(this.api_url+'accounts/api/auth/',
    {username,password},httpOptions).pipe(
      map(user=>{
        if(user && user.token){
          localStorage.setItem("currentUser",JSON.stringify(user));        
          this.router.navigate(['/Topnavbar']);
        }
        return user;
      })
    );
  }
logout(){
  localStorage.removeItem('currentUser');
  this.router.navigate(['']);
  setTimeout(() => {
    alert("You have been successfully Logged Out");
  }, 150); 
}
}
