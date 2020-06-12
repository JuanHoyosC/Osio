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
      ofertas: [
        {
          imagen: "https://www.latinspots.com/files/notas/Gnota_44949.jpg",
          nombre: "Hamburguesa con guacamole",
          precioNormal: 20000,
          precioOferta: 18000,
          puntuacion: "4.7 (1000 votos)"
        },
        {
          imagen: "https://gastronomiaycia.republica.com/wp-content/uploads/2019/04/hamburguesa_vegana_mcdonalds-680x454.jpg",
          nombre: "Hamburguesa vegana",
          precioNormal: 30000,
          precioOferta: 23000,
          puntuacion: "4.0 (1300 votos)"
        },
        {
          imagen: "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Double-Quarter-Pounder-with-Cheese.jpg?$Category_Desktop$",
          nombre: "Hamburguesa con queso",
          precioNormal: 27000,
          precioOferta: 25000,
          puntuacion: "4.2 (600 votos)"
        }
      ]
    },

    {
      nombre: "burguer-king",
      descripcion: "Burger King, también conocida como BK,1​ es una cadena de establecimientos de comida rápida estadounidense con sede central en Miami (Florida), fundada por James McLamore y David Edgerton, presente a nivel internacional y especializada principalmente en la elaboración de hamburguesas.",
      imagen: "https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2018/01/Burger-King.jpg?width=1200&enable=upscale",
      ofertas: [
        {
          imagen: "https://cnnespanol2.files.wordpress.com/2015/09/150902100429-burger-king-whopper-780x439.jpg?quality=100&strip=info",
          nombre: "Whopper",
          precioNormal: 25000,
          precioOferta: 20000,
          puntuacion: "4.8 (1200 votos)"
        },
        {
          imagen: "https://www.larepublica.net/storage/images/2019/11/13/20191113104744.whopper-vegetriano-bk.jpg",
          nombre: "Rebel Whopper",
          precioNormal: 30000,
          precioOferta: 28000,
          puntuacion: "4.6 (700 votos)"
        },
        {
          imagen: "https://centroemprendedor.com/wp-content/uploads/2014/05/burger-king-688x480.jpg",
          nombre: "Combo Burguer king",
          precioNormal: 20000,
          precioOferta: 18000,
          puntuacion: "4.2 (1000 votos)"
        }
      ]
    }
  ]
  constructor() { }


  buscarRestaurante(palabra: string) {
    console.log(palabra)
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
