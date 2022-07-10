import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warranty-index',
  templateUrl: './warranty-index.component.html',
  styleUrls: ['./warranty-index.component.sass']
})
export class WarrantyIndexComponent implements OnInit {

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
        {'targets': [0],title: "",'orderable': false,className:'center',width: "70px",},
        {'targets': [1],title: "Serial No.",className:'left', width: "100px",},
        {'targets': [2],title: "SKU",className:'center', width: "100px",},
        {'targets': [3],title: "Branch",className:'center', width: "80px",},
        {'targets': [4],title: "Dist No.",className:'center', width: "80px"},
        {'targets': [5],title: "Dist Name",className:'left', width: "150px",},
        {'targets': [6],title: "Customer No.",className:'center', width: "50px",},
        {'targets': [7],title: "Customer Name",className:'left', width: "50px",},
        {'targets': [8],title: "AMC",className:'center', width: "50px",},
        {'targets': [9],title: "Order Date",className:'center', width: "50px",}, 
        {'targets': [10],title: "Satisfy Expiry Date",className:'center', width: "50px",}, 
        {'targets': [11],title: "Warranty Expiry Date",className:'center', width: "50px",}, 
        {'targets': [12],title: "Warranty Card Date",className:'center', width: "50px",}, 
        {'targets': [13],title: "Actual Warranty Expiry Date",className:'center', width: "50px",}, 
      //   {'targets': [10],title: "Status",className:'center', width: "50px",render: function (data, type, row) {
      //     var color = 'black';
      //     if (data == "Deleted") {
      //       color = 'red';
      //   }
      //     return '<span style="color:' + color + '">' + data + '</span>';
      // }}, 

    ]
    };
    //this.dtOptions.drawCallback;
   
  }

  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/warranty/warranty-edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/warranty/warranty-view'])
   
  }

  onNew() {
    console.log("ok");
    this.router.navigate(['/pages/warranty/warranty-new'])
   
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
            this.router.navigate(['/pages/warranty/warranty-index'])
          } 
      }) 
      } 
    })  
  }  


}
