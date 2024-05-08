import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})

export class ListaComponent {
  constructor(private http: HttpClient) {

  }

  listaHeroes: any = null
  
  getHeroes() {
    this.http.get('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
    .subscribe({
      next: (data: any)=>{
        console.log(data[0])
      },
      error: (error: any)=>{
        console.log(error)
      }
    })
  }
}
