import { loadManifest } from '@angular-architects/module-federation';
import { environment } from './environments/environment';

loadManifest(`/assets/module-federation-manifests/${environment.moduleFederationManifest}`)
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
