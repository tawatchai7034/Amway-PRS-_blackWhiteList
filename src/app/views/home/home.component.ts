import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  imageSrc = 'assets/amway-icons/bg-amw-2.png';
  
  constructor(private router: Router) {}
  ngOnInit(): void {
  }
  back(): void {
    this.router.navigate(['/home'])
  }
}
