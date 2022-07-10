import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidateService } from 'src/app/services/validate-service/validate-service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inhome-new',
  templateUrl: './inhome-new.component.html',
  styleUrls: ['./inhome-new.component.sass']
})
export class InhomeNewComponent implements OnInit {


  formText = {
      'nameContact' : '',
      'contactNo' : '',
      'postCode' : '',
      'userName' : '',
      'userNo' : '',
      'initialSymp' : '',
      'replyDate' : new Date 
  };


  constructor(
    private router: Router,
    private validate: ValidateService,
    ) { }
    
  date = new Date()
  today = new Date();
 

  ngOnInit(): void {

  }

  onBack() {
    console.log("ok");
    this.router.navigate(['/pages/inHomeService'])
   
  }

  
  onSave(){
    let validateData = [
      {
        format: "text",
        header: "ชื่อ-นามสกุล(ติดต่อ)",
        value: this.formText.nameContact,
      },
      {
        format: "text",
        header: "เบอร์โทร",
        value: this.formText.contactNo,
      },
      {
        format: "text",
        header: "ชื่อ-นามสกุล(ใช้เครื่อง)",
        value: this.formText.userName,
      },
      {
        format: "text",
        header: "เบอร์โทร",
        value: this.formText.userNo,
      },
      {
        format: "text",
        header: "อาการเบื้องต้น",
        value: this.formText.initialSymp,
      },
      {
        format: "text",
        header: "รหัสไปรษณีย์",
        value: this.formText.postCode,
      },
      {
        format: "text",
        header: "วัน-เวลาที่สะดวกติดต่อกลับ",
        value: this.formText.replyDate 
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
              this.router.navigate(['/pages/inhomeService'])//.then(() => {
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
    console.log('1',this.formText.nameContact),
      console.log('2',this.formText.contactNo),
      console.log('3',this.formText.userName),
      console.log('4',this.formText.userNo),
      console.log('5',this.formText.initialSymp),
      console.log('6',this.formText.postCode),
      console.log('7',this.formText.replyDate);
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
        this.router.navigate(['/pages/inhomeService'])//.then(() => {
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
      //         this.router.navigate(['/pages/inhomeService'])//.then(() => {
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

// export interface formText{
//       'nameContact' : string,
//       'contactNo' : string,
//       'postCode' : string,
//       'userName' : string,
//       'userNo' : string,
//       'initialSymp' : string,
//       'replyDate' : string,
// }