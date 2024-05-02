import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonFab, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCard } from '@ionic/angular/standalone';
import { Cita } from '../modelo/cita';
import { CitaService } from '../servicios/cita.service';
import { addIcons } from 'ionicons';
import { addCircleOutline, settingsOutline } from 'ionicons/icons'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonFab, CommonModule, RouterModule, IonButtons, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit{

  citaAleatoria!: Cita;

  constructor(private citaService: CitaService) {
    addIcons({
      settingsOutline,
      addCircleOutline
    })
  }

  ngOnInit(): void {
    this.cargarCitaAleatoria();  }

    cargarCitaAleatoria(){
      this.citaAleatoria = this.citaService.getRandomCita()
    }
}
