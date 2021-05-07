import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"home",
    loadChildren:()=>import('./components/core/home/home.module').then((mod)=>mod.HomeModule)
  },
  {
    path:"**",
    redirectTo:"home/"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
