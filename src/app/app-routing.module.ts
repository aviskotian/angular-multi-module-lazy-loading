import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './modules/home/home-layout/home-layout.component';
import { AboutLayoutComponent } from './modules/about/about-layout/about-layout.component';

const routes: Routes = [
  {
    path:'',
    component: HomeLayoutComponent,
    loadChildren: () =>
                import('./modules/home/home.module').then(m =>m.HomeModule)
  },
  {
    path:'about',
    component: AboutLayoutComponent,
    loadChildren: () =>
                import('./modules/about/about.module').then(m =>m.AboutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
