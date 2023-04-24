import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../bodegas/services/bodegas.services';
import { BodegasComponent } from '../bodegas/bodegas.component';
import { Bodega } from '../bodegas/interfaces/bodegas.interfaces';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  bodega: Bodega = {
    id: 0,
    name:'',
    zone:''
  }

  onSubmit() {
    this.bodegaService.addBodega(this.bodega).subscribe()
    console.log(this.bodega);
    this.bodega = {
      id:0,
      name: '',
      zone: ''
    };
  }


  constructor(private bodegaService: BodegaService) { }

  ngOnInit(): void {
this.addBodega();
  }

  addBodega(): void{
    this.bodegaService.addBodega(this.bodega)
  }
}
