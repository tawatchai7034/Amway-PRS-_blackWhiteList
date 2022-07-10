import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './views/shared/layout/layout.component';
import { LoginComponent } from './views/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { CounterComponent } from './views/counter/counter.component';
import { DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule} from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ReceiveComponent } from './views/receive/receive.component';
import { ReceiveDetailComponent } from './views/receive/receive-detail/receive-detail.component'
import { MatStepperModule } from '@angular/material/stepper';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import { PartIndexComponent } from './views/master/part/index/part-index.component';
import { PartNewComponent } from './views/master/part/new/part-new.component';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { PartEditComponent } from './views/master/part/edit/part-edit.component';
import { PartViewComponent } from './views/master/part/view/part-view.component';
import {MatDividerModule} from '@angular/material/divider';
import { NavbarComponent } from './views/shared/navbar/navbar.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { PieComponent } from './chart/pie/pie.component';
import { LineComponent } from './chart/line/line.component';
import * as CanvasJSAngularChart from '../assets/canvasjs-3.6.4/canvasjs.angular.component';
import { BarComponent } from './chart/bar/bar.component';
import { DonutComponent } from './chart/donut/donut.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { NgChartsModule } from 'ng2-charts';
import { MultiComponent } from './chart/multi/multi.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FaultIndexComponent } from './views/master/fault/index/fault-index.component';
import { FaultNewComponent } from './views/master/fault/new/fault-new.component';
import { ToastrModule } from 'ngx-toastr';
import { NotifierModule } from 'angular-notifier';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { NewModalComponent } from './views/master/fault/new_modal/new-modal.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {MatTableModule} from '@angular/material/table';
import { FaultEditComponent } from './views/master/fault/edit/fault-edit.component';
import { FaultViewComponent } from './views/master/fault/view/fault-view.component';
import { BranchEditComponent } from './views/master/branch/edit/branch-edit.component';
import { BranchViewComponent } from './views/master/branch/view/branch-view.component';
import { BranchIndexComponent } from './views/master/branch/index/branch-index.component';
import { WarrantyIndexComponent } from './views/master/warranty/index/warranty-index.component';
import { WarrantyNewComponent } from './views/master/warranty/new/warranty-new.component';
import { WarrantyEditComponent } from './views/master/warranty/edit/warranty-edit.component';
import { WarrantyViewComponent } from './views/master/warranty/view/warranty-view.component';
import { EmployeeNewComponent } from './views/master/employee/new/employee-new.component';
import { EmployeeIndexComponent } from './views/master/employee/index/employee-index.component';
import { EmployeeEditComponent } from './views/master/employee/edit/employee-edit.component';
import { EmployeeViewComponent } from './views/master/employee/view/employee-view.component';
import { PermissionIndexComponent } from './views/master/permission/index/permission-index.component';
import { PermissionNewComponent } from './views/master/permission/new/permission-new.component';
import { PermissionEditComponent } from './views/master/permission/edit/permission-edit.component';
import { PermissionViewComponent } from './views/master/permission/view/permission-view.component';
import { BorrowIndexComponent } from './views/master/borrow/index/borrow-index.component';
import { BorrowNewComponent } from './views/master/borrow/new/borrow-new.component';
import { BorrowViewComponent } from './views/master/borrow/view/borrow-view.component';
import { BorrowEditComponent } from './views/master/borrow/edit/borrow-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BomIndexComponent } from './views/master/bom/index/bom-index.component';
import { BomNewComponent } from './views/master/bom/new/bom-new.component';
import { BomEditComponent } from './views/master/bom/edit/bom-edit.component';
import { BomViewComponent } from './views/master/bom/view/bom-view.component';
import { ReceiveShopperComponent } from './views/receive/receive-shopper/receive-shopper.component';
import { ReceiveShopperDetailComponent } from './views/receive/receive-shopper-detail/receive-shopper-detail.component';
import { BorrowNewModalComponent } from './views/master/borrow/borrow-new-modal/borrow-new-modal.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CalendarIndexComponent } from './views/master/calendar/index/calendar-index.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { VendorNewComponent } from './views/master/vendor/new/vendor-new.component';
import { VendorIndexComponent } from './views/master/vendor/index/vendor-index.component';
import { VendorEditComponent } from './views/master/vendor/edit/vendor-edit.component';
import { VendorViewComponent } from './views/master/vendor/view/vendor-view.component';
import { InhomeViewComponent } from './views/inHomeService/view/inhome-view.component';
import { InhomeIndexComponent } from './views/inHomeService/index/inhome-index.component';
import { InhomeEditComponent } from './views/inHomeService/edit/inhome-edit.component';
import { InhomeNewComponent } from './views/inHomeService/new/inhome-new.component';
import { InhomeServiceComponent } from './views/inHomeService/service/inhome-service.component';
import { InhomeSurveyComponent } from './views/inHomeService/survey/inhome-survey.component';
import { InhomeCancelComponent } from './views/inHomeService/cancel/inhome-cancel.component';
import { ReceiveToShipmentComponent } from './views/receive/receive-to-shipment/receive-to-shipment.component';
import { SendToShipmentComponent } from './views/receive/send-to-shipment/send-to-shipment.component';
import { MaintenanceComponent } from './views/maintenance/maintenance-new/maintenance.component';
import { ReceiveDurableViewComponent } from './views/counter/receive-durable-view/receive-durable-view.component';
import { ReceiveShopperViewComponent } from './views/counter/receive-shopper-view/receive-shopper-view.component';
import { BlackWhitelistNewComponent } from './views/master/black-WhiteList/new/black-whitelist-new.component';
import { BlackWhitelistViewComponent } from './views/master/black-WhiteList/view/black-whitelist-view.component';
import { BlackWhitelistEditComponent } from './views/master/black-WhiteList/edit/black-whitelist-edit.component';
import { BlackWhitelistIndexComponent } from './views/master/black-WhiteList/index/black-whitelist-index.component';
import { ValidateService } from './services/validate-service/validate-service';
import { ConfigNewComponent } from './views/master/config/new/config-new.component';
import { ConfigEditComponent } from './views/master/config/edit/config-edit.component';
import { ConfigViewComponent } from './views/master/config/view/config-view.component';
import { ConfigIndexComponent } from './views/master/config/index/config-index.component';
import { MaintenanceRepairComponent } from './views/maintenance/maintenance-repair/maintenance-repair.component';
import { MaintenanceServiceModalComponent } from './views/maintenance/maintenance-service-modal/maintenance-service-modal.component';
import { MaintenancePendingModalComponent } from './views/maintenance/maintenance-pending-modal/maintenance-pending-modal.component';
import { MaintenanceIndexComponent } from './views/maintenance/maintenance-index/maintenance-index.component';
import { MaintenanceCloseModalComponent } from './views/maintenance/maintenance-close-modal/maintenance-close-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    CounterComponent,
    ReceiveComponent,
    ReceiveDetailComponent,
    PartIndexComponent,
    PartNewComponent,
    PartEditComponent,
    PartViewComponent,
    NavbarComponent,
    DashboardComponent,
    PieComponent,
    LineComponent,
    CanvasJSChart,
    BarComponent,
    DonutComponent,
    MultiComponent,
    FaultIndexComponent,
    FaultNewComponent,
    NewModalComponent,
    FaultEditComponent,
    FaultViewComponent,
    BranchEditComponent,
    BranchViewComponent,
    BranchIndexComponent,
    WarrantyIndexComponent,
    WarrantyNewComponent,
    WarrantyEditComponent,
    WarrantyViewComponent,
    EmployeeNewComponent,
    EmployeeIndexComponent,
    EmployeeEditComponent,
    EmployeeViewComponent,
    PermissionIndexComponent,
    PermissionNewComponent,
    PermissionEditComponent,
    PermissionViewComponent,
    BorrowIndexComponent,
    BorrowNewComponent,
    BorrowViewComponent,
    BorrowEditComponent,
    BomIndexComponent,
    BomNewComponent,
    BomEditComponent,
    BomViewComponent,
    ReceiveShopperComponent,
    ReceiveShopperDetailComponent,
    BorrowNewModalComponent,
    CalendarIndexComponent,
    VendorNewComponent,
    VendorIndexComponent,
    VendorEditComponent,
    VendorViewComponent,
    InhomeViewComponent,
    InhomeIndexComponent,
    InhomeEditComponent,
    InhomeNewComponent,
    InhomeServiceComponent,
    InhomeSurveyComponent,
    InhomeCancelComponent,
    ReceiveToShipmentComponent,
    SendToShipmentComponent,
    MaintenanceComponent,
    ReceiveDurableViewComponent,
    ReceiveShopperViewComponent,
    BlackWhitelistNewComponent,
    BlackWhitelistViewComponent,
    BlackWhitelistEditComponent,
    BlackWhitelistIndexComponent,
    ConfigNewComponent,
    ConfigEditComponent,
    ConfigViewComponent,
    ConfigIndexComponent,
    MaintenanceRepairComponent,
    MaintenanceServiceModalComponent,
    MaintenancePendingModalComponent,
    MaintenanceIndexComponent,
    MaintenanceCloseModalComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatStepperModule,
    MatTreeModule,
    MatIconModule,
    MomentDateModule,
    MatDividerModule,
    NgChartsModule,
    NgxChartsModule,
    ToastrModule.forRoot({
      resetTimeoutOnDuplicate:true,
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: false,
      countDuplicates:true,
      autoDismiss: false,
       maxOpened: 0,    
      newestOnTop: true,
      closeButton: true,
   
    }),
   
    MatRadioModule,
    NotifierModule.withConfig({
      // Custom options in here
    }),
    MatDialogModule,
    NgxSpinnerModule,
    BsDatepickerModule.forRoot(),
    MatTableModule,
    FormsModule,
    MatCheckboxModule,
    FullCalendarModule,
    ReactiveFormsModule,
    
  ],
  providers: [ValidateService,DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
