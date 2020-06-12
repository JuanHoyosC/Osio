import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  RestaurantesService} from '../../services/restaurantes.service'

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent implements OnInit {

  restaurante:any = [];
  tamaño: number = 0;
  mensaje = false;
  texto = ""
  constructor(private _activeRoute: ActivatedRoute, private _restaurante: RestaurantesService) { 
    this._activeRoute.params.subscribe( params=>{
      this.restaurante = this._restaurante.buscarRestaurante(params['id']);
      if(this.restaurante = []){
        this.mensaje = true
        this.texto = "El restaurante "+ params['id'] + " no se encuentra en la base de datos";
      }else{
        console.log("hola")
        this.mensaje = false
      }
    }
    )
  }

  ngOnInit(): void {
    
  }

}
