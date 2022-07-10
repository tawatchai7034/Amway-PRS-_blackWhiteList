import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaultInfo } from 'src/app/models/fault';
import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';


@Injectable({
    providedIn: 'root'
})

export class FaultService {
   
    constructor(private http: HttpClient) { }

    static  getFaultData(){
    var enKey = "001";
    var editButton = "<button type=\"button\" class=\"btn btn-outline-warning btn-xs\" id=\"btnEdit_" + enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"แก้ไข\" onclick=\"EditData('" + enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-edit-solid\"></i></button>";
    var deleteButton = "<button type=\"button\" class=\"btn btn-outline-danger btn-xs\" id=\"btnDel_" + enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ลบ\" onclick=\"DeleteData('" + enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-trash-alt\"></i></button>";
    var viewButton = "<button type=\"button\" class=\"btn btn-outline-info btn-xs\" id=\"btnView_" + enKey + "\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"ดู\" onclick=\"ViewData('" + enKey + "')\" aria-label=\"Left Align\"><i class=\"vp-eye\"></i></button>";

    var command = editButton + " " + deleteButton + " " + viewButton;

    const Fault_Data: FaultInfo[] = [
        { command: command, sku: "0001", code: "0001", name: 'Name1', cost: 1.0079, status: 'Active' },
        { command: command, sku: "0002", code: "0002", name: 'Name2', cost: 4.0026, status: 'Active' },
        { command: command, sku: "0003", code: "0003", name: 'Name3', cost: 6.941, status: 'Active' },
        { command: command, sku: "0004", code: "0004", name: 'Name4', cost: 9.0122, status: 'Active' },
        { command: command, sku: "0005", code: "0005", name: 'Name5', cost: 10.811, status: 'Active' },
        { command: command, sku: "0006", code: "0006", name: 'Name6', cost: 12.0107, status: 'Active' },
        { command: command, sku: "0007", code: "0007", name: 'Name7', cost: 14.0067, status: 'Active' },
        { command: command, sku: "0008", code: "0008", name: 'Name8', cost: 15.9994, status: 'Active' },
        { command: command, sku: "0009", code: "0009", name: 'Name9', cost: 18.9984, status: 'Deleted' },
        { command: command, sku: "0010", code: "0010", name: 'Name10', cost: 20.1797, status: 'Active' },
    ];
    
}
    

}






