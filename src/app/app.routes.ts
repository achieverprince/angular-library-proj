import {RouterModule, Routes} from '@angular/router';
import {LibraryComponent} from './component/library.component';

// Route Configuration
export const routes: Routes = [
    {
        path: '',
        redirectTo: '/library',
        pathMatch: 'full'
    },
    { path: 'library', component: LibraryComponent}
];

RouterModule.forRoot(routes);
