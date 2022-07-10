import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-view',
  templateUrl: './part-view.component.html',
  styleUrls: ['./part-view.component.sass']
})
export class PartViewComponent implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/part'])
  }

}
