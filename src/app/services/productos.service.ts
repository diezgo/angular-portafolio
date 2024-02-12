import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interfaces';
import { resolve } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto []=[];
  productosFiltrado: Producto[]=[];

  constructor(private http: HttpClient) 
  {
    this.cargarProductos();
  }

  private cargarProductos()
  {

    return new Promise( (resolve, reject) =>
    {
      this.http.get('https://angular-html-d7504-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp: any)=>
      {
        // console.log(resp);
        this.productos = resp;
        this.cargando = false;
       // resolve();
      });
    })
    
    // this.http.get('https://angular-html-d7504-default-rtdb.firebaseio.com/productos_idx.json')
    // .subscribe((resp: any)=>
    // {
    //   // console.log(resp);
    //   this.productos = resp;
    //   this.cargando = false;
      
    // });
  }

  getProducto( id: string)
  {
    return this.http.get(`https://angular-html-d7504-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string){

    if(this.productos.length === 0)
    {
      //cargar productos
      this.cargarProductos().then(()=>
      {
        //ejecutar despues de tener los productos y aplicar filtro.
        this.filtrarProductos( termino );
      });
    }else
    {
      this.filtrarProductos( termino );
    }
          // console.log( this.productosFiltrado);
  }

  private filtrarProductos( termino: string){
    console.log(this.productos);
    this.productosFiltrado = [];

    termino = termino.toLowerCase();


    //   this.productosFiltrado = this.productos.filter(prod =>
    //   prod.categoria.toLowerCase().includes(termino.toLowerCase())
    // );
    //  console.log(this.productosFiltrado);
     

    this.productos.forEach( prod =>
      {
        const tituloLower = prod.titulo.toLowerCase();

        if( prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf( termino ) >= 0)
        {
          this.productosFiltrado.push( prod);
        }
        
      })
      console.log(this.productosFiltrado);
  }
}
