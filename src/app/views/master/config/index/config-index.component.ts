import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config-index',
  templateUrl: './config-index.component.html',
  styleUrls: ['./config-index.component.sass']
})
export class ConfigIndexComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  
  constructor(private router: Router) {}

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
        {'targets': [0],title: "",'orderable': false,className:'td center',width: "100px",},
        {'targets': [1],title: "Function",className:'td center', width: "150px",},
        {'targets': [2],title: "Name",className:'td center', width: "180px",},
        {'targets': [3],title: "Sequence",className:'td center', width: "80px",},
        {'targets': [4],title: "Value",className:'td center', width: "80px"},
        {'targets': [5],title: "Effective Date",className:'td center', width: "150px",},
        {'targets': [6],title: "Last Update",className:'td center', width: "150px",},
        {'targets': [7],title: "Update By",className:'td center', width: "150px",},
        {'targets': [8],title: "Status",className:'td center', width: "100px",render: function (data, type, row) {
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
    this.router.navigate(['/pages/config/new'])
   
  }
  onEdit() {
    console.log("ok");
    this.router.navigate(['/pages/config/edit'])
   
  }
  onView() {
    console.log("ok");
    this.router.navigate(['/pages/config/view'])
   
  }
 

}
