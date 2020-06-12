import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private elRef: ElementRef, private _router: Router) { }

  ngOnInit(): void {
  }

  buscar():void{
    const id = this.elRef.nativeElement.querySelector('#busqueda').value;
    this._router.navigate(['/restaurante',id]);
  }

}
