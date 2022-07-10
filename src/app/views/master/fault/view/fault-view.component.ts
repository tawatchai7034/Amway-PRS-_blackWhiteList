import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  
import {MatDialog} from '@angular/material/dialog';
import { NewModalComponent } from '../new_modal/new-modal.component';
import { NgxSpinnerService } from "ngx-spinner";
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-fault-view',
  templateUrl: './fault-view.component.html',
  styleUrls: ['./fault-view.component.sass']
})
export class FaultViewComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  title = 'matDialog';
  constructor(private router: Router,public dialog: MatDialog,private spinner: NgxSpinnerService) { 
   
  }
  
  

  openDialog() {
    const dialogRef = this.dialog.open(NewModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

 
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
        {data:"SKU",'targets': [0],title: "Part SKU",className:'center', width: "100px",},
        {data:"manMinute",'targets': [1],title: "Man-Minute",className:'center', width: "80px",},
        {data:"Qty",'targets': [2],title: "Qty",className:'center', width: "120px",},
        {data:"Cost",'targets': [3],title: "Cost",className:'center', width: "80px",},
        {data:"Start",'targets': [4],title: "Effective Start",className:'center', width: "50px",},
        {data:"End",'targets': [5],title: "Effective End",className:'center', width: "50px",},
        {data:"des",'targets': [6],title: "Description",className:'left', width: "208px",}, 
    ]
    };
    //this.dtOptions.drawCallback;
   
  }

  onBack() {
    console.log("ok");
    this.router.navigate(['/pages/fault'])
   
  }
  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/fault'])
   
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
      this.spinner.show();
      if (result.value) { 
        console.log('Call Api'); 
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
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
              this.router.navigate(['/pages/fault'])//.then(() => {
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
        }, 1000);    
      }
      else{
        this.spinner.hide();
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
      if (result.value) {
        Swal.fire({
          title: 'Cancelled!',
          text: 'Your information file has been Cancelled.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#112d4e',
          //cancelButtonColor: '#ffc107',
          confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
          //cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
        })
          .then((result) => {
            if (result.value == true) {
              this.router.navigate(['/pages/fault'])//.then(() => {
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
    })
  }  

  onNew() {
    console.log("ok");
    this.router.navigate(['/pages/part/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/part/edit'])
   
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
