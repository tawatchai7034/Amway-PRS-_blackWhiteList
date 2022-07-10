import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-maintenance-repair',
  templateUrl: './maintenance-repair.component.html',
  styleUrls: ['./maintenance-repair.component.sass']
})
export class MaintenanceRepairComponent implements OnInit {
  enKey = "0001";
  command = "<button type=\"button\" class=\"btn btn-outline-danger btn-xs\" id=\"btnDel_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ลบ\" (click)=\"onDelete('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-trash-alt\"></i></button>";
  rows=[
    {command: this.command, 
      DefactCode: "0008<br/>Undefine Lamp error", 
      Part: "100186<br/>ชุดใส้กรองคาร์บอน+หลอดอุล", 
      OldSN: '12345678901234567890', 
      NewSN: '98765432109876543210', 
      Charge: 'ใช่',
      Price:'4840',
      Qty:'1',
      Amount:'4840'
    },
    {command: this.command, 
      DefactCode: "0008<br/>Undefine Lamp error", 
      Part: "100186<br/>ชุดใส้กรองคาร์บอน+หลอดอุล", 
      OldSN: '12345678901234567890', 
      NewSN: '98765432109876543210', 
      Charge: 'ไม่',
      Price:'0.00',
      Qty:'1',
      Amount:'0.00'
    },
  ];
  _amount ='4,840.00';
  _receiveNo ="3022060001";
  _customerName ="คุณทดสอบระบบ ไม่ต้องจัดของ";
  _customertel ="0819990000";
  _total ="1,250.00";

  dtOptions: DataTables.Settings = {};
  dttab2: DataTables.Settings = {};
  dt2tab2: DataTables.Settings = {};
  dttab3: DataTables.Settings = {};
  dttab4: DataTables.Settings = {};

  dt2Data=[
    {command: this.command, 
      No: "1", 
      Date: "29-06-2022",
      ReceiveNo:"3022060001",
      OrderDate: "3049",
      RepairDate: "159",
      CustomerType:"ลูกค้าปกติ",
    }, 
  ];
  dt2Data2=[
    {command: this.command, 
      No: "1", 
      Topic: "รออนุมัติ",
      RequestDate:"29-06-2022",
      RequestBy: "นายทดสอบระบบ ไม่ต้องจัดของ",
      RepairDate: "29-06-2022",
      ApproveBy:"นาย ก นามสมมติ",
      ApproveDate:"29-06-2022",
      Status:"อนุมัติ",
      Remark:"หมายเหตุ",
    }, 
  ];
  // dt3Data=[
  //   { 
  //     Equipment: "<input type=\"checkbox\"id=\"chk_" +this.enKey+ "\" name=\"chk_\" checked disabled> &nbsp;ชุดใส้กรองคาร์บอน+หลอดอุล", 
  //     SerialNo: "<input type=\"textbox\"id=\"serialNo_" +this.enKey+ "\" name=\"serialNo_\" class=\"form-control\" value=\"1234567890\" readonly>",
  //     Breakdown:"<div class=\"row form-inline\" style=\"padding-left: 5px; text-align:center\"><input type=\"radio\" name=\"rdoType\" checked disabled>&nbsp;ชำรุด&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"rdoType\" disabled>&nbsp;ไม่ชำรุด</div>",
  //     Yellow: "<div class=\"row form-inline\" style=\"padding-left: 5px; text-align:center\"><input type=\"radio\" name=\"rdoYellow\" checked disabled>&nbsp;เหลือง&nbsp;&nbsp;&nbsp;<input type=\"radio\" name=\"rdoYellow\" disabled>&nbsp;ไม่เหลือง</div>",
  //     Remark: "<input type=\"textbox\"id=\"serialNo_" +this.enKey+ "\" name=\"serialNo_\" class=\"form-control\" value=\"\" readonly>",
  //   }, 
  // ];
  dt3Data=[
    { 
      Equipment: "<input type=\"checkbox\"id=\"chk_" +this.enKey+ "\" name=\"chk_\" checked disabled> &nbsp;ชุดใส้กรองคาร์บอน+หลอดอุล", 
      SerialNo: "1234567890",
      Breakdown:"ไม่ชำรุด",
      Yellow: "ไม่เหลือง",
      Remark: "",
    }, 
  ];
  
  constructor(private router: Router) {}
 
  description: any[] = [
    {
      "name": "ควรเสียบปลั๊กไว้ตลอดเพื่อนับอายุการใช้งานถูกต้อง"
    },
    {
      "name": "ควรเปลี่ยนชุดใส้กรองเมื่อครบ 1 ปี หรือ 5 พันลิตรแล้วแต่กำหนดไหนถึงก่อน "
    },
    {
      "name": "เพื่อความสะอาดของน้ำดื่มควรเปลี่ยนสายน้ำทุก 2 ปี"
    },
    {
      "name": "ไม่แนะนำให้ใช้เครื่องกรองน้ำกับแหล่งน้ำบาดาล"
    },
    {
      "name": "หลีกเลี่ยงการวางเครื่องใกล้ความร้อนต่างๆ"
    },
    {
      "name": "กรุณาส่งใบรับประกันเพื่อรักษาสิทธิ์"
    }
  ];

