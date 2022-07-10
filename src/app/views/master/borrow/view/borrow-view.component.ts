import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrow-view',
  templateUrl: './borrow-view.component.html',
  styleUrls: ['./borrow-view.component.sass']
})
export class BorrowViewComponent implements OnInit {

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
        {data:"command",'targets': [0],title: "",'orderable': false,className:'center',width: "70px",},
        {data:"serialSKU",'targets': [1],title: "SKU",className:'left', width: "100px",},
        {data:"partName",'targets': [2],title: "Name",className:'center', width: "80px",},
        {data:"partSerial",'targets': [3],title: "Serial No.",className:'left', width: "120px",},
        {data:"Description",'targets': [4],title: "Description",className:'center', width: "80px",},
        {data:"Damage",'targets': [5],title: "Damage",className:'center', width: "50px",},
        {data:"Yellow",'targets': [6],title: "Yellow",className:'center', width: "50px",},
         
    ]
    };
    //this.dtOptions.drawCallback;
   
  }

  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/borrow'])
  }

  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/borrow/edit'])
   
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
