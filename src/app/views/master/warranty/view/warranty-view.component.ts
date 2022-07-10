import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warranty-view',
  templateUrl: './warranty-view.component.html',
  styleUrls: ['./warranty-view.component.sass']
})
export class WarrantyViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/warranty/warranty-index'])
  }
}