  defect: any[] = [
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },

    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
    {
      "code": "E001:หน้าจอไม่ทำงาน - Adapter ชำรุด",
      "name": "ESP IN SERV : ค่าบริการซ่อม eSpring",
      "price": "300.00",
      "remark": ""
    },
  ];
  

  ngOnInit(): void {
    this.dtOptions = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'300px',
      "ordering": false,
      dom:'rt',      
      autoWidth:false,
      scrollCollapse: true, 
      data:this.rows,
      columns: [
        {data:'command',title: '',className:'dt-body-center',width: "10px",},
        {data:'DefactCode' ,title: "Defect Code",className:'dt-body-left', width: "160px"},
        {data:'Part' ,title: "Part",className:'dt-body-left', width: "160px"},
        {data:'OldSN' ,title: "OLD S/N",className:'dt-body-center', width: "120px"},
        {data:'NewSN' ,title: "NEW S/N",className:'dt-body-center', width: "120px"},
        {data:'Charge' ,title: "Charge",className:'dt-body-center', width: "50px"
        ,render: function (data) {
          var color = 'green';
          if (data == "ไม่") {
            color = 'red';
        }
          return '<span style="color:' + color + '">' + data + '</span>';
      }
      },
        {data:'Price' ,title: "Price",className:'dt-body-right', width: "50px"},
        {data:'Qty' ,title: "Qty",className:'dt-body-center', width: "50px"},
        {data:'Amount',title: "Amount",className:'dt-body-right', width: "50px"},     
    ],
    };


    this.dttab2 = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      pageLength:10,
      "ordering": false,
      dom:'frtip',      
      autoWidth:false,
      scrollCollapse: true, 
      data:this.dt2Data,
      columns: [
        {data:'No' ,title: "No.",className:'dt-body-center', width: "20px"},
        {data:'Date' ,title: "วันที่เปิดใบรับซ่อม",className:'dt-body-center', width: "200px"},
        {data:'ReceiveNo' ,title: "เลขที่ใบรับซ่อม",className:'dt-body-center', width: "200px"},
        {data:'OrderDate' ,title: "ห่างจากวันที่ซื้อ",className:'dt-body-center', width: "180px"},
        {data:'RepairDate' ,title: "ห่างจากวันที่ซ่อมครั้งล่าสุด",className:'dt-body-center', width: "200px"},
        {data:'CustomerType' ,title: "ประเภทของ Case",className:'dt-body-center', width: "200px"}, 
    ], 
    };


    this.dt2tab2 = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      pageLength:5,
      "ordering": false,
      dom:'frtip',      
      autoWidth:false,
      scrollCollapse: true, 
      data:this.dt2Data2,
      columns: [
        {data:'No' ,title: "ลำดับ",className:'dt-body-center', width: "20px"},
        {data:'Topic' ,title: "หัวข้อ",className:'dt-body-center', width: "100px"},
        {data:'RequestDate' ,title: "วันเวลาขอ",className:'dt-body-center', width: "100px"},
        {data:'RequestBy' ,title: "ผู้ขออนุมัติ",className:'dt-body-left', width: "200px"},
        {data:'ApproveBy' ,title: "ผู้อนุมัติ",className:'dt-body-left', width: "200px"},
        {data:'ApproveDate' ,title: "วันเวลาอนุมัติ",className:'dt-body-center', width: "100px"}, 
        {data:'Status' ,title: "สถานะ",className:'dt-body-center', width: "100px"
        ,render: function (data) {
          var color = 'green';
          if (data == "ไม่อนุมัติ") {
            color = 'red';
        }
          return '<span class="text-bold" style="color:' + color + '">' + data + '</span>';
      }},
        {data:'Remark' ,title: "หมายเหตุ",className:'dt-body-center', width: "120px"},  
    ], 
    };

    this.dttab3 = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false, 
      //scrollX:true,
      //scrollY:'300px',
      "ordering": false,
      dom:'rt',      
      autoWidth:false,
     paging:false,
      //order: [[1, "asc"]],
      data:this.defect,
      columns: [
        {data:'code' ,title: "Defect Code",className:'dt-body-left', width: "30%"},
        {data:'name' ,title: "หมายเลข/ชื่ออะไหล่",className:'dt-body-left', width: "30%"},
        {data:'price' ,title: "ราคา",className:'dt-body-right', width: "10%"}, 
        {data:'remark' ,title: "หมายเหตุ",className:'dt-body-center', width: "25%"},  
    ],};

    this.dttab4 = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      pageLength:100,
      "ordering": false,
      dom:'frtp',      
      autoWidth:false,
      scrollCollapse: true,
      paging:false, 
      data:this.dt3Data,
      columns: [
        {data:'Equipment' ,title: "อุปกรณ์",className:'dt-body-left', width: "250px"},
        {data:'SerialNo' ,title: "หมายเลขเครื่อง (Serial No.)",className:'dt-body-center', width: "180px"},
        {data:'Breakdown' ,title: "การชำรุด",className:'dt-body-center', width: "150px"},
        {data:'Yellow' ,title: "อาการเหลือง",className:'dt-body-center', width: "150px"},
        {data:'Remark' ,title: "หมายเหตุ",className:'dt-body-center', width: "200px"},  
    ], 
    };

  }
  onComplete(){  
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
          text: 'Service Complete.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#112d4e',
          //cancelButtonColor: '#ffc107',
          confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
          //cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
        })
        .then((result) => {
          if (result.value == true) {
            this.router.navigate(['/pages/maintenance'])
          } else {
              console.log("error");

          }
      }) 
      }
    })  
  }

  onNew(){
    console.log("New OK");  
  }
  // onBack(){
  //   this.router.navigate(['/pages/maintenance']).then(() => {
  //     window.location.reload();
  //   });
  // }
  onBack(){
    this.router.navigate(['/pages/maintenance'])
  }
  onClose() {
    console.log("Close");
    this.router.navigate(['/pages/maintenance'])
  }
}
