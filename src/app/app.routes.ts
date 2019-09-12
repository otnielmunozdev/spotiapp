import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { SeachComponent } from './components/seach/seach.component';



export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'artista', component: ArtistaComponent },
    { path: 'search', component: SeachComponent },
    { path: 'artist/:id', component: ArtistaComponent },
    { path: '', pathMatch: 'full',redirectTo: 'home' }, //cualquier otra ri=uta te direccioe a home 
    { path: '**', pathMatch: 'full',redirectTo: 'home' }, //cualquier otra ri=uta te direccioe a home 
];

// @NgModule({
//     imports: [RouterModule.forRoot(ROUTES)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule {}
