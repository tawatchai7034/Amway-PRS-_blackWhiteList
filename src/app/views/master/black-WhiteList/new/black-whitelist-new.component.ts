import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate-service/validate-service';
import Swal from 'sweetalert2';
import { FormGroup,FormBuilder } from '@angular/forms';
import { BlackWhiteServicesService } from './../../../../services/blackWhite-service/black-white-services.service';
import { GlobalVariable } from 'src/app/models/globalParameter';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-black-whitelist-new',
  templateUrl: './black-whitelist-new.component.html',
  styleUrls: ['./black-whitelist-new.component.sass']
})
export class BlackWhitelistNewComponent implements OnInit {
  userName = GlobalVariable.userFName +'  '+ GlobalVariable.userLName;

  addBlackWhiteForm : FormGroup;

  formText = {
    'sku' : '',
    'serialNoNew' : '',
    'recordDate' : '',
};
constructor(
  public formBuilder:FormBuilder,
  public datepipe: DatePipe,
  private router: Router,
  private validate: ValidateService,
  private blackWhiteService: BlackWhiteServicesService,
  ) { 
    this.addBlackWhiteForm = this.formBuilder.group({
      receiveNo:[''],
      sku:[''],
      serialNoNew:[''],
      serialNoOld:[''],
      type:[''],
      recordDate:[''],
      status:[''],
    })
  }

  date = new Date();
  

  ngOnInit(): void {
  }

  onBack() {
    console.log("ok");
    this.router.navigate(['/pages/blackWhitelist'])
   
  }

  onSave(){
    // console.log(this.addBlackWhiteForm.value);
    let date = this.datepipe.transform(this.addBlackWhiteForm.value.recordDate, 'dd/MM/yyyy');
    let recordDate = date!.toString();


    let validateData = [
      {
        format: "text",
        header: "SKU",
        value: this.formText.sku,
      },
      {
        format: "text",
        header: "New Serial",
        value: this.formText.serialNoNew,
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
          this.blackWhiteService.AddBlackWhite({
            receiveNo: this.addBlackWhiteForm.value.receiveNo,
            sku: this.addBlackWhiteForm.value.sku,
            serialNoNew: this.addBlackWhiteForm.value.serialNoNew,
            serialNoOld: this.addBlackWhiteForm.value.serialNoOld,
            type: this.addBlackWhiteForm.value.type,
            recordDate: recordDate,
            status: this.addBlackWhiteForm.value.status,
            createBy: this.userName
          }).subscribe((res) => {console.log(res);});

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
         // window.location.reload();
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
      //          // window.location.reload();
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
