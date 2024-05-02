import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { Cita } from '../modelo/cita';
import { ConfiguracionService } from '../servicios/configuracion.service';
import { CitaService } from '../servicios/cita.service';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';

@Component({
  selector: 'app-lista-de-citas',
  templateUrl: './lista-de-citas.component.html',
  styleUrls: ['./lista-de-citas.component.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon, IonItem, IonLabel, IonList ]
})
export class ListaDeCitasComponent  implements OnInit {
  
  @Input() citas:Cita[] = []
  @Output() onChange = new EventEmitter<Cita>()
  
  constructor(private configuracionesService: ConfiguracionService,
    private citaService: CitaService){
      addIcons({
        trash
      }) 
   }

  ngOnInit() {
    console.log("ListadeCitasComponent::ionViewWillEnter()")
  }

  ionViewWillEnter(){
    console.log("ListaDeCitasComponent::ionViewWillEnter()")
  }

  eliminarCita(cita:Cita){
    if(this.configuracionesService.eliminarRegistros()){
      this.citaService.deleteCita(cita);
      this.citas = this.citaService.getCitas();
    }
  }
}
