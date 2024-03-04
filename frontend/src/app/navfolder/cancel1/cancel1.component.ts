import { Component,OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-cancel1',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cancel1.component.html',
  styleUrl: './cancel1.component.css'
})
export class Cancel1Component implements OnInit {
  users: any[]=[];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}