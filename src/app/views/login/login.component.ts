import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  imageSrc = 'assets/amway-icons/logo.png'

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl(['', Validators.required, Validators.minLength(5)]),
    
  });
  constructor(private router: Router) { 
    
  }
  togglePasswordFieldType(){

  }
  onSubmit() {
    console.log("ok");
    this.router.navigate(['/pages/home'])
    .then(() => {
      window.location.reload();
    });
  }
  ngOnInit(): void {
  }
  

}
