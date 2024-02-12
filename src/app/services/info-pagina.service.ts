import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pag-service';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) 
  {
      // console.log('servicio de info Pagina lisot');
      this.cargarInfo();
      this.cargarEquipo();
   
    
  }

  private cargarInfo()
  {
     //leer archivo JSON
     this.http.get('assets/data/data-pag.json')
     .subscribe((resp: infoPagina) =>
       {
         this.cargada = true;
         this.info = resp;
         //console.log(resp);
         
       })
  }

  private cargarEquipo() 
  {
    this.http.get('https://angular-html-d7504-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any)=>
    {
      this.equipo = resp;
      //console.log(resp);
      
    })
  }
}




