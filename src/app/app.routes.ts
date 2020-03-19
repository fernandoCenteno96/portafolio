import { Routes, RouterModule } from '@angular/router';

import  { 
            AboutComponent,
            PortafolioComponent,
            ItemComponent,
            ContactComponent
        }from "./components/index.pages"


const routes: Routes = [
    { path: 'home', component: PortafolioComponent },
    { path: 'about', component: AboutComponent },
    { path: 'producto', component: ItemComponent},
    { path: 'contact', component: ContactComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];


export const route =RouterModule.forRoot(routes,{useHash:true});
