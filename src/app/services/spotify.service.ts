import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';


import { map } from 'rxjs/operators'; //para filtrado map


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log('spotify serviciio listo');
    
   }

   getQuery(query:string){
     const url = `https://api.spotify.com/v1/${query}`;
     
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAz9I-Xl0Fu7CDzrUUwpIloWFN2rHaXU4O_t6CHG1fEMRh7ktagBkkPWTb9iOwhVbPbbKW3swFOfIYcfJs'

    });

    return this.http.get(url,{headers});
   }



   getNewReleases(){

      // const headers = new HttpHeaders({
      //   'Authorization': 'Bearer  BQAZsGVHe1G630VhipwzHEJzu29o_9MwAGHPhLx6y9im1vXwKDPXMgchjDIqMu0-WbcKWDBlTkLwsCSwROU'

      // });

      // return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      // .pipe(map(data=>{
      //   return data['albums'].items;
      // }))

      return this.getQuery('browse/new-releases').pipe(map(data=>{
        return data['albums'].items;
      }))
      
      // this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
      // .pipe(map(data=>{
      //   return data['albums'].items;
      // }))
      // .subscribe(data=>{
      //   console.log(data);
      // });


   }
   getArtistas(termino:string){
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer  BQAZsGVHe1G630VhipwzHEJzu29o_9MwAGHPhLx6y9im1vXwKDPXMgchjDIqMu0-WbcKWDBlTkLwsCSwROU'

    // });

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data=>{
      return data['artists'].items;
    }));
    
    // this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
    // .pipe(map(data=>{
    //   return data['artists'].items;
    // }));


  }

  getArtista(id:string){

    return this.getQuery(`artists/${id}`);
    // .pipe(map(data=>{
    //   return data['artists'].items;
    // }));
  }

  getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe(map(data=>{
      return data['tracks'];
    }));
  }
}
