import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantesService {

  restaurantes = [
    {
      nombre: "Mcdonalds",
      descripcion: "McDonald's es una franquicia de restaurantes de servicio rápido estadounidense con sede en Chicago, Illinois. Sus principales productos son las hamburguesas, las patatas fritas, los menús para el desayuno, los refrescos, los batidos, los helados, los postres y, recientemente, las ensaladas de fruta y otros productos exclusivos para diversos países. Atiende aproximadamente a 68 millones de clientes por día,2​ en más de 36 000 establecimientos, en 118 territorios y países alrededor del mundo. La cadena empleó a 1,7 millones de personas.3​ En la mayoría de los restaurantes se han incluido distintas áreas con juegos para niños",
      imagen: "https://www.camaracivica.com/wp-content/uploads/2017/09/maxresdefault.jpg",
      ofertsas: [
        {
          imagen: "https://d701vexhkz032.cloudfront.net/media/images/menu-content/CO/sandwiches/crispy_onion_carne_sello_co.png",
          precioNormal: 25000,
          precioOferta: 20000
        },
        {
          imagen: "https://d701vexhkz032.cloudfront.net/media/images/menu-content/CO/sandwiches/crispy_onion_carne_sello_co.png",
          precioNormal: 25000,
          precioOferta: 20000
        },
        {
          imagen: "https://d701vexhkz032.cloudfront.net/media/images/menu-content/CO/sandwiches/crispy_onion_carne_sello_co.png",
          precioNormal: 25000,
          precioOferta: 20000
        }
      ]
    },

    {
      nombre: "burguer-king",
      descripcion: "Burger King, también conocida como BK,1​ es una cadena de establecimientos de comida rápida estadounidense con sede central en Miami (Florida), fundada por James McLamore y David Edgerton, presente a nivel internacional y especializada principalmente en la elaboración de hamburguesas.",
      imagen: "https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2018/01/Burger-King.jpg?width=1200&enable=upscale",
      ofertsas: [
        {
          imagen: "https://d701vexhkz032.cloudfront.net/media/images/menu-content/CO/sandwiches/crispy_onion_carne_sello_co.png",
          precioNormal: 25000,
          precioOferta: 20000
        },
        {
          imagen: "https://d701vexhkz032.cloudfront.net/media/images/menu-content/CO/sandwiches/crispy_onion_carne_sello_co.png",
          precioNormal: 25000,
          precioOferta: 20000
        },
        {
          imagen: "https://d701vexhkz032.cloudfront.net/media/images/menu-content/CO/sandwiches/crispy_onion_carne_sello_co.png",
          precioNormal: 25000,
          precioOferta: 20000
        }
      ]
    }
  ]
  constructor() { }


  buscarRestaurante(palabra: string) {
    let restauranteArr = [];
    palabra = palabra.toLowerCase();
    for (let restaurante of this.restaurantes) {
      let nombre = restaurante.nombre.toLowerCase();
      if (nombre.indexOf(palabra) >= 0) {
        restauranteArr.push(restaurante);
      }
    }
    return restauranteArr;
  }
}
