import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-index',
  templateUrl: './maintenance-index.component.html',
  styleUrls: ['./maintenance-index.component.sass']
})
export class MaintenanceIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private renderer: Renderer2, private router: Router) { }
  date = new Date();
  today = new Date();

  enKey = "0001";
  viewButton = "<button type=\"button\" class=\"btn btn-outline-success btn-xs\" id=\"btnView_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดูใบรับซ่อม\" (click)=\"onView()\" aria-label=\"Left Align\"><i class=\"vp-search-solid\"></i></button>";
  editButton = "<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" id=\"btnEdit_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"แก้ไขรับซ่อม\" (click)=\"onEdit('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-edit-solid\"></i></button>";
  viewbillButton = "<button type=\"button\" class=\"btn btn-outline-info btn-xs\" id=\"btnViewbill_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดูใบแจ้งค่าบริการ\" (click)=\"btnViewbill('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-file-solid\"></i></button>";
  printButton = "<button type=\"button\" class=\"btn btn-outline-dark btn-xs\" id=\"btnPrint_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"พิมพ์ใบ ShippingMark\" (click)=\"onPrint('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-print-solid\"></i></button>";

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
      columns: 
      [
        {data:'command',title: "",className:'center','orderable': false,width:'100px', 
        },
        {data:'receiveNo' ,title: "Receive No",className:'center',width:'80px'},
        {data:'serialNo' ,title: "Serial Number",className:'left',width:'100px'},
        {data:'Status' ,title: "Status",className:'center',width:'80px'},
        {data:'SKU' ,title: "SKU",className:'left',width:'100px'},
        {data:'ReceiveDate' ,title: "Receive Date",className:'center',width:'80px'},
        {data:'ReceiveName' ,title: "Receive Name",className:'center',width:'100px'},
        {data:'RepairShop' ,title: "Repair Shop",className:'center',width:'100px'},
        {data:'RepairDate' ,title: "Repair Date",className:'center',width:'80px'},
        {data:'RepairUser' ,title: "Repair User",className:'center',width:'100px'},
        {data:'RepairCost' ,title: "Repair Cost",className:'right',width:'100px'},
        {data:'DistNumber' ,title: "Dist Number",className:'left',width:'80px'},
        {data:'DistName' ,title: "Dist Name",className:'left',width:'100px'},
        {data:'SendName' ,title: "Send Name",className:'left',width:'100px'},
        {data:'ReturnUser' ,title: "Return User",className:'center',width:'100px'},
    ],
   
   
    };
    
  }

  newService(){
    this.router.navigate(['pages/maintenance/new'])
  }
  
  
  onView(){
    console.log("xxxx");
    this.router.navigate(['pages/maintenance/new'])
  }
}