import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-warranty-edit',
  templateUrl: './warranty-edit.component.html',
  styleUrls: ['./warranty-edit.component.sass']
})
export class WarrantyEditComponent implements OnInit {

  
  constructor(private router: Router) { }
  date = new Date();
  today = new Date();

  ngOnInit(): void {
  }

  onBack() {
    console.log("ok");
    this.router.navigate(['/pages/warranty/warranty-index'])
   
  }
  onSave(){  
    Swal.fire({  
      title: 'Are you sure want to save?',  
      //text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonColor: '#112d4e',
      cancelButtonColor: '#ffc107',
      confirmButtonText: '<i class="vp-save-solid"></i><a style="margin-left:10px;margin-right:10px">Save</a>',
      cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    }).then((result) => {  
      if (result.value) {  
        Swal.fire({
          title: 'Saved!',
          text: 'Your information has been save.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#112d4e',
          //cancelButtonColor: '#ffc107',
          confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
          //cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
        })
        .then((result) => {
          if (result.value == true) {
            this.router.navigate(['/pages/warranty/warranty-index'])//.then(() => {
              //window.location.reload();
            //});
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

  onCancel() {
    Swal.fire({
      title: 'Are you sure want to cancel?',
      //text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#112d4e',
      cancelButtonColor: '#ffc107',
      confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
      cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    }).then((result) => {
      if (result.value == true) {
        this.router.navigate(['/pages/warranty/warranty-index'])//.then(() => {
          //window.location.reload();
        //});
      } else {
        $("#txtBasketCode").val('');
        $("#txtBasketName").val('');
        $("#txtCost").val('');
        $('input[name=StatusOptions]').prop("checked", false);
        $("input[name=StatusOptions][value='N']").prop("checked", false);

      }
      // if (result.value) {
      //   Swal.fire({
      //     title: 'Cancelled!',
      //     text: 'Your information file has been Cancelled.',
      //     icon: 'success',
      //     showCancelButton: false,
      //     confirmButtonColor: '#112d4e',
      //     //cancelButtonColor: '#ffc107',
      //     confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
      //     //cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
      //   })
      //     .then((result) => {
      //       if (result.value == true) {
      //         this.router.navigate(['/pages/warranty/warranty-index'])//.then(() => {
      //           //window.location.reload();
      //         //});
      //       } else {
      //         $("#txtBasketCode").val('');
      //         $("#txtBasketName").val('');
      //         $("#txtCost").val('');
      //         $('input[name=StatusOptions]').prop("checked", false);
      //         $("input[name=StatusOptions][value='N']").prop("checked", false);

      //       }
      //     })
      // }
    })
  }  
}
