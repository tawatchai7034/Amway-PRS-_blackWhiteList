import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrow-index',
  templateUrl: './borrow-index.component.html',
  styleUrls: ['./borrow-index.component.sass']
})
export class BorrowIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { }

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
        {'targets': [0],title: "",'orderable': false,className:'td center',width: "80px",},
        {'targets': [1],title: "Branch",className:'td center', width: "80px",},
        {'targets': [2],title: "SKU",className:'td center', width: "200px",},
        {'targets': [3],title: "Serial No.",className:'td left', width: "200px",},
        {'targets': [4],title: "Last Receive No.",className:'td center', width: "120px"},
        {'targets': [5],title: "Receive No.",className:'td center', width: "80px",},
        {'targets': [6],title: "Last Return Date Time",className:'td center', width: "50px",},
        {'targets': [7],title: "Availability",className:'td center', width: "50px",},
        {'targets': [8],title: "Status",className:'td center', width: "60px",render: function (data, type, row) {
          var color = 'black';
          if (data == "Deleted") {
            color = 'red';
        }
          return '<span style="color:' + color + '">' + data + '</span>';
      }}, 
    ]
    };
    //this.dtOptions.drawCallback;
   
  }
  onNew() {
    console.log("ok");
    this.router.navigate(['/pages/borrow/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/borrow/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/borrow/view'])
   
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
            this.router.navigate(['/pages/borrow'])
          } 
      }) 
      } 
    })  
  }  

}
