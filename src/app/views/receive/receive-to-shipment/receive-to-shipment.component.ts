import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-receive-to-shipment',
  templateUrl: './receive-to-shipment.component.html',
  styleUrls: ['./receive-to-shipment.component.sass']
})
export class ReceiveToShipmentComponent implements OnInit {

  enKey = "0001";
  command = "<input type=\"checkbox\"id=\"chk_" +this.enKey+ "\" name=\"chk_\">";
  rows=[
    {command: this.command, no: "30123456", status: "รับเครื่องซ่อม", code: '2711647', name: 'นายทดสอบระบบ', sku: '100188',sendBy:'นาย ก',sendDate:'20/06/2022' },
    { command: this.command, no: "30123457", status: "รับเครื่องซ่อม", code: '2711647', name: 'นายทดสอบระบบ', sku: '100188' ,sendBy:'นาย ก',sendDate:'20/06/2022'},
    { command: this.command, no: "30123458", status: "รับเครื่องซ่อม", code: '2711647', name: 'นายทดสอบระบบ', sku: '100188' ,sendBy:'นาย ก',sendDate:'20/06/2022'},    
  ];
  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) { 
    console.log(this.rows);
  }
   
  ngOnInit(): void {
    
    this.dtOptions = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'300px',
      dom:'frtip',
      data:this.rows,
      order: [[1, "asc"]],
      columns: [
        {data:'command' ,title: "",'orderable': false,className:'dt-body-center',width: "10px",},
        {data:'no' ,title: "หมายเลขซ่อม",className:'dt-body-center', width: "100px",},
        {data:'status' ,title: "สถานะ", width: "80px",},
        {data:'sku' ,title: "SKU",className:'dt-body-center', width: "80px"},
        {data:'sendBy' ,title: "ผู้ส่งซ่อม", width: "200px",},
        {data:'sendDate',title: "วันที่ส่งซ่อม",className:'dt-body-center', width: "80px",},
        {data:'code' ,title: "รหัส นธอ.",className:'dt-body-center', width: "80px",},
        {data:'name' ,title: "ชื่อ-นามสกุล", width: "200px"},   
    ],
      
    };
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
            this.router.navigate(['/pages/counter/shopper-detail/'])//.then(() => {
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
    this.router.navigate(['/pages/counter'])
  }  
}
