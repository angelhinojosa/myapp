import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// El PreloadAllModules del routing funciona bien cuando la app no tiene muchos módulos, unos 20 máximo


import { Page404Component } from './page404/page404.component';


const routes: Routes = [
  {
    path: '', // el vacío es la redirección por defecto de nuestra página.
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path: 'cms',
    loadChildren: () => import('./cms/cms.module').then(m => m.CmsModule)
  },
  {
    path: '**', // Para cuando se introduce una ruta vacía se usa el doble *
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }