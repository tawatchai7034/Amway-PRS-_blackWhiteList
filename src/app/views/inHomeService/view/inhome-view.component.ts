import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inhome-view',
  templateUrl: './inhome-view.component.html',
  styleUrls: ['./inhome-view.component.sass']
})
export class InhomeViewComponent implements OnInit {

  constructor(private router: Router) { }

  date = new Date();
  today = new Date();

  ngOnInit(): void {
  }

  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/inhomeService'])
  }

  onWork(){
    //รอดูว่ากดปุ่มประวัติการทำงานแล้วจะเด้งไปหน้าไหน
  }
}
