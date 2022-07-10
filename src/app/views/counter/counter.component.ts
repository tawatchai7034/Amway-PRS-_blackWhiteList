import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter/counter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass']
})
export class CounterComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private service: CounterService,private router: Router) { }
  date = new Date();
  today = new Date();

  enKey = "0001";
  viewButton = "<button type=\"button\" class=\"btn btn-outline-success btn-xs\" id=\"btnEdit_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดูใบรับซ่อม\" (click)=\"onEdit('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-search-solid\"></i></button>";
  editButton = "<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" id=\"btnEdit_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"แก้ไขรับซ่อม\" (click)=\"onEdit('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-edit-solid\"></i></button>";
  viewbillButton = "<button type=\"button\" class=\"btn btn-outline-info btn-xs\" id=\"btnDel_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดูใบแจ้งค่าบริการ\" (click)=\"onDelete('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-file-solid\"></i></button>";
  printButton = "<button type=\"button\" class=\"btn btn-outline-dark btn-xs\" id=\"btnView_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"พิมพ์ใบ ShippingMark\" (click)=\"onView('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-print-solid\"></i></button>";

  command = this.viewButton+" "+this.editButton+" "+this.viewbillButton+" "+this.printButton;
  rows=[
    {command: this.command,
      receiveNo: "30123456", 
      serialNo: "122770520AAAM", 
      Status: 'รับเครื่องจากลูกค้าเพื่อดำเนินการส่งซ่อม', 
      SKU: 'เครื่องกรองน้ำอีสปริง',
      ReceiveDate: '23/05/2022', 
      ReceiveName: 'วิมล หรินทรสุทธิ', 
      RepairShop: '30B2', 
      RepairDate: '', 
      RepairUser: '', 
      RepairCost: '0.00', 
      DistNumber: '9052877', 
      DistName: '', 
      SendName: 'ศิริพร รักธรร',  
      ReturnUser: '' },
    
  ];
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'400px',
      dom:'frtip',
      data:this.rows,
      order: [[1, "asc"]],
      'columnDefs': 
      [
        {data:'command' ,'targets': [0],title: "",className:'center','orderable': false,width:'100px'},
        {data:'receiveNo' ,'targets': [1],title: "Receive No",className:'center',width:'80px'},
        {data:'serialNo' ,'targets': [2],title: "Serial Number",className:'left',width:'100px'},
        {data:'Status' ,'targets': [3],title: "Status",className:'center',width:'80px'},
        {data:'SKU' ,'targets': [4],title: "SKU",className:'left',width:'100px'},
        {data:'ReceiveDate' ,'targets': [5],title: "Receive Date",className:'center',width:'80px'},
        {data:'ReceiveName' ,'targets': [6],title: "Receive Name",className:'center',width:'100px'},
        {data:'RepairShop' ,'targets': [7],title: "Repair Shop",className:'center',width:'100px'},
        {data:'RepairDate' ,'targets': [8],title: "Repair Date",className:'center',width:'80px'},
        {data:'RepairUser' ,'targets': [9],title: "Repair User",className:'center',width:'100px'},
        {data:'RepairCost' ,'targets': [10],title: "Repair Cost",className:'right',width:'100px'},
        {data:'DistNumber' ,'targets': [11],title: "Dist Number",className:'left',width:'80px'},
        {data:'DistName' ,'targets': [12],title: "Dist Name",className:'left',width:'100px'},
        {data:'SendName' ,'targets': [13],title: "Send Name",className:'left',width:'100px'},
        {data:'ReturnUser' ,'targets': [14],title: "Return User",className:'center',width:'100px'},
    ]
    };
   
  }

  openShopper(){
    this.router.navigate(['/pages/counter/shopper'])
  }
  durable(){
    this.router.navigate(['pages/counter/receive'])
  }
 receiveShipment(){
    this.router.navigate(['pages/counter/shopper-detail/receive-to-shipment'])
  }
  sendShipment(){
    this.router.navigate(['pages/counter/shopper-detail/send-to-shipment'])
  }
  
}

  


