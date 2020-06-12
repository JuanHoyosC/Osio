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
  constructor(private _activeRoute: ActivatedRoute, private _restaurante: RestaurantesService) { 
    this._activeRoute.params.subscribe( params=>{
      this.restaurante = this._restaurante.buscarRestaurante(params['id']);
    }
    )
  }

  ngOnInit(): void {
    
  }

}
