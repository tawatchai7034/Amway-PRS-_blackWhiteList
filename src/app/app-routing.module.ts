import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './views/shared/layout/layout.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CounterComponent } from './views/counter/counter.component';
import { ReceiveComponent } from './views/receive/receive.component';
import { ReceiveDetailComponent } from './views/receive/receive-detail/receive-detail.component';
import { PartIndexComponent } from './views/master/part/index/part-index.component';
import { PartNewComponent } from './views/master/part/new/part-new.component';
import { PartEditComponent } from './views/master/part/edit/part-edit.component';
import { PartViewComponent } from './views/master/part/view/part-view.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FaultIndexComponent } from './views/master/fault/index/fault-index.component';
import { FaultNewComponent } from './views/master/fault/new/fault-new.component';
import { FaultViewComponent } from './views/master/fault/view/fault-view.component';
import { FaultEditComponent } from './views/master/fault/edit/fault-edit.component';
import { BranchIndexComponent } from './views/master/branch/index/branch-index.component';
import { BranchViewComponent } from './views/master/branch/view/branch-view.component';
import { BranchEditComponent } from './views/master/branch/edit/branch-edit.component';
import { WarrantyIndexComponent } from './views/master/warranty/index/warranty-index.component';
import { WarrantyNewComponent } from './views/master/warranty/new/warranty-new.component';
import { WarrantyEditComponent } from './views/master/warranty/edit/warranty-edit.component';
import { WarrantyViewComponent } from './views/master/warranty/view/warranty-view.component';
import { EmployeeIndexComponent } from './views/master/employee/index/employee-index.component';
import { EmployeeNewComponent } from './views/master/employee/new/employee-new.component';
import { EmployeeEditComponent } from './views/master/employee/edit/employee-edit.component';
import { EmployeeViewComponent } from './views/master/employee/view/employee-view.component';
import { PermissionIndexComponent } from './views/master/permission/index/permission-index.component';
import { PermissionNewComponent } from './views/master/permission/new/permission-new.component';
import { PermissionEditComponent } from './views/master/permission/edit/permission-edit.component';
import { PermissionViewComponent } from './views/master/permission/view/permission-view.component';
import { BorrowIndexComponent } from './views/master/borrow/index/borrow-index.component';
import { BorrowNewComponent } from './views/master/borrow/new/borrow-new.component';
import { BorrowEditComponent } from './views/master/borrow/edit/borrow-edit.component';
import { BorrowViewComponent } from './views/master/borrow/view/borrow-view.component';
import { BomIndexComponent } from './views/master/bom/index/bom-index.component';
import { BomNewComponent } from './views/master/bom/new/bom-new.component';
import { BomEditComponent } from './views/master/bom/edit/bom-edit.component';
import { BomViewComponent } from './views/master/bom/view/bom-view.component';
import { ReceiveShopperComponent } from './views/receive/receive-shopper/receive-shopper.component';
import { ReceiveShopperDetailComponent } from './views/receive/receive-shopper-detail/receive-shopper-detail.component';
import { CalendarIndexComponent } from './views/master/calendar/index/calendar-index.component';
import { VendorIndexComponent } from './views/master/vendor/index/vendor-index.component';
import { VendorNewComponent } from './views/master/vendor/new/vendor-new.component';
import { VendorEditComponent } from './views/master/vendor/edit/vendor-edit.component';
import { VendorViewComponent } from './views/master/vendor/view/vendor-view.component';
import { InhomeIndexComponent } from './views/inHomeService/index/inhome-index.component';
import { InhomeNewComponent } from './views/inHomeService/new/inhome-new.component';
import { InhomeEditComponent } from './views/inHomeService/edit/inhome-edit.component';
import { InhomeViewComponent } from './views/inHomeService/view/inhome-view.component';
import { InhomeServiceComponent } from './views/inHomeService/service/inhome-service.component';
import { InhomeSurveyComponent } from './views/inHomeService/survey/inhome-survey.component';
import { InhomeCancelComponent } from './views/inHomeService/cancel/inhome-cancel.component';
import { ReceiveToShipmentComponent } from './views/receive/receive-to-shipment/receive-to-shipment.component';
import { SendToShipmentComponent } from './views/receive/send-to-shipment/send-to-shipment.component';
import { MaintenanceComponent } from './views/maintenance/maintenance-new/maintenance.component';
import { ReceiveDurableViewComponent } from './views/counter/receive-durable-view/receive-durable-view.component';
import { ReceiveShopperViewComponent } from './views/counter/receive-shopper-view/receive-shopper-view.component';
import { BlackWhitelistIndexComponent } from './views/master/black-WhiteList/index/black-whitelist-index.component';
import { BlackWhitelistNewComponent } from './views/master/black-WhiteList/new/black-whitelist-new.component';
import { BlackWhitelistEditComponent } from './views/master/black-WhiteList/edit/black-whitelist-edit.component';
import { BlackWhitelistViewComponent } from './views/master/black-WhiteList/view/black-whitelist-view.component';
import { ConfigIndexComponent } from './views/master/config/index/config-index.component';
import { ConfigNewComponent } from './views/master/config/new/config-new.component';
import { ConfigEditComponent } from './views/master/config/edit/config-edit.component';
import { ConfigViewComponent } from './views/master/config/view/config-view.component';
import { MaintenanceRepairComponent } from './views/maintenance/maintenance-repair/maintenance-repair.component';
import { MaintenanceIndexComponent } from './views/maintenance/maintenance-index/maintenance-index.component';


