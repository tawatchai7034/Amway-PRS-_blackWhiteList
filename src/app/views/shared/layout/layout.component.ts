import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'], 
})
export class LayoutComponent implements OnInit {
  imageSrc = 'assets/amway-icons/logo-3.png';
  buildDate = "15-06-2022";
  userFName ="คุณทดสอบระบบ";
  userLName ="ทดสอบระบบ";
  branch ="ขาย";
  countMessage ="15";

  constructor(private router: Router,private toastr: ToastrService,) {
        
      /*for(let i=0; i<1000;i++){
        ((ind)=>{  setTimeout(
          () => {
            this.toastr.show('<img src=\"assets/amway-icons/avatar3.png\" class=\"img-circle\" width=\"40\"height=\"40\" style=\"border-radius: 20%; display: block; margin: auto; \">&nbsp;<a class=\"text-dark\">ดำเนินการเรียบร้อยแล้ว<p><h6 style=\"font-size:5px\" class=\"text-dark text-right\">just now</h6></p></a>',
           'ข้อความถึงคุณ' ,{
                    enableHtml: true,
                    closeButton: true,
                    toastClass:"card-image-10",
                    
                });
          }, 300000*ind)})(i)
      }*/
     

     


  }
 

  

  ngOnInit(): void {
   
      
  }

  
  back(): void {
    this.router.navigate(['/home'])
  }

}
