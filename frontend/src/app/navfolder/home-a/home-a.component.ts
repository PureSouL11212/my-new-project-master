import { Component,OnInit} from '@angular/core';
import { BillService } from '../../services/bill.service';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home-a',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './home-a.component.html',
  styleUrl: './home-a.component.css'
})
export class HomeAComponent implements OnInit {
  products: any[]=[];
  totalAmount: number = 0;

  constructor(private billService: BillService) { }

  ngOnInit(): void {
    this.billService.getData('Product').subscribe(
      (data) => {
        this.products = data;
        console.log(this.products);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}