import { Routes, RouterModule } from '@angular/router';

import  { 
            AboutComponent,
            PortafolioComponent,
            ItemComponent
        }from "./components/index.pages"


const routes: Routes = [
    { path: '', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ItemComponent},
    { path: '**', pathMatch: 'full', redirectTo: '' }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const route =RouterModule.forRoot(routes,{useHash:true});
