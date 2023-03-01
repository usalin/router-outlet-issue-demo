import { Routes } from "@angular/router";
import { AccountComponent } from "../components/account/account.component";
import { DashboardComponent } from "../components/dashboard/dashboard.component";
import { ACCOUNT_ROUTES } from "./account.routes";

 export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'accounts/:id', component: AccountComponent, children: <any>ACCOUNT_ROUTES}
  ];


