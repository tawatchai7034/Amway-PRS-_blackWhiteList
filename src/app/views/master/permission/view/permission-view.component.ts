import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-permission-view',
  templateUrl: './permission-view.component.html',
  styleUrls: ['./permission-view.component.sass']
})
export class PermissionViewComponent implements OnInit {

  constructor(private router: Router) { }
  permissionName = new Array(15);
  menuName ='BOM';

 

  ngOnInit(): void {
    console.log(this.permissionName.findIndex);
    console.log(this.menuName);
  }

  onBack() {
    console.log("ok");
    this.router.navigate(['/pages/permission'])
   
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/permission'])
  }
  

}
