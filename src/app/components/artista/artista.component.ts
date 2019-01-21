import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

    artista:any = {  };
    loading:boolean=true;
    topTrack:any=[];

  constructor( private router:ActivatedRoute,
                private spotify: SpotifyService ) { 


  this.router.params.subscribe( params =>{ 
    console.log(params);
    this.getArtista( params['id'] );
    this.ArtistaGetTopTrack( params['id'] );
    
  });

  }



  getArtista( id:string ){
    this.spotify.getArtista( id )
    .subscribe( artista => { console.log(artista);
       this.artista=artista} );
       this.loading =false;
  }


  ArtistaGetTopTrack(id:string){
    this.spotify.getTopTracks(id)
    .subscribe( tracks=>{ 
      console.log(tracks);
      this.topTrack=tracks;
    
    } )
    }

}
