import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaultInfo } from 'src/app/models/fault';
import { FaultService } from 'src/app/services/fault-service/fault.service';
import Swal from 'sweetalert2';  

/*var enKey = "0001";
var xxx="<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" title=\"แก้ไข\" (click)=\"onEdit()\"><i class=\"vp-edit-solid\"></i></button>";
    var editButton = "<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" id=\"btnEdit_" + enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"แก้ไข\" (click)=\"onEdit('" + enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-edit-solid\"></i></button>";
    var deleteButton = "<button type=\"button\" class=\"btn btn-outline-danger btn-xs\" id=\"btnDel_" + enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ลบ\" (click)=\"onDelete('" + enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-trash-alt\"></i></button>";
    var viewButton = "<button type=\"button\" class=\"btn btn-outline-info btn-xs\" id=\"btnView_" + enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดู\" (click)=\"onView('" + enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-eye\"></i></button>";

    var command = editButton + " " + deleteButton + " " + viewButton;

    const Fault_Data: FaultInfo[] = [
        {command: command, sku: "0001", code: "0001", name: 'Name1', cost: 1.0079, status: 'Active' },
        { command: command, sku: "0002", code: "0002", name: 'Name2', cost: 4.0026, status: 'Active' },
        { command: command, sku: "0003", code: "0003", name: 'Name3', cost: 6.941, status: 'Active' },
        { command: command, sku: "0004", code: "0004", name: 'Name4', cost: 9.0122, status: 'Active' },
        { command: command, sku: "0005", code: "0005", name: 'Name5', cost: 10.811, status: 'Active' },
        { command: command, sku: "0006", code: "0006", name: 'Name6', cost: 12.0107, status: 'Active' },
        { command: command, sku: "0007", code: "0007", name: 'Name7', cost: 14.0067, status: 'Active' },
        { command: command, sku: "0008", code: "0008", name: 'Name8', cost: 15.9994, status: 'Active' },
        { command: command, sku: "0009", code: "0009", name: 'Name9', cost: 18.9984, status: 'Deleted' },
        { command: command, sku: "0010", code: "0010", name: 'Name10', cost: 20.1797, status: 'Active' },
    ];*/

@Component({
  selector: 'app-fault-index',
  templateUrl: './fault-index.component.html',
  styleUrls: ['./fault-index.component.sass']
})
export class FaultIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
    
  constructor(private router: Router,private Fservice:FaultService) {
   
    
  }
  //dataSource = Fault_Data;
  
 

  /*ngOnInit(): void {
    this.dtOptions = { 
      pagingType: 'full_numbers', 
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'400px',
      dom:'ftip',
      order: [[1, "asc"]],
      //data:this.dataSource,
      'columnDefs': 
      [
        {data:'command' ,'targets': [0],title: "",'orderable': false,className:'center',width: "50px",},
        {data:'sku' ,'targets': [1],title: "SKU",className:'center', width: "100px",},
        {data:'code' ,'targets': [2],title: "Fault Code",className:'center', width: "100px",},
        {data:'name' ,'targets': [3],title: "Fault Name",className:'left', width: "400px",},
        {data:'cost' ,'targets': [4],title: "Estimate Cost",className:'center', width: "100px",},
        {data:'status' ,'targets': [5],title: "Status",className:'center', width: "150px",render: function (data, type, row) {
          var color = 'black';
          if (data == "Deleted") {
            color = 'red';
        }
          return '<span style="color:' + color + '">' + data + '</span>';
      }}, 
    ]
    };
    //this.dtOptions.drawCallback;
   
  }*/

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
        {'targets': [0],title: "",'orderable': false,className:'center',width: "70px",},
        {'targets': [1],title: "SKU",className:'center', width: "50px",},
        {'targets': [2],title: "Fault Code",className:'left', width: "200px",},
        {'targets': [3],title: "Fault Name",className:'left', width: "80px",},
        {'targets': [4],title: "Estimate Cost",className:'center', width: "120px"},
        {'targets': [5],title: "Status",className:'center', width: "50px",render: function (data, type, row) {
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
    this.router.navigate(['/pages/fault/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/fault/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/fault/view'])
   
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
            this.router.navigate(['/pages/fault'])
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
