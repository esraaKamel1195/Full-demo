import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'employee/:id', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
