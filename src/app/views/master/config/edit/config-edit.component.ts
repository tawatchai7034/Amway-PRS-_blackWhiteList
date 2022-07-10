import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config-edit',
  templateUrl: './config-edit.component.html',
  styleUrls: ['./config-edit.component.sass']
})
export class ConfigEditComponent implements OnInit {

  constructor(

    private router: Router,
    
    ) { }
  
    date = new Date();
    
  
    ngOnInit(): void {
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
                this.router.navigate(['/pages/config'])//.then(() => {
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
          this.router.navigate(['/pages/config'])//.then(() => {
           // window.location.reload();
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

}
