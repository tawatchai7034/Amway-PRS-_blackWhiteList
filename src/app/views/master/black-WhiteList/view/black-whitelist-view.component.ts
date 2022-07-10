import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-black-whitelist-view',
  templateUrl: './black-whitelist-view.component.html',
  styleUrls: ['./black-whitelist-view.component.sass']
})
export class BlackWhitelistViewComponent implements OnInit {

  date = new Date();
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/blackWhitelist'])
  }

}
