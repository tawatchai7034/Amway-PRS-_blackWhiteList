import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bom-view',
  templateUrl: './bom-view.component.html',
  styleUrls: ['./bom-view.component.sass']
})
export class BomViewComponent implements OnInit {

  sdate = new Date();
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/bom'])
  }

}
