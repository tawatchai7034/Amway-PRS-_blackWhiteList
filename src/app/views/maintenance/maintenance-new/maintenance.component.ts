import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.sass']
})
export class MaintenanceComponent implements OnInit {

  code ="3022060002";
  serialNo ="123456789AAAA";
  sendByType ="100811 เครื่องกรองน้ำอีสปริง";
  branch ="30B2";
  status ="รับเครื่องจากลูกค้าเพื่อดำเนินการส่งซ่อม";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onRepair(){
    this.router.navigate(['pages/maintenance/maintenance-repair'])
  }

}
