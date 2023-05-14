import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Bodega } from './interfaces/bodegas.interfaces';
import { tap } from 'rxjs/operators';
import { BodegaService } from './services/bodegas.services';
import { MaterialModule } from 'src/app/material.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bodegas',
 templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})

  export class BodegasComponent implements OnInit {

    bodegas: Bodega[] = [];

    constructor(private bodegaService: BodegaService) { }

    ngOnInit(): void {
      this.getBodegas();
    }

   getBodegas(): void {
   this.bodegaService.getBodegas()
      .subscribe(bodegas => this.bodegas = bodegas);
     }

}
