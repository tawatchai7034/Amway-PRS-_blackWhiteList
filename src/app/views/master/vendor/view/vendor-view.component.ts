import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-view',
  templateUrl: './vendor-view.component.html',
  styleUrls: ['./vendor-view.component.sass']
})
export class VendorViewComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/vendor'])
  }

}
