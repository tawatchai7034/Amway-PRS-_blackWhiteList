import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhome-index',
  templateUrl: './inhome-index.component.html',
  styleUrls: ['./inhome-index.component.sass']
})
export class InhomeIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  constructor(private router: Router) {}
  date = new Date();
  today = new Date();

  ngOnInit(): void {
    this.dtOptions = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'400px',
      dom:'frtip',
      order: [[1, "asc"]],
      'columnDefs': 
      [
        {'targets': [0],title: "",'orderable': false,className:'td center',width: "150px",},
        {'targets': [1],title: "วันที่แจ้งซ่อม",className:'td center', width: "50px",},
        {'targets': [2],title: "Status",className:'td center', width: "80px",},
        {'targets': [3],title: "สะดวกติดต่อกลับ",className:'td center', width: "120px"},
        {'targets': [4],title: "สะดวกติดต่อรับบริการ",className:'td center', width: "80px",},
        {'targets': [5],title: "Serial No.",className:'td center', width: "50px",},
        {'targets': [6],title: "SKU",className:'td center', width: "50px",},
        {'targets': [7],title: "รหัสสมาชิก(ผู้ติดต่อ)",className:'td center', width: "50px",},
        {'targets': [8],title: "ชื่อ-นามสกุล(ผู้ติดต่อ)",className:'td left', width: "100px",},
        {'targets': [9],title: "โทรศัพท์(ผู้ติดต่อ)",className:'td center', width: "50px",},
        {'targets': [10],title: "รหัสสมาชิก(ใช้เครื่อง)",className:'td center', width: "50px",},
        {'targets': [11],title: "ชื่อ-นามสกุล(ใช้เครื่อง)",className:'td left', width: "100px",},
        {'targets': [12],title: "โทรศัพท์(ใช้เครื่อง)",className:'td center', width: "50px",},
        {'targets': [13],title: "Call Center",className:'td left', width: "50px",},
        {'targets': [14],title: "ช่างที่รับงาน",className:'td left', width: "50px",},
        {'targets': [15],title: "Receive No.",className:'td center', width: "50px",},
        {'targets': [16],title: "หมายเหตุ",className:'td left', width: "200px",},
    ]
    };
    //this.dtOptions.drawCallback;
   
  }
  onNew() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService/view'])
   
  }

  onService() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService/service'])
   
  }

  onSurvey() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService/survey'])
   
  }

  onCancel() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService/cancel'])
   
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
            this.router.navigate(['/pages/inhomeService'])
          } 
      }) 
      } 
    })  
  }  

}
