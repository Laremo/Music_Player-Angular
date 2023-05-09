import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '', //en la raiz
    component: HomePageComponent, //llama al componente HomePageComponent (que tendra sus propias rutas)
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule), //Y cargará el módulo, con su respectiva lógica
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
