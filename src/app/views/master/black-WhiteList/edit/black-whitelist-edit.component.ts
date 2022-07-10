import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate-service/validate-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-black-whitelist-edit',
  templateUrl: './black-whitelist-edit.component.html',
  styleUrls: ['./black-whitelist-edit.component.sass']
})
export class BlackWhitelistEditComponent implements OnInit {

  formText = {
    'SKU' : '',
    'newSerial' : '',
    'recordDate' : '',
};
constructor(
  private router: Router,
  private validate: ValidateService,
  ) { }
  
  date = new Date();
  

  ngOnInit(): void {
  }

  onBack() {
    console.log("ok");
    this.router.navigate(['/pages/blackWhitelist'])
   
  }
  onSave(){
    let validateData = [
      {
        format: "text",
        header: "SKU",
        value: this.formText.SKU,
      },
      {
        format: "text",
        header: "New Serial",
        value: this.formText.newSerial,
      },
      {
        format: "text",
        header: "Record Date",
        value: this.formText.recordDate,
      },
    ];
    if (this.validate.checking(validateData)) {
      // this.onSave(); 
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
              this.router.navigate(['/pages/blackWhitelist'])//.then(() => {
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
        this.router.navigate(['/pages/blackWhitelist'])//.then(() => {
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
      //         this.router.navigate(['/pages/blackWhitelist'])//.then(() => {
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
