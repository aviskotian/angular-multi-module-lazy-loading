import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { AboutRoutingModule } from './about-routing.module';
import { AboutLayoutComponent } from './about-layout/about-layout.component';
import { AboutComponent } from '../../components/about/about.component';


@NgModule({
  declarations: [
    AboutLayoutComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    SharedModule
  ]
})
export class AboutModule { }
