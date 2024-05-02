import { Injectable } from '@angular/core';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  private _citas:Cita[] = [
    new Cita (1, 'El éxito consiste en obtener lo que se desea. La félicidad en disfrutar lo que se obtiene.', 'Ralph Waldo Emerson'),
    new Cita (2, 'Las personas no son recordadas por el número de veces que fracasan, sino por el número de veces que tienen éxito.' , 'Thomas Edison'),
    new Cita (3, 'Ningún viento es bueno para el barco que no se sabe adónde va', 'Séneca'),
  ]

  constructor() {
   }

  agregarCita(cita: Cita) {
    cita.id =Date.now()
    this._citas.push(cita);
  }

  getCitas(): Cita[]  {
    console.dir(this._citas)
    return this._citas
  }

  private getIndice(cita:Cita):number {
    return this._citas.findIndex(citita => citita.id === cita.id)
  }

  deleteCita(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas.splice(indice, 1)
    }    
  }

  editar(cita:Cita) {
    const indice = this.getIndice(cita)
    if( indice >= 0) {
      this._citas[indice] = cita
    }    
  }

  getRandomCita() {
    const randomIndex = Math.floor(Math.random() * this._citas.length);
    return {
      ...this._citas[randomIndex]
    };
  }
}
