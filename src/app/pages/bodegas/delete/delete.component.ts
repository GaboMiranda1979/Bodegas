import { Bodega } from './../interfaces/bodegas.interfaces';
import { BodegaService } from './../services/bodegas.services';
import { Component, OnInit } from '@angular/core';
import { BodegasComponent } from '../bodegas.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})

export class DeleteComponent implements OnInit{

  bodegas: Bodega[] = [];
  selectedBodega!: Bodega;
  constructor(private bodegaService: BodegaService) { }

  ngOnInit(): void {
    this.getBodegas();

  }

  getBodegas(): void {
    this.bodegaService.getBodegas()
      .subscribe(bodegas => this.bodegas = bodegas);
  }


  deleteBodega(): void {
    console.log(this.selectedBodega);
    this.bodegaService.deleteBodega(this.selectedBodega)
      .subscribe(() => {
        this.getBodegas();
      });
  }
}

