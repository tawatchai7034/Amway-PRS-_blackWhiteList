import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Injectable()
export class ValidateService {
  constructor(
    private toastr: ToastrService
  ) { }

  public checking(data: any) {
    for (let index = 0; index < data.length; index++) {
      let checkVal = true;
      if (data[index].value !== null && data[index].value.toString().trim().length !== 0) {
        if (data[index].format === 'number') {
          const regExp = /^[0-9]*$/;
          if (!regExp.test(String(data[index].value).toLowerCase()) || !data[index].value) {
            checkVal = false;
          }
        } else if (data[index].format === 'email') {
          const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!regExp.test(String(data[index].value).toLowerCase()) || !data[index].value) {
            checkVal = false;
          }
        }
      } else {
        checkVal = false;
      }

      if (!checkVal) {
        // Swal.fire('กรุณาตรวจสอบข้อมูล ' + data[index].header)
        Swal.fire({
          title: ('กรุณาตรวจสอบข้อมูล ' + data[index].header),
          icon: 'warning',
          showCancelButton: false,
          confirmButtonColor: '#112d4e',
          confirmButtonText: '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
        })
        // this.toastr.warning('กรุณาตรวจสอบข้อมูล ' + data[index].header);
        return checkVal;
      }
    }
    return true;
  }
}
