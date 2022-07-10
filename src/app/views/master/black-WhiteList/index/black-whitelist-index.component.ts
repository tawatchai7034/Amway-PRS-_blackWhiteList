import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { FormGroup,FormBuilder } from '@angular/forms';
import { BlackWhiteInfo } from './../../../../models/blackWhite';
import { BlackWhiteServicesService } from './../../../../services/blackWhite-service/black-white-services.service';

@Component({
  selector: 'app-black-whitelist-index',
  templateUrl: './black-whitelist-index.component.html',
  styleUrls: ['./black-whitelist-index.component.sass'],
})
export class BlackWhitelistIndexComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  BlackWhiteList: any = [];
  searchForm : FormGroup;

  constructor(
    private router: Router,
    private blackWhiteService: BlackWhiteServicesService,
    public datepipe: DatePipe,
    public formBuilder:FormBuilder,
  ) {
    this.searchForm = this.formBuilder.group({
      receiveNo:[''],
      sku:[''],
      serialNoNew:[''],
      serialNoOld:[''],
      type:[''],
      status:[''],
    })
  }

  editButton =
    '<button type="button" class="btn btn-outline-warning btn-xs" title="แก้ไข" (click)="onEdit()"><i class="vp-edit-solid"></i></button>';
  viewButton =
    '<button type="button" class="btn btn-outline-info btn-xs" title="ดู" (click)="onView()"><i class="vp-eye"></i></button>';

  command = this.editButton + '  ' + this.viewButton;
  rows: BlackWhiteInfo[] = [];


  ngOnInit(): void {
    this.blackWhiteService.GetBlackWhiteList({
      receiveNo: '',
      sku: '',
      serialNoNew: '',
      serialNoOld: '',
      type: '',
      status: '',
    }).subscribe((res) => {
      // console.log(res);
      this.BlackWhiteList = res;
      this.rows.splice(0, this.rows.length);
      for (let i = 0; i < res.length; i++) {
        let date = this.datepipe.transform(res[i].recordDate, 'dd/MM/yyyy');
        let recordDate = date!.toString();
        let type = '';
        let status = '';

        if (res[i].type == 'B') {
          type = 'Blacklist';
        } else {
          type = 'Whitelist';
        }

        if (res[i].status == 'Y') {
          status = 'Active';
        } else if (res[i].status == 'N') {
          status = 'Inactive';
        } else {
          status = 'Delete';
        }

        let result = {
          command: this.command,
          recieveNo: res[i].receiveNo,
          SKU: res[i].sku,
          oldSerial: res[i].serialNoOld,
          newSerial: res[i].serialNoNew,
          recordDate: recordDate,
          type: type,
          status: status,
        };

        this.rows.push(result);
      }

      $('#blackWhiteTable').DataTable({
        pagingType: 'full_numbers',
        processing: true,
        searching: false,
        scrollX: true,
        scrollY: '400px',
        dom: 'frtip',
        data: this.rows,
        order: [[1, 'asc']],
        columns: [
          {
            data: 'command',
            title: '',
            orderable: false,
            className: 'center',
            width: '100px',
          },
          {
            data: 'recieveNo',
            title: 'Recieve No',
            className: 'center',
            width: '150px',
          },
          {
            data: 'SKU',
            title: 'SKU',
            className: 'left',
            width: '180px',
          },
          {
            data: 'oldSerial',
            title: 'Old Serial',
            className: 'left',
            width: '180px',
          },
          {
            data: 'newSerial',
            title: 'New Serial',
            className: 'left',
            width: '180px',
          },
          {
            data: 'recordDate',
            title: 'Record Date',
            className: 'center',
            width: '80px',
          },
          {
            data: 'type',
            title: 'Type',
            className: 'center',
            width: '100px',
          },
          {
            data: 'status',
            title: 'Status',
            className: 'center',
            width: '100px',
            render: function (data, type, row) {
              var color = 'black';
              if (data == 'Deleted') {
                color = 'red';
              }
              return '<span style="color:' + color + '">' + data + '</span>';
            },
          },
        ],
      });
    });
  }

  onSearch() {
    console.log(this.searchForm.value);
    this.blackWhiteService
      .GetBlackWhiteList(this.searchForm.value)
      .subscribe((res) => {
        // console.log(res);
        this.BlackWhiteList = res;
        this.rows.splice(0, this.rows.length);
        for (let i = 0; i < res.length; i++) {
          let date = this.datepipe.transform(res[i].recordDate, 'dd/MM/yyyy');
          let recordDate = date!.toString();
          let type = '';
          let status = '';

          if (res[i].type == 'B') {
            type = 'Blacklist';
          } else {
            type = 'Whitelist';
          }

          if (res[i].status == 'Y') {
            status = 'Active';
          } else if (res[i].status == 'N') {
            status = 'Inactive';
          } else {
            status = 'Delete';
          }

          let result = {
            command: this.command,
            recieveNo: res[i].receiveNo,
            SKU: res[i].sku,
            oldSerial: res[i].serialNoOld,
            newSerial: res[i].serialNoNew,
            recordDate: recordDate,
            type: type,
            status: status,
          };

          this.rows.push(result);
        }
        // console.log(`+++++++++++++++++++ ${this.rows} +++++++++++++++++++`);

        var datatable = $('#blackWhiteTable').DataTable();

        datatable.destroy();

        $('#blackWhiteTable').DataTable({
          pagingType: 'full_numbers',
          processing: true,
          searching: false,
          scrollX: true,
          scrollY: '400px',
          dom: 'frtip',
          data: this.rows,
          order: [[1, 'asc']],
          columns: [
            {
              data: 'command',
              title: '',
              orderable: false,
              className: 'center',
              width: '100px',
            },
            {
              data: 'recieveNo',
              title: 'Recieve No',
              className: 'center',
              width: '150px',
            },
            {
              data: 'SKU',
              title: 'SKU',
              className: 'left',
              width: '180px',
            },
            {
              data: 'oldSerial',
              title: 'Old Serial',
              className: 'left',
              width: '180px',
            },
            {
              data: 'newSerial',
              title: 'New Serial',
              className: 'left',
              width: '180px',
            },
            {
              data: 'recordDate',
              title: 'Record Date',
              className: 'center',
              width: '80px',
            },
            {
              data: 'type',
              title: 'Type',
              className: 'center',
              width: '100px',
            },
            {
              data: 'status',
              title: 'Status',
              className: 'center',
              width: '100px',
              render: function (data, type, row) {
                var color = 'black';
                if (data == 'Deleted') {
                  color = 'red';
                }
                return '<span style="color:' + color + '">' + data + '</span>';
              },
            },
          ],
        });
      });

    // window.location.reload();
  }

  onNew() {
    console.log('ok');
    this.router.navigate(['/pages/blackWhitelist/new']);
  }
  onEdit() {
    console.log('ok');
    this.router.navigate(['/pages/blackWhitelist/edit']);
  }
  onView() {
    console.log('ok');
    this.router.navigate(['/pages/blackWhitelist/view']);
  }
  onDelete() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this information!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#112d4e',
      cancelButtonColor: '#ffc107',
      confirmButtonText:
        '<i class="vp-check-solid"></i><a style="margin-left:10px;margin-right:10px">OK</a>',
      cancelButtonText:
        '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: 'Deleted!',
          text: 'Your information has been deleted.',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: '#112d4e',
          //cancelButtonColor: '#ffc107',
          confirmButtonText:
            '<i class="vp-check-solid"></i><a style="margin-left:20px;margin-right:20px">OK</a>',
          //cancelButtonText: '<i class="vp-times-solid"></i><a style="margin-left:10px">Cancel</a>',
        }).then((result) => {
          if (result.value == true) {
            this.router.navigate(['/pages/blackWhitelist']);
          }
        });
      }
    });
  }
}
function setTable(arg0: () => void) {
  throw new Error('Function not implemented.');
}
