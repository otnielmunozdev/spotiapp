import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HttpClientModule, HttpClient } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SeachComponent } from './components/seach/seach.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';

//importar RUTAS
import { ROUTES } from './app.routes';

//Pipes
import { NoimagesPipe } from './pipes/noimages.pipe';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';


//services
// import { SpotifyService } from './services/spotify.service';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeachComponent,
    ArtistaComponent,
    NabvarComponent,
    NoimagesPipe,
    TarjetasComponent,
    LoadingComponent,
    DomseguroPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})
  ],
  providers: [
    // SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
