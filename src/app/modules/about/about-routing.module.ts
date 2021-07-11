import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../../components/about/about.component';

const routes: Routes = [
  {
    path:'',
    component: AboutComponent          
  },
  {
    path:'team',
    loadChildren: () =>
                import('./team/team.module').then(m =>m.TeamModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
