import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.sass']
})
export class NewModalComponent implements OnInit {
  constructor(public dialog: MatDialog ) {}
  
  bsValue = new Date();

  ngOnInit(): void {
  }
  onClose(): void {  
    const dialogRef = this.dialog.closeAll();
  }

}
