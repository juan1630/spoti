import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(  private http: HttpClient ) { 
    console.log("Spotify service listo");
   }


   getQuery( query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({ 
      'Authorization':'Bearer BQCMELPo8iGXGlDOLf93-GDHRkwR67TpSx-L0UujVCNBOZr7QNvf8-d3CMiM6GTsCIVrgEK4GXse5_EGk1M'
    });

      return this.http.get( url, { headers });  
   }

   getNewReleases(){

     return this.getQuery("browse/new-releases")
     .pipe( map(  data => data['albums'].items ));
}


    getArtistas( termino:string ){ 

     
      return  this.getQuery(`search?q=${termino}&type=artist`)
                .pipe( map(  data =>   data['artists'].items ));
    }
    
    getArtista(id:string){ 
      return this.getQuery(`artists/${id}`);
    }

    getTopTracks( id:string ){
     return this.getQuery( `artists/${id}/top-tracks?country=us` )
      .pipe( map( data => data['tracks'] ) )
    }
}

