import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-permission-index',
  templateUrl: './permission-index.component.html',
  styleUrls: ['./permission-index.component.sass']
})
export class PermissionIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  constructor(private router: Router) {}

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
        {'targets': [0],title: "",'orderable': false,className:'center',width: "50px",},
        {'targets': [1],title: "Permission",className:'left', width: "350px",},
        {'targets': [2],title: "Status",className:'center', width: "50px",render: function (data, type, row) {
          var color = 'black';
          if (data == "Deleted") {
            color = 'red';
        }
          return '<span style="color:' + color + '">' + data + '</span>';
      }}, 
      {'targets': [3],title: "Deleted",className:'center', width: "50px",},
    ]
    };
    //this.dtOptions.drawCallback;
   
  }
  onNew() {
    console.log("ok");
    this.router.navigate(['/pages/permission/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/permission/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/permission/view'])
   
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
            this.router.navigate(['/pages/permission'])
          } 
      }) 
      } 
    })  
  }  

}
