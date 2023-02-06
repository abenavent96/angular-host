import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeComponentModule)
  },
  {
    path: 'mfe-navigation',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe',
      exposedModule: './Request'
    }).then((m) => m.RequestModule)
  },
  {
    path: 'mfe-login',
    loadChildren: () => loadRemoteModule({
      type: 'manifest',
      remoteName: 'mfe-login',
      exposedModule: './Module'
    }).then((m) => m.RemoteEntryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