const routes: Routes = [
  //{ path: '', redirectTo: '#', pathMatch: 'full' },
  { path: '',component: LoginComponent},
  
  {
    path: 'pages', component: LayoutComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'counter/receive', component: ReceiveComponent },
      { path: 'Index', component: LayoutComponent },
      { path: 'receive-detail', component: ReceiveDetailComponent },
      { path: 'part', component: PartIndexComponent },
      { path: 'part/new', component: PartNewComponent },
      { path: 'part/edit', component: PartEditComponent },
      { path: 'part/view', component: PartViewComponent },
      { path: 'fault', component: FaultIndexComponent },
      { path: 'fault/new', component: FaultNewComponent },
      { path: 'fault/edit', component: FaultEditComponent },
      { path: 'fault/view', component: FaultViewComponent },
      { path: 'branch/branch-index', component: BranchIndexComponent },
      { path: 'branch/branch-view', component: BranchViewComponent },
      { path: 'branch/branch-edit', component: BranchEditComponent },
      { path: 'warranty/warranty-index', component: WarrantyIndexComponent },
      { path: 'warranty/warranty-new', component: WarrantyNewComponent },
      { path: 'warranty/warranty-edit', component: WarrantyEditComponent },
      { path: 'warranty/warranty-view', component: WarrantyViewComponent },
      { path: 'employee', component: EmployeeIndexComponent },
      { path: 'employee/new', component: EmployeeNewComponent },
      { path: 'employee/edit', component: EmployeeEditComponent },
      { path: 'employee/view', component: EmployeeViewComponent },
      { path: 'permission', component: PermissionIndexComponent },
      { path: 'permission/new', component: PermissionNewComponent },
      { path: 'permission/edit', component: PermissionEditComponent },
      { path: 'permission/view', component: PermissionViewComponent },
      { path: 'borrow', component: BorrowIndexComponent },
      { path: 'borrow/new', component: BorrowNewComponent },
      { path: 'borrow/edit', component: BorrowEditComponent },
      { path: 'borrow/view', component: BorrowViewComponent },
      { path: 'bom', component: BomIndexComponent },
      { path: 'bom/new', component: BomNewComponent },
      { path: 'bom/edit', component:BomEditComponent },
      { path: 'bom/view', component:BomViewComponent },
      { path: 'calendar', component:CalendarIndexComponent },
      { path: 'counter/shopper', component:ReceiveShopperComponent },
      { path: 'counter/shopper-detail', component:ReceiveShopperDetailComponent },
      { path: 'vendor', component: VendorIndexComponent },
      { path: 'vendor/new', component: VendorNewComponent },
      { path: 'vendor/edit', component:VendorEditComponent },
      { path: 'vendor/view', component:VendorViewComponent },
      { path: 'inhomeService', component: InhomeIndexComponent },
      { path: 'inhomeService/new', component: InhomeNewComponent },
      { path: 'inhomeService/edit', component:InhomeEditComponent },
      { path: 'inhomeService/view', component:InhomeViewComponent },
      { path: 'inhomeService/service', component:InhomeServiceComponent },
      { path: 'inhomeService/survey', component:InhomeSurveyComponent },
      { path: 'inhomeService/cancel', component:InhomeCancelComponent },
      { path: 'counter/shopper-detail/receive-to-shipment', component:ReceiveToShipmentComponent },
      { path: 'counter/shopper-detail/send-to-shipment', component:SendToShipmentComponent },
      { path: 'maintenance/new', component: MaintenanceComponent },
      { path: 'durable-view', component:ReceiveDurableViewComponent },
      { path: 'shopper-view', component:ReceiveShopperViewComponent },
      { path: 'blackWhitelist', component: BlackWhitelistIndexComponent },
      { path: 'blackWhitelist/new', component: BlackWhitelistNewComponent },
      { path: 'blackWhitelist/edit', component:BlackWhitelistEditComponent },
      { path: 'blackWhitelist/view', component:BlackWhitelistViewComponent },
      { path: 'config', component: ConfigIndexComponent },
      { path: 'config/new', component: ConfigNewComponent },
      { path: 'config/edit', component:ConfigEditComponent },
      { path: 'config/view', component:ConfigViewComponent },
      { path: 'maintenance/maintenance-repair', component:MaintenanceRepairComponent },
      { path: 'maintenance', component:MaintenanceIndexComponent },

    ]
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
