import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-index',
  templateUrl: './employee-index.component.html',
  styleUrls: ['./employee-index.component.sass']
})
export class EmployeeIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { }

  enKey = "0001";
  editButton = "<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" id=\"btnEdit_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"แก้ไข\" (click)=\"onEdit('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-edit-solid\"></i></button>";
  deleteButton = "<button type=\"button\" class=\"btn btn-outline-danger btn-xs\" id=\"btnDelete_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ลบ \" (click)=\"onDelete('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-trash-alt\"></i></button>";
  viewButton = "<button type=\"button\" class=\"btn btn-outline-info btn-xs\" id=\"btnView_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดู\" (click)=\"onView('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-eye\"></i></button>";

  command = this.editButton+" "+this.deleteButton+" "+this.viewButton;
  rows=[
    {
      command: this.command,
      employeeCode: "9990005", 
      employeeName: "ชุมพฤนท์ ยุระยง", 
      Branch: '01HQ', 
      workFor: 'สาขาตัวเอง',
      Capability: 'N', 
      Assign: 'กิจธวัช ฤทธิ์ราวี', 
      Supervisor: 'กิจธวัช ฤทธิ์ราวี', 
      Line: '', 
      joinDate: '16-06-1987', 
      resignDate: '16-06-1987', 
    },
    
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
      {data:'employeeCode' ,'targets': [1],title: "Employee Code",className:'center',width:'80px'},
      {data:'employeeName' ,'targets': [2],title: "Employee Name",className:'left',width:'100px'},
      {data:'Branch' ,'targets': [3],title: "Branch",className:'center',width:'80px'},
      {data:'workFor' ,'targets': [4],title: "Work For",className:'center',width:'100px'},
      {data:'Capability' ,'targets': [5],title: "Capability",className:'center',width:'80px'},
      {data:'Assign' ,'targets': [6],title: "Assign",className:'left',width:'100px'},
      {data:'Supervisor' ,'targets': [7],title: "Supervisor",className:'left',width:'100px'},
      {data:'Line' ,'targets': [8],title: "Line",className:'center',width:'80px'},
      {data:'joinDate' ,'targets': [9],title: "Join Date",className:'center',width:'100px'},
      {data:'resignDate' ,'targets': [10],title: "Resign Date",className:'center',width:'100px'},
    ]
    };
    //this.dtOptions.drawCallback;
   
  }


  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/employee/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/employee/view'])
   
  }

  onNew() {
    console.log("ok");
    this.router.navigate(['/pages/employee/new'])
   
  }

  onDelete(){ 
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this information!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#112d4e',
      cancelButtonColor: '#ffc107',
      confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:10px;margin-right:10px">OK</a>',
      cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    }).then((result) => {  
      if (result.value) {  
        Swal.fire({
          title: 'Deleted!',
          text: 'Your information has been deleted.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#112d4e',
          //cancelButtonColor: '#ffc107',
          confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
          //cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
        }) 
        .then((result) => {
          if (result.value == true) {
            this.router.navigate(['/pages/employee/index'])
          } 
      }) 
      } 
    })  
  }  
}
