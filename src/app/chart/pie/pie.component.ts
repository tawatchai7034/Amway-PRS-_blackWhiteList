import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.sass']
})
export class PieComponent implements OnInit {

	saleData = [
		{ name: "Mobiles", value: 105000 },
		{ name: "Laptop", value: 55000 },
		{ name: "AC", value: 15000 },
		{ name: "Headset", value: 150000 },
		{ name: "Fridge", value: 20000 }
		];

  ngOnInit(): void {
  }

}
