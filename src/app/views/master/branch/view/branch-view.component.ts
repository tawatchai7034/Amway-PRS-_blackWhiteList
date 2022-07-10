import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branch-view',
  templateUrl: './branch-view.component.html',
  styleUrls: ['./branch-view.component.sass']
})
export class BranchViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClose() {
    console.log("ok");
    this.router.navigate(['/pages/branch/branch-index'])
  }
}
