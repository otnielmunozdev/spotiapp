import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styles: []
})
export class SeachComponent implements OnInit {

  artistas: any[]= [];
  loading:boolean;

  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    console.log(termino);
    this.loading = true;

    this.spotify.getArtistas(termino).subscribe((data:any)=>{
      // console.log(data.artists.items);
      // this.artistas = data.artists.items;
      this.artistas = data;
      this.loading = false;

      
    });
    

  }

}
