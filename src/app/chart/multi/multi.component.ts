import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.sass']
})
export class MultiComponent implements OnInit {

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
