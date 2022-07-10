import { Component, OnInit } from '@angular/core';

export interface data {
	[key: string]: any;
}

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.sass']
})
export class DonutComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  saleData = [
	{ name: "Mobiles", value: 105000 },
	{ name: "Laptop", value: 55000 },
	{ name: "AC", value: 15000 },
	{ name: "Headset", value: 150000 },
	{ name: "Fridge", value: 20000 }
	];
}
