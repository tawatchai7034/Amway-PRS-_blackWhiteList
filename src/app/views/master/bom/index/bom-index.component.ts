import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-bom-index',
  templateUrl: './bom-index.component.html',
  styleUrls: ['./bom-index.component.sass']
})
export class BomIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
    
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = { 
      pagingType: 'full_numbers', 
      scrollCollapse:false,
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'400px',
      autoWidth:true,
      dom:'frtip',
      order: [[1, "asc"]],  
      'columnDefs': 
      [
        {'targets': [0],title: "",'orderable': false,className:'center',width: "70px",},
        {'targets': [1],title: "SKU",className:'center', width: "50px",},
        {'targets': [2],title: "Child SKU",className:'right', width: "400px",},
        {'targets': [3],title: "Description",className:'left', width: "120px",},
        {'targets': [4],title: "Qty",className:'center', width: "80px"},
        {'targets': [5],title: "Effective Start Date",className:'center', width: "120px"},
        {'targets': [6],title: "Effective End Date",className:'center', width: "120px"},
        {'targets': [7],title: "Status",className:'center', width: "50px",render: function (data, type, row) {
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
    this.router.navigate(['/pages/bom/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/bom/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/bom/view'])
   
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
            this.router.navigate(['/pages/bom'])
          } else {
              $("#txtBasketCode").val('');
              $("#txtBasketName").val('');
              $("#txtCost").val('');
              $('input[name=StatusOptions]').prop("checked", false);
              $("input[name=StatusOptions][value='N']").prop("checked", false);

          }
      }) 
      } 
    })  
  }  


}
