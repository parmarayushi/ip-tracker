import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpTrackerContainerComponent } from './ip-tracker-container/ip-tracker-container.component';

const routes: Routes = [{ path: '', component: IpTrackerContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpTrackerRoutingModule { }
