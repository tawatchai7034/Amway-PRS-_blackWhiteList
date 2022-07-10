import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config-view',
  templateUrl: './config-view.component.html',
  styleUrls: ['./config-view.component.sass']
})
export class ConfigViewComponent implements OnInit {

  date = new Date();
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/config'])
  }

}
