import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { HomeComponent } from '../../components/home/home.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
