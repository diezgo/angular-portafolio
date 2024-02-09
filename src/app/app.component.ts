import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'portafolios';
  constructor(public _infoPagina: InfoPaginaService,
              public _productosService: ProductosService) 
  {
    
  }
}
