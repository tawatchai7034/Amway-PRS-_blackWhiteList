import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-shopper-view',
  templateUrl: './receive-shopper-view.component.html',
  styleUrls: ['./receive-shopper-view.component.sass']
})
export class ReceiveShopperViewComponent implements OnInit {

  sendByNo ="2142637";
  sendBy ="คุณทดสอบระบบ ไม่ต้องจัดของ";
  sendByType ="ABO";
  tel ="0812345678";
  mail ="test@gmail.com";
  fault_Code ="Fault Code E001 : หน้าจอไม่ทำงาน-Adapter ชำรุด";


  enKey = "0001";
  command = "<input type=\"checkbox\"id=\"chk_" +this.enKey+ "\" name=\"chk_\">";
  rows=[
    { no: "ค่าบริการซ่อม eSpring", status: "300", code: ""},  
  ];
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { 
    console.log(this.rows);
  }
   
  ngOnInit(): void {
    
    this.dtOptions = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'300px',
      
      data:this.rows,
      
      'columnDefs': 
      [
        {data:'no' ,'targets': [0],title: "อะไหล่",className:'dt-body-center', width: "100px",'orderable': false},
        {data:'status' ,'targets': [1],title: "ราคาประเมิน", width: "80px",'orderable': false},
        {data:'code' ,'targets': [2],title: "หมายเหตุ", width: "100px",'orderable': false}, 
    ]
    };
  }
  onEdit() {
    console.log("Edit");
    this.router.navigate(['/pages/receive-detail'])
  }
  onClose() {
    console.log("Close");
    this.router.navigate(['/pages/counter'])
  }
  onPrint() {
    console.log("Print");
   
  }
}

