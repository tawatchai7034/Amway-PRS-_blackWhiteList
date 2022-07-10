import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-branch-index',
  templateUrl: './branch-index.component.html',
  styleUrls: ['./branch-index.component.sass']
})
export class BranchIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor(private router: Router) { }

  enKey = "0001";
  editButton = "<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" id=\"btnEdit_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"แก้ไข\" (click)=\"onEdit('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-edit-solid\"></i></button>";
  viewButton = "<button type=\"button\" class=\"btn btn-outline-info btn-xs\" id=\"btnView_" + this.enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดู\" (click)=\"onView('" + this.enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-eye\"></i></button>";

  command = this.editButton+" "+this.viewButton;
  rows=[
    {
      command: this.command,
      branchCode: "01HQ", 
      branchName: "สำนักงานใหญ่", 
      Tel: '02-398-5672', 
      Fax: '02-398-5672',
      Region: 'B', 
      suggestedRepairCenter: '30B2', 
      Division: '0', 
      Receive: 'N', 
      Repair: 'N', 
      Status: 'Active', 
    },
    
  ];

  ngOnInit(): void {
    this.dtOptions = { 
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'400px',
      dom:'frtip',
      data:this.rows,
      order: [[1, "asc"]],
      'columnDefs':
      [
        {data:'command' ,'targets': [0],title: "",className:'center','orderable': false,width:'100px'},
        {data:'branchCode' ,'targets': [1],title: "Branch Code",className:'center', width: "50px",},
        {data:'branchName' ,'targets': [2],title: "Branch Name",className:'left', width: "200px",},
        {data:'Tel' ,'targets': [3],title: "Tel",className:'center', width: "80px",},
        {data:'Fax' ,'targets': [4],title: "Fax",className:'center', width: "120px"},
        {data:'Region' ,'targets': [5],title: "Region",className:'center', width: "50px",},
        {data:'suggestedRepairCenter' ,'targets': [6],title: "Suggested Repair Center",className:'center', width: "50px",},
        {data:'Division' ,'targets': [7],title: "Division",className:'center', width: "50px",},
        {data:'Receive' ,'targets': [8],title: "Receive",className:'center', width: "50px",},
        {data:'Repair' ,'targets': [9],title: "Repair",className:'center', width: "50px",}, 
        {data:'Status' ,'targets': [10],title: "Status",className:'center', width: "50px",render: function (data, type, row) {
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

  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/branch/branch-edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/branch/branch-view'])
   
  }


}
