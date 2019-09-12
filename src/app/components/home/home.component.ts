import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  // paises:any[] = [];

  // constructor(private http:HttpClient) { //peticion de una API
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe(respuesta=>{
  //     this.paises = respuesta;
  //     console.log(respuesta); //me suscirbo para ver los datos de los paises
  //   })

  //  }

  nuevasCanciones:any[] = [];
  loading:boolean;
  error:boolean;
  mensajeError:string;

  constructor(private spotify:SpotifyService){

    this.loading = true;
    this.error = false;



    this.spotify.getNewReleases().subscribe(
      (data:any)=>{
           // console.log(data.albums.items);
            // this.nuevasCanciones = data.albums.items;
            this.nuevasCanciones = data;
            this.loading = false;

      },(errorServicio)=>{
        this.loading = false;
        this.error = true;
        console.log(errorServicio);
        this.mensajeError = errorServicio.error.error.message;
      }
    );
    
  }

  ngOnInit() {
  }

}
