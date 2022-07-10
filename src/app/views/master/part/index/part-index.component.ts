import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-part-index',
  templateUrl: './part-index.component.html',
  styleUrls: ['./part-index.component.sass']
})
export class PartIndexComponent implements OnInit {

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
        {'targets': [0],title: "",'orderable': false,className:'td center',width: "70px",},
        {'targets': [1],title: "SKU",className:'td center', width: "50px",},
        {'targets': [2],title: "Name",className:'td left', width: "200px",},
        {'targets': [3],title: "Part Type",className:'td left', width: "80px",},
        {'targets': [4],title: "Warranty Preiod(Day)",className:'td center', width: "120px"},
        {'targets': [5],title: "Weight Part(g)",className:'td center', width: "80px",},
        {'targets': [6],title: "Counter",className:'td center', width: "50px",},
        {'targets': [7],title: "Maintenance",className:'td center', width: "50px",},
        {'targets': [8],title: "Old/New",className:'td center', width: "50px",},
        {'targets': [9],title: "Description",className:'td left', width: "50px",},
        {'targets': [10],title: "Status",className:'td center', width: "50px",render: function (data, type, row) {
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
    this.router.navigate(['/pages/part/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/part/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/part/view'])
   
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
            this.router.navigate(['/pages/part'])
          } 
      }) 
      } 
    })  
  }  

}
