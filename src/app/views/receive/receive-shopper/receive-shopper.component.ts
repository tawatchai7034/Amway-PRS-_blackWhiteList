import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receive-shopper',
  templateUrl: './receive-shopper.component.html',
  styleUrls: ['./receive-shopper.component.sass']
})
export class ReceiveShopperComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',   
      processing: true,
      searching:false,
      scrollX:true,
      scrollY:'200px',
      dom:'frtip',
      order: [[0, "asc"]],
      'columnDefs': 
      [
        {'targets': [0],title: "No",className:'center',width:'15px'},
        {'targets': [1],title: "SKU",className:'center',width:'100px'},
        {'targets': [2],title: "Part Name",className:'left',width:'514px'},
        {'targets': [3],title: "Serial No",className:'left',width:'514px'},
        {'targets': [4],title: "Repair Update",className:'center',width:'150px'},
        {'targets': [5],title: "Expire Date",className:'center',width:'150px'},
      ]    
    };
  }
  confirmReceive() {
    console.log("ok");
    this.router.navigate(['/pages/counter/shopper-detail'])
   
  }

}
