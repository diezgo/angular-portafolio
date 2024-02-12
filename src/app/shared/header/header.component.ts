import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router, RouterModule } from '@angular/router';
// import { Router } from 'express';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  txtBuscar: string= '';
  constructor(public _servicio: InfoPaginaService,
              private router: Router)
  {

  }

  ngOnInit()
  {
      
  }

  buscarProducto(termino: string)
  {
    if(termino.length < 1)
    {
      return;
    }

    this.router.navigate(['/search', termino]);
    // console.log(termino);
    
  }
}
