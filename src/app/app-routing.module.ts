import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ErrorListComponent} from './pages/error-list/error-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/error-list', pathMatch: 'full'},
  {path: 'error-list', component: ErrorListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
