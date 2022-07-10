import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.sass']
})
export class EmployeeViewComponent implements OnInit {

  dtOptions: DataTables.Settings = {};

  constructor(private router: Router) { }

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
        {data:"command",'targets': [0],title: "",'orderable': false,className:'center',width: "10%",},
        {data:"permisionName",'targets': [1],title: "Permision Name",className:'left', width: "38%",},
        {data:"remark",'targets': [2],title: "Remark",className:'left', width: "42%",},
        {data:"deleteStatus",'targets': [3],title: "Delete Status",className:'center', width: "10%",},
    ]
    };
    this.dtOptions.drawCallback;
   
  }

  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/employee'])
  }
}
